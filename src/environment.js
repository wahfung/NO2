import * as THREE from "three";

let candleLights = [];
let candleFlames = [];
let crystalBall = null;
let time = 0;

export function createEnvironment(scene) {
  createTable(scene);
  createCandles(scene);
  createCrystalBall(scene);
  createAmbientParticles(scene);
}

function createTable(scene) {
  const tableGeometry = new THREE.CylinderGeometry(12, 13, 0.5, 64);

  const velvetTexture = createVelvetTexture();

  const tableMaterial = new THREE.MeshStandardMaterial({
    map: velvetTexture,
    color: 0x2a1a3a,
    roughness: 0.85,
    metalness: 0.1,
  });

  const table = new THREE.Mesh(tableGeometry, tableMaterial);
  table.position.y = -3;
  table.receiveShadow = true;
  table.castShadow = true;
  scene.add(table);

  const tableEdgeGeometry = new THREE.TorusGeometry(12.5, 0.3, 16, 64);
  const goldMaterial = new THREE.MeshStandardMaterial({
    color: 0xd4af37,
    roughness: 0.3,
    metalness: 0.8,
  });
  const tableEdge = new THREE.Mesh(tableEdgeGeometry, goldMaterial);
  tableEdge.rotation.x = Math.PI / 2;
  tableEdge.position.y = -2.75;
  tableEdge.castShadow = true;
  scene.add(tableEdge);

  const tableLegGeometry = new THREE.CylinderGeometry(0.5, 0.7, 2.5, 16);
  const legMaterial = new THREE.MeshStandardMaterial({
    color: 0x4a2a1a,
    roughness: 0.7,
    metalness: 0.2,
  });

  for (let i = 0; i < 4; i++) {
    const angle = (i / 4) * Math.PI * 2 + Math.PI / 4;
    const leg = new THREE.Mesh(tableLegGeometry, legMaterial);
    leg.position.set(Math.cos(angle) * 8, -4.75, Math.sin(angle) * 8);
    leg.castShadow = true;
    scene.add(leg);
  }
}

function createVelvetTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#2a1a3a";
  ctx.fillRect(0, 0, 512, 512);

  for (let i = 0; i < 5000; i++) {
    const x = Math.random() * 512;
    const y = Math.random() * 512;
    const brightness = Math.random() * 20;
    ctx.fillStyle = `rgba(${60 + brightness}, ${30 + brightness}, ${70 + brightness}, 0.5)`;
    ctx.fillRect(x, y, 1, 1);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(4, 4);
  return texture;
}

function createCandles(scene) {
  const candlePositions = [
    { x: -8, z: -5 },
    { x: 8, z: -5 },
    { x: -6, z: 6 },
    { x: 6, z: 6 },
  ];

  candlePositions.forEach((pos, index) => {
    createSingleCandle(scene, pos.x, pos.z, index);
  });
}

function createSingleCandle(scene, x, z, index) {
  const candleGroup = new THREE.Group();
  candleGroup.position.set(x, -2.75, z);

  const holderGeometry = new THREE.CylinderGeometry(0.6, 0.8, 0.4, 16);
  const holderMaterial = new THREE.MeshStandardMaterial({
    color: 0xb8860b,
    roughness: 0.3,
    metalness: 0.9,
  });
  const holder = new THREE.Mesh(holderGeometry, holderMaterial);
  holder.position.y = 0.2;
  holder.castShadow = true;
  candleGroup.add(holder);

  const waxGeometry = new THREE.CylinderGeometry(0.25, 0.3, 1.2, 16);
  const waxMaterial = new THREE.MeshStandardMaterial({
    color: 0xf5f5dc,
    roughness: 0.9,
    metalness: 0,
  });
  const wax = new THREE.Mesh(waxGeometry, waxMaterial);
  wax.position.y = 1;
  wax.castShadow = true;
  candleGroup.add(wax);

  const flameGeometry = new THREE.SphereGeometry(0.15, 16, 16);
  const flameMaterial = new THREE.MeshBasicMaterial({
    color: 0xff6600,
    transparent: true,
    opacity: 0.9,
  });
  const flame = new THREE.Mesh(flameGeometry, flameMaterial);
  flame.position.y = 1.7;
  flame.scale.y = 1.5;
  candleGroup.add(flame);
  candleFlames.push(flame);

  const flameGlowGeometry = new THREE.SphereGeometry(0.08, 8, 8);
  const flameGlowMaterial = new THREE.MeshBasicMaterial({
    color: 0xffff00,
    transparent: true,
    opacity: 0.8,
  });
  const flameGlow = new THREE.Mesh(flameGlowGeometry, flameGlowMaterial);
  flameGlow.position.y = 1.65;
  candleGroup.add(flameGlow);

  const candleLight = new THREE.PointLight(0xff8844, 4, 25, 2);
  candleLight.position.y = 1.7;
  candleLight.castShadow = true;
  candleLight.shadow.mapSize.width = 512;
  candleLight.shadow.mapSize.height = 512;
  candleLight.shadow.camera.near = 0.1;
  candleLight.shadow.camera.far = 20;
  candleLight.shadow.bias = -0.001;
  candleGroup.add(candleLight);
  candleLights.push(candleLight);

  scene.add(candleGroup);
}

function createCrystalBall(scene) {
  const crystalGroup = new THREE.Group();
  crystalGroup.position.set(0, -2.5, 8);

  const standGeometry = new THREE.CylinderGeometry(0.8, 1, 0.5, 16);
  const standMaterial = new THREE.MeshStandardMaterial({
    color: 0x4a2a1a,
    roughness: 0.5,
    metalness: 0.3,
  });
  const stand = new THREE.Mesh(standGeometry, standMaterial);
  stand.position.y = 0.25;
  stand.castShadow = true;
  crystalGroup.add(stand);

  const clawGeometry = new THREE.ConeGeometry(0.15, 0.6, 4);
  const clawMaterial = new THREE.MeshStandardMaterial({
    color: 0xd4af37,
    roughness: 0.3,
    metalness: 0.8,
  });

  for (let i = 0; i < 3; i++) {
    const angle = (i / 3) * Math.PI * 2;
    const claw = new THREE.Mesh(clawGeometry, clawMaterial);
    claw.position.set(Math.cos(angle) * 0.5, 0.7, Math.sin(angle) * 0.5);
    claw.rotation.z = Math.PI / 6;
    claw.rotation.y = -angle;
    claw.castShadow = true;
    crystalGroup.add(claw);
  }

  const ballGeometry = new THREE.SphereGeometry(1, 32, 32);
  const ballMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x88ccff,
    transparent: true,
    opacity: 0.6,
    roughness: 0,
    metalness: 0.1,
    transmission: 0.9,
    thickness: 1,
    ior: 1.5,
    clearcoat: 1,
    clearcoatRoughness: 0,
  });
  const ball = new THREE.Mesh(ballGeometry, ballMaterial);
  ball.position.y = 1.8;
  ball.castShadow = true;
  crystalGroup.add(ball);
  crystalBall = ball;

  const innerGlowGeometry = new THREE.SphereGeometry(0.3, 16, 16);
  const innerGlowMaterial = new THREE.MeshBasicMaterial({
    color: 0x9966ff,
    transparent: true,
    opacity: 0.5,
  });
  const innerGlow = new THREE.Mesh(innerGlowGeometry, innerGlowMaterial);
  innerGlow.position.y = 1.8;
  crystalGroup.add(innerGlow);

  const crystalLight = new THREE.PointLight(0x9966ff, 1.5, 15);
  crystalLight.position.y = 1.8;
  crystalGroup.add(crystalLight);

  scene.add(crystalGroup);
}

function createAmbientParticles(scene) {
  const particleCount = 100;
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 30;
    positions[i * 3 + 1] = Math.random() * 10 - 3;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 30;

    const color = new THREE.Color();
    color.setHSL(0.1 + Math.random() * 0.1, 0.8, 0.6);
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }

  const particleGeometry = new THREE.BufferGeometry();
  particleGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(positions, 3),
  );
  particleGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  const particleMaterial = new THREE.PointsMaterial({
    size: 0.1,
    vertexColors: true,
    transparent: true,
    opacity: 0.6,
    blending: THREE.AdditiveBlending,
  });

  const particles = new THREE.Points(particleGeometry, particleMaterial);
  particles.userData.isParticles = true;
  scene.add(particles);
}

export function updateEnvironment(deltaTime) {
  time += deltaTime;

  candleLights.forEach((light, index) => {
    const flickerSpeed = 3 + index * 0.5;
    const flickerIntensity = 0.5;
    const baseIntensity = 4;

    light.intensity =
      baseIntensity +
      Math.sin(time * flickerSpeed * Math.PI) * flickerIntensity +
      Math.sin(time * (flickerSpeed + 2) * Math.PI * 1.3) *
        flickerIntensity *
        0.5;

    const positionOffset = Math.sin(time * 5 + index) * 0.02;
    light.position.x = positionOffset;
  });

  candleFlames.forEach((flame, index) => {
    const flickerSpeed = 8 + index;
    flame.scale.x = 1 + Math.sin(time * flickerSpeed) * 0.2;
    flame.scale.y = 1.5 + Math.sin(time * flickerSpeed * 1.3) * 0.3;
    flame.rotation.y = time * 2 + index;
  });

  if (crystalBall) {
    const glowIntensity = 0.5 + Math.sin(time * 0.5) * 0.2;
    crystalBall.material.opacity = 0.5 + Math.sin(time * 0.8) * 0.1;
  }

  const particles = window.sceneInstance?.children.find(
    (c) => c.userData?.isParticles,
  );
  if (particles) {
    const positions = particles.geometry.attributes.position.array;
    for (let i = 0; i < positions.length; i += 3) {
      positions[i + 1] += Math.sin(time + i) * 0.002;

      if (positions[i + 1] > 7) {
        positions[i + 1] = -3;
      }
    }
    particles.geometry.attributes.position.needsUpdate = true;
  }
}
