import * as THREE from "three";

export function createVelvetTable(scene) {
  const tableRadius = 24;
  const tableHeight = 1.5;
  const tableGeometry = new THREE.CylinderGeometry(
    tableRadius,
    tableRadius,
    tableHeight,
    64,
  );

  const velvetMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x0d0518,
    roughness: 0.8,
    metalness: 0.0,
    clearcoat: 0.1,
    clearcoatRoughness: 0.9,
    sheen: 0.6,
    sheenColor: 0x660099,
    sheenRoughness: 0.4,
    emissive: 0x080215,
    emissiveIntensity: 0.3,
    side: THREE.DoubleSide,
  });

  const tableMesh = new THREE.Mesh(tableGeometry, velvetMaterial);
  tableMesh.position.set(0, -3, 0);
  tableMesh.receiveShadow = true;
  tableMesh.castShadow = true;
  scene.add(tableMesh);

  const tableClothGeometry = new THREE.CylinderGeometry(
    tableRadius + 0.8,
    tableRadius + 0.8,
    tableHeight + 0.4,
    64,
  );
  const tableClothMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x150320,
    transparent: true,
    opacity: 0.6,
    roughness: 0.95,
    metalness: 0.0,
    sheen: 0.7,
    sheenColor: 0x9933bb,
    side: THREE.DoubleSide,
  });
  const tableCloth = new THREE.Mesh(tableClothGeometry, tableClothMaterial);
  tableCloth.position.set(0, -3, 0);
  tableCloth.receiveShadow = true;
  scene.add(tableCloth);

  const ringGeometry = new THREE.TorusGeometry(tableRadius + 1, 0.3, 16, 64);
  const ringMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x221122,
    roughness: 0.3,
    metalness: 0.7,
    emissive: 0x110515,
  });
  const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
  ringMesh.position.set(0, -4, 0);
  ringMesh.rotation.x = Math.PI / 2;
  ringMesh.castShadow = true;
  scene.add(ringMesh);

  return { tableMesh, tableCloth };
}

export function createCandle(scene, x, z, height = 3) {
  const candleGroup = new THREE.Group();

  const waxGeometry = new THREE.CylinderGeometry(0.7, 0.9, height, 16);
  const waxMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xfff0d0,
    roughness: 0.4,
    metalness: 0.0,
    emissive: 0x443311,
    emissiveIntensity: 0.3,
  });
  const waxMesh = new THREE.Mesh(waxGeometry, waxMaterial);
  waxMesh.castShadow = true;
  waxMesh.receiveShadow = true;
  candleGroup.add(waxMesh);

  const topWaxGeometry = new THREE.CylinderGeometry(0.65, 0.85, 0.2, 16);
  const topWaxMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xffe8c0,
    roughness: 0.3,
    emissive: 0x664422,
    emissiveIntensity: 0.4,
  });
  const topWaxMesh = new THREE.Mesh(topWaxGeometry, topWaxMaterial);
  topWaxMesh.position.set(0, height / 2 + 0.1, 0);
  candleGroup.add(topWaxMesh);

  const wickGeometry = new THREE.CylinderGeometry(0.04, 0.04, 0.5, 8);
  const wickMaterial = new THREE.MeshBasicMaterial({ color: 0x111111 });
  const wickMesh = new THREE.Mesh(wickGeometry, wickMaterial);
  wickMesh.position.set(0, height / 2 + 0.3, 0);
  candleGroup.add(wickMesh);

  const flameGeometry = new THREE.ConeGeometry(0.35, 1.0, 8);
  const flameMaterial = new THREE.MeshBasicMaterial({
    color: 0xffaa22,
    transparent: true,
    opacity: 0.9,
  });
  const flameMesh = new THREE.Mesh(flameGeometry, flameMaterial);
  flameMesh.position.set(0, height / 2 + 1.0, 0);
  candleGroup.add(flameMesh);

  const flameInnerGeometry = new THREE.ConeGeometry(0.18, 0.6, 8);
  const flameInnerMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffaa,
    transparent: true,
    opacity: 0.9,
  });
  const flameInnerMesh = new THREE.Mesh(flameInnerGeometry, flameInnerMaterial);
  flameInnerMesh.position.set(0, height / 2 + 0.9, 0);
  candleGroup.add(flameInnerMesh);

  const pointLight = new THREE.PointLight(0xffffaa, 3.5, 40);
  pointLight.position.set(0, height / 2 + 1.2, 0);
  pointLight.castShadow = true;
  pointLight.shadow.bias = -0.005;
  pointLight.shadow.mapSize.width = 1024;
  pointLight.shadow.mapSize.height = 1024;
  pointLight.shadow.radius = 2;
  candleGroup.add(pointLight);

  candleGroup.position.set(x, -3 + height / 2, z);
  candleGroup.userData = {
    baseHeight: height,
    flameMesh,
    flameInnerMesh,
    pointLight,
    baseX: x,
    baseZ: z,
    baseY: pointLight.position.y,
    seed: Math.random() * 100,
  };

  scene.add(candleGroup);
  return candleGroup;
}

export function createCrystalBall(scene, x, z) {
  const ballGroup = new THREE.Group();

  const baseGeometry = new THREE.CylinderGeometry(1.5, 1.8, 0.8, 16);
  const baseMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x180818,
    roughness: 0.4,
    metalness: 0.6,
  });
  const baseMesh = new THREE.Mesh(baseGeometry, baseMaterial);
  baseMesh.castShadow = true;
  baseMesh.receiveShadow = true;
  baseMesh.position.set(0, -1.1, 0);
  ballGroup.add(baseMesh);

  const standGeometry = new THREE.CylinderGeometry(1.0, 1.3, 1.5, 16);
  const standMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x221122,
    roughness: 0.3,
    metalness: 0.8,
  });
  const standMesh = new THREE.Mesh(standGeometry, standMaterial);
  standMesh.castShadow = true;
  standMesh.receiveShadow = true;
  standMesh.position.set(0, 0, 0);
  ballGroup.add(standMesh);

  const ballGeometry = new THREE.SphereGeometry(1.8, 32, 32);
  const ballMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xaaddff,
    roughness: 0.02,
    metalness: 0.0,
    transmission: 0.95,
    ior: 1.5,
    thickness: 1.0,
    envMapIntensity: 2.0,
    emissive: 0x335588,
    emissiveIntensity: 0.4,
  });
  const ballMesh = new THREE.Mesh(ballGeometry, ballMaterial);
  ballMesh.position.set(0, 2.0, 0);
  ballMesh.castShadow = true;
  ballGroup.add(ballMesh);

  const innerGlowGeometry = new THREE.SphereGeometry(1.0, 16, 16);
  const innerGlowMaterial = new THREE.MeshBasicMaterial({
    color: 0x66bbff,
    transparent: true,
    opacity: 0.4,
  });
  const innerGlowMesh = new THREE.Mesh(innerGlowGeometry, innerGlowMaterial);
  innerGlowMesh.position.set(0, 2.0, 0);
  ballGroup.add(innerGlowMesh);

  const mistGeometry = new THREE.SphereGeometry(2.2, 16, 16);
  const mistMaterial = new THREE.MeshBasicMaterial({
    color: 0x224488,
    transparent: true,
    opacity: 0.1,
  });
  const mistMesh = new THREE.Mesh(mistGeometry, mistMaterial);
  mistMesh.position.set(0, 2.0, 0);
  ballGroup.add(mistMesh);

  ballGroup.position.set(x, -3, z);
  scene.add(ballGroup);

  ballGroup.userData = {
    ballMesh,
    innerGlowMesh,
    mistMesh,
  };

  return ballGroup;
}

export function animateCandles(candles, time) {
  candles.forEach((candle) => {
    const data = candle.userData;
    const seed = data.seed;

    const flicker =
      0.8 +
      Math.sin(time * 12 + seed) * 0.15 +
      Math.sin(time * 7 + seed * 2) * 0.1;
    const xFlicker = Math.sin(time * 8 + seed) * 0.08;
    const zFlicker = Math.cos(time * 6 + seed * 1.5) * 0.08;

    data.pointLight.intensity = 2.0 + Math.sin(time * 5 + seed) * 0.5;
    data.pointLight.position.x = xFlicker;
    data.pointLight.position.z = zFlicker;
    data.pointLight.position.y = data.baseY + Math.sin(time * 10 + seed) * 0.1;

    data.flameMesh.scale.set(1 + xFlicker * 0.5, flicker, 1 + zFlicker * 0.5);
    data.flameMesh.rotation.y = time * 2 + seed;

    data.flameInnerMesh.scale.setScalar(0.8 + Math.sin(time * 9 + seed) * 0.2);
  });
}

export function animateCrystalBalls(balls, time) {
  balls.forEach((ball, index) => {
    const data = ball.userData;
    const offset = index * Math.PI;

    const pulse = 0.95 + Math.sin(time * 1.5 + offset) * 0.08;
    data.innerGlowMesh.scale.setScalar(pulse);
    data.innerGlowMesh.material.opacity =
      0.3 + Math.sin(time * 2 + offset) * 0.15;

    const mistPulse = 0.98 + Math.sin(time * 0.8 + offset) * 0.05;
    data.mistMesh.scale.setScalar(mistPulse);
    data.mistMesh.material.opacity = 0.08 + Math.sin(time * 1 + offset) * 0.05;

    data.ballMesh.rotation.y += 0.002;
  });
}

export function setupSceneObjects(scene) {
  createVelvetTable(scene);

  const candles = [];
  const candlePositions = [
    { x: 20, z: 20 },
    { x: -20, z: 20 },
    { x: 20, z: -20 },
    { x: -20, z: -20 },
    { x: 26, z: 0 },
    { x: -26, z: 0 },
    { x: 0, z: 26 },
    { x: 0, z: -26 },
  ];

  candlePositions.forEach((pos, i) => {
    candles.push(createCandle(scene, pos.x, pos.z, 3 + (i % 3) * 0.3));
  });

  const crystalBalls = [];
  crystalBalls.push(createCrystalBall(scene, 18, 0));
  crystalBalls.push(createCrystalBall(scene, -18, 0));

  return { candles, crystalBalls };
}
