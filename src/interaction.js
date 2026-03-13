import * as THREE from "three";
import gsap from "gsap";
import { handState } from "./vision.js";
import { updateCardPBR, triggerCardFlip, setCardHighlight } from "./cards.js";
import { updateDynamicLight } from "./scene.js";

let drawnCard = null;
let rotationVelocity = 0;
const FRICTION = 0.95;
const ROTATION_SENSITIVITY = 0.005;

// Raycaster
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// 动画状态
let lastTime = performance.now();
let hoveredCard = null;

// 动态光源引用（从 main.js 传入）
let dynamicLightRef = null;

export function setDynamicLight(light) {
  dynamicLightRef = light;
}

export function updateInteraction(scene, camera, cardGroup) {
  // 计算 deltaTime
  const currentTime = performance.now();
  const deltaTime = (currentTime - lastTime) / 1000;
  lastTime = currentTime;

  // 1. Handle Rotation
  if (handState.isPresent) {
    // Add velocity based on hand movement
    // handState.velocity is usually around -2 to 2 range maybe?
    // We dampen it
    rotationVelocity += handState.velocity * ROTATION_SENSITIVITY;
  }

  // Apply physics
  rotationVelocity *= FRICTION;
  cardGroup.rotation.y += rotationVelocity;

  // 2. Raycasting
  mouse.x = handState.cursor.x;
  mouse.y = handState.cursor.y;
  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(cardGroup.children, false);

  // Reset scales and highlights
  cardGroup.children.forEach((card) => {
    if (card !== drawnCard) {
      gsap.to(card.scale, { x: 1, y: 1, z: 1, duration: 0.3 });
      // 移除高亮
      if (card === hoveredCard) {
        setCardHighlight(card, false);
      }
    }
    // 更新 PBR 效果
    updateCardPBR(card, deltaTime);
  });

  let targetCard = null;
  if (intersects.length > 0) {
    targetCard = intersects[0].object;
    if (targetCard !== drawnCard) {
      gsap.to(targetCard.scale, { x: 1.2, y: 1.2, z: 1.2, duration: 0.3 });
      // 添加高亮效果
      setCardHighlight(targetCard, true);
      hoveredCard = targetCard;
    }
  } else {
    hoveredCard = null;
  }

  // 3. Draw / Return Logic
  const cursorVisual = document.getElementById("cursor-visual");
  if (cursorVisual) {
    if (handState.isPresent) {
      cursorVisual.style.opacity = "1";
      // Convert normalized coords to screen pixels
      const px = ((handState.cursor.x + 1) / 2) * window.innerWidth;
      const py = ((-handState.cursor.y + 1) / 2) * window.innerHeight;
      // Use left/top for positioning
      cursorVisual.style.left = `${px}px`;
      cursorVisual.style.top = `${py}px`;
      // Remove transform if present from previous frame? No, left/top handles position.
      // Ensure no conflicting transform logic. Main.js sets initial transform: translate(-50%, -50%).
      // This centers the cursor on the point (px, py).
      cursorVisual.style.transform = `translate(-50%, -50%)`;
      cursorVisual.style.backgroundColor = handState.isPinching
        ? "red"
        : "gold";
    } else {
      cursorVisual.style.opacity = "0";
    }
  }

  if (handState.isPinching && targetCard && !drawnCard) {
    drawCard(targetCard);
  } else if (!handState.isPinching && drawnCard) {
    returnCard();
  }

  // 更新动态光源（如果卡片被抽出）
  if (drawnCard && dynamicLightRef) {
    // 动态光源跟随抽出的卡片
    const lightIntensity = 1.5 + Math.sin(currentTime * 0.003) * 0.5;
    updateDynamicLight(dynamicLightRef, lightIntensity, drawnCard.position);
  } else if (dynamicLightRef) {
    // 没有抽出卡片时，降低动态光源强度
    updateDynamicLight(dynamicLightRef, 0);
  }
}

function drawCard(card) {
  if (card.userData.isAnimating) return;
  drawnCard = card;
  card.userData.isAnimating = true;

  // 触发翻转效果 - 开始抽取时激活 PBR 反光动画
  triggerCardFlip(card);

  // 将卡片从组中分离并附加到场景，保持世界变换
  window.sceneInstance.attach(card);

  // 创建抽取动画时间线
  const tl = gsap.timeline();

  // 阶段 1: 翻转并移动到相机前（同时产生反光效果）
  tl.to(
    card.position,
    {
      x: 0,
      y: 0,
      z: -10,
      duration: 1.2,
      ease: "power2.inOut",
    },
    0,
  );

  tl.to(
    card.rotation,
    {
      x: 0,
      y: Math.PI, // 翻转180度，使正面朝向相机
      z: 0,
      duration: 1.2,
      ease: "power2.inOut",
      onUpdate: function () {
        // 在翻转过程中持续触发 PBR 效果
        const progress = this.progress();
        // 当卡片垂直于视线时（progress ~0.5），反光最强
        const reflectionIntensity = 1.5 + Math.sin(progress * Math.PI) * 1.5;
        card.userData.flipProgress = progress;
      },
    },
    0,
  );

  // 阶段 2: 轻微的悬浮动画（展示烫金反光）
  tl.to(card.position, {
    y: 0.2,
    duration: 0.8,
    yoyo: true,
    repeat: -1,
    ease: "sine.inOut",
  });
}

function returnCard() {
  if (!drawnCard) return;
  const card = drawnCard;

  // 触发翻转效果 - 放回时再次激活反光
  triggerCardFlip(card);

  // 停止所有正在进行的动画
  gsap.killTweensOf(card.position);
  gsap.killTweensOf(card.rotation);

  // 重新附加到卡片组
  window.cardGroupInstance.attach(card);

  // 创建返回动画时间线
  const tl = gsap.timeline({
    onComplete: () => {
      card.userData.isAnimating = false;
      drawnCard = null;
    },
  });

  // 翻转返回原位
  tl.to(
    card.position,
    {
      x: card.userData.originalPos.x,
      y: card.userData.originalPos.y,
      z: card.userData.originalPos.z,
      duration: 1,
      ease: "power2.inOut",
    },
    0,
  );

  tl.to(
    card.rotation,
    {
      x: card.userData.originalRot.x,
      y: card.userData.originalRot.y,
      z: card.userData.originalRot.z,
      duration: 1,
      ease: "power2.inOut",
      onUpdate: function () {
        // 返回过程中也保持反光效果
        card.userData.flipProgress = this.progress();
      },
    },
    0,
  );

  // Reset reference immediately so we don't call return again
  drawnCard = null;
}
