import * as THREE from "three";
import gsap from "gsap";

// 塔罗牌阵定义
export const SPREAD_TYPES = {
  CELTIC_CROSS: "celtic_cross", // 凯尔特十字阵 - 10张牌
  THREE_CARD: "three_card", // 三牌阵 - 3张牌
  HORSESHOE: "horseshoe", // 马蹄阵 - 7张牌
  RELATIONSHIP: "relationship", // 关系阵 - 5张牌
};

// 牌阵位置定义（相对于中心点的偏移）- 修复重叠问题
const SPREAD_POSITIONS = {
  [SPREAD_TYPES.CELTIC_CROSS]: [
    { x: 0, y: 0, z: 0 }, // 1. 现状（中心）
    { x: 0, y: 0, z: 0.05, rotZ: Math.PI / 2 }, // 2. 挑战（横置，Z轴偏移避免重叠）
    { x: 0, y: 4, z: 0 }, // 3. 基础（上方）
    { x: 0, y: -4, z: 0 }, // 4. 过去（下方）
    { x: 0, y: -8, z: 0 }, // 5. 近期过去（更下方）
    { x: 4, y: 0, z: 0 }, // 6. 未来（右侧）
    { x: 8, y: 4, z: 0 }, // 7. 自我（右上方）
    { x: 8, y: 0, z: 0 }, // 8. 环境（右中）
    { x: 8, y: -4, z: 0 }, // 9. 希望/恐惧（右下方）
    { x: 8, y: -8, z: 0 }, // 10. 结果（最右下方）
  ],
  [SPREAD_TYPES.THREE_CARD]: [
    { x: -5, y: 0, z: 0 }, // 1. 过去
    { x: 0, y: 0, z: 0 }, // 2. 现在
    { x: 5, y: 0, z: 0 }, // 3. 未来
  ],
  [SPREAD_TYPES.HORSESHOE]: [
    { x: -7, y: 5, z: 0 }, // 1. 过去
    { x: -4.5, y: 2.5, z: 0 }, // 2. 现在
    { x: -2, y: 0, z: 0 }, // 3. 隐藏影响
    { x: 0, y: 0, z: 0 }, // 4. 障碍
    { x: 2, y: 0, z: 0 }, // 5. 环境
    { x: 4.5, y: 2.5, z: 0 }, // 6. 建议
    { x: 7, y: 5, z: 0 }, // 7. 结果
  ],
  [SPREAD_TYPES.RELATIONSHIP]: [
    { x: -3, y: 3, z: 0 }, // 1. 你
    { x: 3, y: 3, z: 0 }, // 2. 对方
    { x: 0, y: 0, z: 0 }, // 3. 关系现状
    { x: -3, y: -4, z: 0 }, // 4. 你的期望
    { x: 3, y: -4, z: 0 }, // 5. 对方的期望
  ],
};

// 牌阵连接线定义（哪些牌之间需要连接）
const SPREAD_CONNECTIONS = {
  [SPREAD_TYPES.CELTIC_CROSS]: [
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
    [5, 6],
    [6, 7],
    [7, 8],
    [8, 9],
  ],
  [SPREAD_TYPES.THREE_CARD]: [
    [0, 1],
    [1, 2],
  ],
  [SPREAD_TYPES.HORSESHOE]: [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
  ],
  [SPREAD_TYPES.RELATIONSHIP]: [
    [0, 2],
    [1, 2],
    [0, 3],
    [1, 4],
    [2, 3],
    [2, 4],
  ],
};

// 牌阵名称
const SPREAD_NAMES = {
  [SPREAD_TYPES.CELTIC_CROSS]: "凯尔特十字阵",
  [SPREAD_TYPES.THREE_CARD]: "三牌阵",
  [SPREAD_TYPES.HORSESHOE]: "马蹄阵",
  [SPREAD_TYPES.RELATIONSHIP]: "关系阵",
};

export class TarotSpread {
  constructor(scene) {
    this.scene = scene;
    this.currentSpread = null;
    this.spreadCards = [];
    this.connectionLines = [];
    this.isInSpreadMode = false;
    this.isAnimating = false;
    this.spreadGroup = new THREE.Group();
    this.scene.add(this.spreadGroup);
  }

  // 获取随机牌阵类型
  getRandomSpreadType() {
    const types = Object.values(SPREAD_TYPES);
    return types[Math.floor(Math.random() * types.length)];
  }

  // 获取牌阵信息
  getSpreadInfo(type) {
    return {
      type,
      name: SPREAD_NAMES[type],
      cardCount: SPREAD_POSITIONS[type].length,
      positions: SPREAD_POSITIONS[type],
      connections: SPREAD_CONNECTIONS[type],
    };
  }

  // 创建发光虚线材质
  createDashedLineMaterial() {
    return new THREE.LineDashedMaterial({
      color: 0xffd700,
      dashSize: 0.3,
      gapSize: 0.2,
      linewidth: 2,
      opacity: 0.8,
      transparent: true,
    });
  }

  // 绘制连接线
  drawConnections(positions, connections) {
    // 清除旧连接线
    this.clearConnections();

    const lineMaterial = this.createDashedLineMaterial();

    connections.forEach(([startIdx, endIdx], index) => {
      const start = positions[startIdx];
      const end = positions[endIdx];

      // 创建曲线路径
      const curve = new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(start.x, start.y, start.z),
        new THREE.Vector3(
          (start.x + end.x) / 2,
          (start.y + end.y) / 2,
          Math.abs(start.x - end.x) * 0.3 + 1, // 弧线高度
        ),
        new THREE.Vector3(end.x, end.y, end.z),
      );

      const points = curve.getPoints(50);
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geometry, lineMaterial.clone());
      line.computeLineDistances();

      // 添加发光效果
      const glowGeometry = new THREE.BufferGeometry().setFromPoints(points);
      const glowMaterial = new THREE.LineBasicMaterial({
        color: 0xffaa00,
        transparent: true,
        opacity: 0,
        linewidth: 4,
      });
      const glowLine = new THREE.Line(glowGeometry, glowMaterial);

      this.spreadGroup.add(line);
      this.spreadGroup.add(glowLine);
      this.connectionLines.push({ line, glowLine, index });

      // 动画显示连接线
      gsap.to(glowMaterial, {
        opacity: 0.4,
        duration: 0.5,
        delay: 2 + index * 0.1,
        ease: "power2.out",
      });

      gsap.to(lineMaterial, {
        opacity: 0.9,
        duration: 0.5,
        delay: 2 + index * 0.1,
        ease: "power2.out",
      });
    });
  }

  // 清除连接线
  clearConnections() {
    this.connectionLines.forEach(({ line, glowLine }) => {
      this.spreadGroup.remove(line);
      this.spreadGroup.remove(glowLine);
      line.geometry.dispose();
      glowLine.geometry.dispose();
      line.material.dispose();
      glowLine.material.dispose();
    });
    this.connectionLines = [];
  }

  // 洗牌动画 - 卡片飞舞盘旋
  async shuffleAnimation(cards, spreadType) {
    if (this.isAnimating) return;
    this.isAnimating = true;

    const spreadInfo = this.getSpreadInfo(spreadType);
    const selectedCards = [];

    // 随机选择指定数量的牌
    const cardArray = [...cards];
    for (let i = 0; i < spreadInfo.cardCount; i++) {
      const randomIndex = Math.floor(Math.random() * cardArray.length);
      selectedCards.push(cardArray[randomIndex]);
      cardArray.splice(randomIndex, 1);
    }

    // 第一阶段：所有选中的牌飞入空中盘旋
    const centerX = 0;
    const centerY = 0;
    const centerZ = -10;

    selectedCards.forEach((card, index) => {
      // 从圆柱阵列中分离
      if (card.parent) {
        this.scene.attach(card);
      }

      // 计算螺旋上升的位置
      const angle = (index / selectedCards.length) * Math.PI * 4; // 两圈
      const radius = 5 + Math.random() * 3;
      const height = -5 + (index / selectedCards.length) * 10;

      const targetX = centerX + Math.cos(angle) * radius;
      const targetY = centerY + height;
      const targetZ = centerZ + Math.sin(angle) * radius;

      // 飞舞动画
      gsap.to(card.position, {
        x: targetX,
        y: targetY,
        z: targetZ,
        duration: 1.5,
        delay: index * 0.1,
        ease: "power2.out",
      });

      // 旋转动画
      gsap.to(card.rotation, {
        x: Math.random() * Math.PI,
        y: Math.random() * Math.PI * 2,
        z: Math.random() * Math.PI,
        duration: 1.5,
        delay: index * 0.1,
        ease: "power2.out",
      });
    });

    // 等待飞舞动画完成
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // 第二阶段：盘旋动画
    const spiralTimeline = gsap.timeline();
    selectedCards.forEach((card, index) => {
      const angle = (index / selectedCards.length) * Math.PI * 2;

      spiralTimeline.to(
        card.position,
        {
          x: centerX + Math.cos(angle + Math.PI) * 8,
          z: centerZ + Math.sin(angle + Math.PI) * 8,
          duration: 1,
          ease: "sine.inOut",
        },
        0,
      );
    });

    await new Promise((resolve) => setTimeout(resolve, 1000));

    // 第三阶段：发牌到牌阵位置
    const positions = spreadInfo.positions;

    selectedCards.forEach((card, index) => {
      const pos = positions[index];

      // 发牌动画
      gsap.to(card.position, {
        x: pos.x,
        y: pos.y,
        z: pos.z,
        duration: 1.2,
        delay: index * 0.15,
        ease: "power3.out",
      });

      // 旋转到正确朝向
      const targetRotation = { x: 0, y: Math.PI, z: pos.rotZ || 0 };
      gsap.to(card.rotation, {
        x: targetRotation.x,
        y: targetRotation.y,
        z: targetRotation.z,
        duration: 1.2,
        delay: index * 0.15,
        ease: "power3.out",
      });

      // 添加到牌阵组
      this.spreadGroup.add(card);
    });

    // 等待发牌完成并绘制连接线
    await new Promise((resolve) =>
      setTimeout(resolve, 1500 + spreadInfo.cardCount * 150),
    );

    this.drawConnections(positions, spreadInfo.connections);

    this.currentSpread = spreadType;
    this.spreadCards = selectedCards;
    this.isInSpreadMode = true;
    this.isAnimating = false;

    return spreadInfo;
  }

  // 返回圆柱阵列
  async returnToRing(cardGroup, originalCardsData) {
    if (!this.isInSpreadMode || this.isAnimating) return;
    this.isAnimating = true;

    // 清除连接线
    this.clearConnections();

    // 将牌返回圆柱阵列
    this.spreadCards.forEach((card, index) => {
      const originalData = originalCardsData.find(
        (c) => c.id === card.userData.id,
      );

      if (originalData && card.parent) {
        // 分离并重新附加到圆柱组
        cardGroup.attach(card);

        // 返回动画
        gsap.to(card.position, {
          x: originalData.originalPos.x,
          y: originalData.originalPos.y,
          z: originalData.originalPos.z,
          duration: 1,
          delay: index * 0.1,
          ease: "power2.inOut",
        });

        gsap.to(card.rotation, {
          x: originalData.originalRot.x,
          y: originalData.originalRot.y,
          z: originalData.originalRot.z,
          duration: 1,
          delay: index * 0.1,
          ease: "power2.inOut",
        });
      }
    });

    // 等待动画完成
    await new Promise((resolve) => setTimeout(resolve, 1200));

    this.currentSpread = null;
    this.spreadCards = [];
    this.isInSpreadMode = false;
    this.isAnimating = false;
  }

  // 获取当前牌阵状态
  getCurrentSpread() {
    return {
      type: this.currentSpread,
      isInSpreadMode: this.isInSpreadMode,
      isAnimating: this.isAnimating,
      cards: this.spreadCards,
      info: this.currentSpread ? this.getSpreadInfo(this.currentSpread) : null,
    };
  }
}
