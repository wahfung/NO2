import * as THREE from "three";
import { tarotDeck, getCardTextureUrl } from "./tarot-data.js";

const CARD_WIDTH = 2;
const CARD_HEIGHT = 3.5;
const RADIUS = 18;

function createSharedMetalnessMap() {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 1024;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "rgba(30, 30, 30, 1)";
  ctx.fillRect(0, 0, 512, 1024);

  ctx.strokeStyle = "rgba(255, 255, 255, 1)";
  ctx.lineWidth = 40;
  ctx.strokeRect(0, 0, 512, 1024);

  return new THREE.CanvasTexture(canvas);
}

function createBackMetalnessMap() {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 1024;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "rgba(50, 50, 50, 1)";
  ctx.fillRect(0, 0, 512, 1024);

  ctx.strokeStyle = "rgba(255, 255, 255, 1)";
  ctx.lineWidth = 30;
  ctx.strokeRect(20, 20, 472, 984);

  ctx.fillStyle = "rgba(255, 255, 255, 1)";
  ctx.font = "60px serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("✡", 256, 512);

  return new THREE.CanvasTexture(canvas);
}

function createHolographicRoughnessMap() {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 1024;
  const ctx = canvas.getContext("2d");

  const gradient = ctx.createLinearGradient(0, 0, 512, 1024);
  gradient.addColorStop(0, "rgba(200, 200, 200, 1)");
  gradient.addColorStop(0.2, "rgba(100, 100, 100, 1)");
  gradient.addColorStop(0.4, "rgba(180, 180, 180, 1)");
  gradient.addColorStop(0.6, "rgba(80, 80, 80, 1)");
  gradient.addColorStop(0.8, "rgba(150, 150, 150, 1)");
  gradient.addColorStop(1, "rgba(50, 50, 50, 1)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 512, 1024);

  for (let i = 0; i < 200; i++) {
    const x = Math.random() * 512;
    const y = Math.random() * 1024;
    const radius = Math.random() * 5 + 2;
    const alpha = Math.random() * 0.3 + 0.1;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
    ctx.fill();
  }

  return new THREE.CanvasTexture(canvas);
}

function createBackTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 1024;
  const ctx = canvas.getContext("2d");

  const gradient = ctx.createLinearGradient(0, 0, 0, 1024);
  gradient.addColorStop(0, "#1a1a2e");
  gradient.addColorStop(0.5, "#2a2a4a");
  gradient.addColorStop(1, "#1a1a2e");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 512, 1024);

  ctx.strokeStyle = "#ffd700";
  ctx.lineWidth = 8;
  ctx.strokeRect(20, 20, 472, 984);

  ctx.strokeStyle = "#d4af37";
  ctx.lineWidth = 4;
  ctx.strokeRect(30, 30, 452, 964);

  ctx.font = "80px serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  const glowGradient = ctx.createRadialGradient(256, 512, 0, 256, 512, 100);
  glowGradient.addColorStop(0, "rgba(255, 215, 0, 0.8)");
  glowGradient.addColorStop(1, "rgba(255, 215, 0, 0)");
  ctx.fillStyle = glowGradient;
  ctx.fillText("✡", 256, 512);

  ctx.fillStyle = "#ffd700";
  ctx.fillText("✡", 256, 512);

  for (let i = 0; i < 50; i++) {
    const x = Math.random() * 512;
    const y = Math.random() * 1024;
    const size = Math.random() * 3 + 1;
    ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.5})`;
    ctx.fillRect(x, y, size, size);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

export function createCardRing(scene) {
  const group = new THREE.Group();
  scene.add(group);

  const textureLoader = new THREE.TextureLoader();

  const backTexture = createBackTexture();
  const backMetalnessMap = createBackMetalnessMap();
  const sharedRoughnessMap = createHolographicRoughnessMap();
  const frontMetalnessMap = createSharedMetalnessMap();

  const edgeMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x1a1a1a,
    metalness: 0.9,
    roughness: 0.1,
    envMapIntensity: 3.0,
  });

  tarotDeck.forEach((cardData, index) => {
    const angle = (index / tarotDeck.length) * Math.PI * 2;
    const geometry = new THREE.BoxGeometry(CARD_WIDTH, CARD_HEIGHT, 0.02);

    const frontTexture = textureLoader.load(getCardTextureUrl(cardData.img));
    frontTexture.colorSpace = THREE.SRGBColorSpace;

    const frontMaterial = new THREE.MeshPhysicalMaterial({
      map: frontTexture,
      metalness: 0.6,
      roughness: 0.4,
      metalnessMap: frontMetalnessMap,
      roughnessMap: sharedRoughnessMap,
      envMapIntensity: 3.0,
      clearcoat: 0.6,
      clearcoatRoughness: 0.1,
      reflectivity: 0.8,
    });

    const backMaterial = new THREE.MeshPhysicalMaterial({
      map: backTexture,
      metalness: 0.3,
      roughness: 0.5,
      metalnessMap: backMetalnessMap,
      roughnessMap: sharedRoughnessMap,
      envMapIntensity: 3.5,
      clearcoat: 0.6,
      clearcoatRoughness: 0.1,
      reflectivity: 0.8,
    });

    const materials = [
      edgeMaterial,
      edgeMaterial,
      edgeMaterial,
      edgeMaterial,
      backMaterial,
      frontMaterial,
    ];

    const cardMesh = new THREE.Mesh(geometry, materials);

    const x = Math.sin(angle) * RADIUS;
    const z = Math.cos(angle) * RADIUS;

    cardMesh.position.set(x, 0, z);
    cardMesh.lookAt(0, 0, 0);

    cardMesh.userData = {
      id: index,
      name: cardData.name,
      originalPos: new THREE.Vector3(x, 0, z),
      originalRot: cardMesh.rotation.clone(),
      isDrawn: false,
    };

    group.add(cardMesh);
  });

  return group;
}
