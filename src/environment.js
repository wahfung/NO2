import * as THREE from "three";

// 创建占卜桌
export function createTable(scene) {
  const tableGroup = new THREE.Group();

  // 桌面 - 使用圆柱形桌面
  const tableRadius = 25;
  const tableHeight = 1;
  const tableGeometry = new THREE.CylinderGeometry(
    tableRadius,
    tableRadius * 0.9,
    tableHeight,
    64,
  );

  // 创建丝绒材质 - 使用较亮的颜色以更好地显示阴影
  const velvetMaterial = new THREE.MeshStandardMaterial({
    color: 0x4a3a5e,
    roughness: 0.6,
    metalness: 0.1,
    emissive: 0x1a1020,
    emissiveIntensity: 0.1,
  });

  const tableTop = new THREE.Mesh(tableGeometry, velvetMaterial);
  tableTop.position.y = -5;
  tableTop.receiveShadow = true;
  tableGroup.add(tableTop);

  // 桌腿
  const legGeometry = new THREE.CylinderGeometry(0.8, 0.5, 8, 16);
  const legMaterial = new THREE.MeshStandardMaterial({
    color: 0x2d1810,
    roughness: 0.4,
    metalness: 0.3,
  });

  for (let i = 0; i < 4; i++) {
    const angle = (i / 4) * Math.PI * 2;
    const leg = new THREE.Mesh(legGeometry, legMaterial);
    const legRadius = tableRadius * 0.6;
    leg.position.set(
      Math.sin(angle) * legRadius,
      -9,
      Math.cos(angle) * legRadius,
    );
    leg.castShadow = true;
    leg.receiveShadow = true;
    tableGroup.add(leg);
  }

  scene.add(tableGroup);
  return tableGroup;
}

// 创建蜡烛
export function createCandle(scene, position, color = 0xff6600) {
  const candleGroup = new THREE.Group();

  // 蜡烛主体
  const candleGeometry = new THREE.CylinderGeometry(0.4, 0.4, 3, 16);
  const candleMaterial = new THREE.MeshStandardMaterial({
    color: 0xf5f5dc,
    roughness: 0.3,
    metalness: 0.0,
  });
  const candle = new THREE.Mesh(candleGeometry, candleMaterial);
  candle.position.y = 1.5;
  candle.castShadow = true;
  candleGroup.add(candle);

  // 蜡烛芯
  const wickGeometry = new THREE.CylinderGeometry(0.03, 0.03, 0.3, 8);
  const wickMaterial = new THREE.MeshStandardMaterial({ color: 0x1a1a1a });
  const wick = new THREE.Mesh(wickGeometry, wickMaterial);
  wick.position.y = 3.15;
  candleGroup.add(wick);

  // 火焰 - 使用多个球体组成
  const flameGroup = new THREE.Group();
  flameGroup.position.y = 3.4;

  // 主火焰
  const flameGeometry = new THREE.SphereGeometry(0.25, 8, 8);
  flameGeometry.scale(1, 2, 1);
  const flameMaterial = new THREE.MeshBasicMaterial({
    color: color,
    transparent: true,
    opacity: 0.9,
  });
  const flame = new THREE.Mesh(flameGeometry, flameMaterial);
  flameGroup.add(flame);

  // 内焰（白色核心）
  const innerFlameGeometry = new THREE.SphereGeometry(0.12, 8, 8);
  innerFlameGeometry.scale(1, 1.5, 1);
  const innerFlameMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffaa,
    transparent: true,
    opacity: 0.8,
  });
  const innerFlame = new THREE.Mesh(innerFlameGeometry, innerFlameMaterial);
  innerFlame.position.y = 0.1;
  flameGroup.add(innerFlame);

  candleGroup.add(flameGroup);

  // 动态点光源 - 火光（增强亮度以产生明显阴影）
  const candleLight = new THREE.PointLight(color, 8, 40);
  candleLight.position.y = 3.5;
  candleLight.castShadow = true;
  candleLight.shadow.mapSize.width = 1024;
  candleLight.shadow.mapSize.height = 1024;
  candleLight.shadow.camera.near = 0.1;
  candleLight.shadow.camera.far = 40;
  candleLight.shadow.bias = -0.0001;
  candleGroup.add(candleLight);

  // 设置蜡烛组位置
  candleGroup.position.copy(position);
  candleGroup.position.y = -3.5; // 放在桌面上
  scene.add(candleGroup);

  // 存储动画所需的数据
  candleGroup.userData = {
    flame: flame,
    innerFlame: innerFlame,
    light: candleLight,
    baseIntensity: 8,
    timeOffset: Math.random() * 100,
  };

  return candleGroup;
}

// 创建水晶球
export function createCrystalBall(scene, position) {
  const ballGroup = new THREE.Group();

  // 水晶球支架
  const baseGeometry = new THREE.CylinderGeometry(1.2, 1.5, 0.8, 16);
  const baseMaterial = new THREE.MeshStandardMaterial({
    color: 0x4a3728,
    roughness: 0.6,
    metalness: 0.2,
  });
  const base = new THREE.Mesh(baseGeometry, baseMaterial);
  base.position.y = 0.4;
  base.castShadow = true;
  ballGroup.add(base);

  // 水晶球
  const ballGeometry = new THREE.SphereGeometry(1.5, 32, 32);
  const ballMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x88ccff,
    metalness: 0.1,
    roughness: 0.05,
    transmission: 0.9,
    thickness: 1.5,
    transparent: true,
    opacity: 0.8,
    ior: 1.5,
    clearcoat: 1.0,
    clearcoatRoughness: 0.05,
  });
  const ball = new THREE.Mesh(ballGeometry, ballMaterial);
  ball.position.y = 2.2;
  ball.castShadow = true;
  ballGroup.add(ball);

  // 水晶球内部发光效果
  const innerGlowGeometry = new THREE.SphereGeometry(0.8, 16, 16);
  const innerGlowMaterial = new THREE.MeshBasicMaterial({
    color: 0x66aaff,
    transparent: true,
    opacity: 0.3,
  });
  const innerGlow = new THREE.Mesh(innerGlowGeometry, innerGlowMaterial);
  innerGlow.position.y = 2.2;
  ballGroup.add(innerGlow);

  // 水晶球微弱光源
  const ballLight = new THREE.PointLight(0x66aaff, 0.5, 8);
  ballLight.position.y = 2.5;
  ballGroup.add(ballLight);

  ballGroup.position.copy(position);
  ballGroup.position.y = -3.5;
  scene.add(ballGroup);

  // 存储动画数据
  ballGroup.userData = {
    ball: ball,
    innerGlow: innerGlow,
    light: ballLight,
    timeOffset: Math.random() * 100,
  };

  return ballGroup;
}

// 创建星空背景
export function createStarfield(scene) {
  const starsGeometry = new THREE.BufferGeometry();
  const starsCount = 1000;
  const positions = new Float32Array(starsCount * 3);

  for (let i = 0; i < starsCount * 3; i += 3) {
    const radius = 80 + Math.random() * 100;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    positions[i] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i + 2] = radius * Math.cos(phi);
  }

  starsGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(positions, 3),
  );

  const starsMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.5,
    transparent: true,
    opacity: 0.8,
  });

  const stars = new THREE.Points(starsGeometry, starsMaterial);
  scene.add(stars);

  return stars;
}

// 动画更新函数
export function updateEnvironment(environmentObjects, time) {
  if (!environmentObjects) return;

  const { candles, crystalBall } = environmentObjects;

  // 更新蜡烛火焰动画
  if (candles) {
    candles.forEach((candle) => {
      const { flame, innerFlame, light, baseIntensity, timeOffset } =
        candle.userData;

      // 火焰闪烁效果
      const flicker =
        Math.sin(time * 10 + timeOffset) * 0.1 +
        Math.sin(time * 23 + timeOffset * 2) * 0.05 +
        Math.sin(time * 37 + timeOffset * 3) * 0.03;

      // 火焰缩放动画
      const scaleY = 1 + flicker * 0.3;
      const scaleXZ = 1 - flicker * 0.1;
      flame.scale.set(scaleXZ, scaleY, scaleXZ);
      innerFlame.scale.set(scaleXZ * 0.8, scaleY * 0.8, scaleXZ * 0.8);

      // 火焰轻微摇摆
      flame.rotation.z = Math.sin(time * 8 + timeOffset) * 0.1;
      flame.rotation.x = Math.cos(time * 6 + timeOffset) * 0.05;

      // 光源强度变化（更明显的闪烁）
      light.intensity = baseIntensity + flicker * 1.5;

      // 光源位置摇曳（模拟火焰晃动造成的阴影变化）
      const swayX =
        Math.sin(time * 6 + timeOffset) * 0.15 +
        Math.sin(time * 13 + timeOffset) * 0.08;
      const swayZ =
        Math.cos(time * 5 + timeOffset) * 0.15 +
        Math.cos(time * 11 + timeOffset) * 0.08;
      light.position.x = swayX;
      light.position.z = swayZ;

      // 光源高度微调
      light.position.y = 3.5 + Math.sin(time * 8 + timeOffset) * 0.1;
    });
  }

  // 更新水晶球动画
  if (crystalBall) {
    const { innerGlow, light, timeOffset } = crystalBall.userData;

    // 内部光芒脉动
    const pulse = Math.sin(time * 2 + timeOffset) * 0.2 + 0.3;
    innerGlow.material.opacity = pulse;
    light.intensity = 0.3 + pulse * 0.3;

    // 水晶球缓慢旋转
    crystalBall.rotation.y = time * 0.1;
  }
}

// 创建完整环境
export function createEnvironment(scene) {
  const environment = {
    candles: [],
    crystalBall: null,
    table: null,
    stars: null,
  };

  // 创建星空背景
  environment.stars = createStarfield(scene);

  // 创建占卜桌
  environment.table = createTable(scene);

  // 创建蜡烛 - 放置在桌面四周
  const candlePositions = [
    new THREE.Vector3(8, 0, 8),
    new THREE.Vector3(-8, 0, 8),
    new THREE.Vector3(8, 0, -8),
    new THREE.Vector3(-8, 0, -8),
  ];

  candlePositions.forEach((pos) => {
    const candle = createCandle(scene, pos, 0xff6600);
    environment.candles.push(candle);
  });

  // 创建水晶球 - 放在桌子一侧
  environment.crystalBall = createCrystalBall(
    scene,
    new THREE.Vector3(12, 0, -5),
  );

  return environment;
}
