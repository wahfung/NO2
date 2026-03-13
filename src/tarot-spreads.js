import * as THREE from "three";
import gsap from "gsap";

export const SPREADS = {
  THREE_CARD: {
    name: "三牌阵",
    positions: [
      { x: -6, y: 0, z: -12, rotation: 0, name: "过去" },
      { x: 0, y: 0, z: -12, rotation: 0, name: "现在" },
      { x: 6, y: 0, z: -12, rotation: 0, name: "未来" },
    ],
    connections: [
      [0, 1],
      [1, 2],
    ],
  },
  CELTIC_CROSS: {
    name: "凯尔特十字阵",
    positions: [
      { x: 0, y: 0, z: -12, rotation: 0, name: "现状" },
      { x: 0, y: 0, z: -11.8, rotation: Math.PI / 2, name: "障碍" },
      { x: 0, y: 4, z: -12, rotation: 0, name: "过去" },
      { x: 0, y: -4, z: -12, rotation: 0, name: "未来" },
      { x: -4, y: 0, z: -12, rotation: 0, name: "潜意识" },
      { x: 4, y: 0, z: -12, rotation: 0, name: "外在影响" },
      { x: 8, y: 4, z: -12, rotation: 0, name: "建议" },
      { x: 8, y: 1, z: -12, rotation: 0, name: "环境" },
      { x: 8, y: -2, z: -12, rotation: 0, name: "希望与恐惧" },
      { x: 8, y: -5, z: -12, rotation: 0, name: "结果" },
    ],
    connections: [
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
  },
};

let currentSpread = null;
let spreadCards = [];
let connectionLines = [];
let isSpreadActive = false;

export function getCurrentSpread() {
  return currentSpread;
}

export function isSpreadModeActive() {
  return isSpreadActive;
}

export function startShuffleAndDeal(
  scene,
  cardGroup,
  spreadType = "CELTIC_CROSS",
) {
  if (isSpreadActive) return;

  currentSpread = SPREADS[spreadType];
  isSpreadActive = true;

  const allCards = [...cardGroup.children];
  const shuffled = [...allCards].sort(() => Math.random() - 0.5);
  const selectedCards = shuffled.slice(0, currentSpread.positions.length);

  spreadCards = [];

  selectedCards.forEach((card, index) => {
    card.parent.remove(card);
    scene.attach(card);
    card.userData.isAnimating = true;
    spreadCards.push(card);

    const pathPoints = createFlyPath(card.position, index);
    animateCardFlight(card, pathPoints, index, currentSpread.positions[index]);
  });

  setTimeout(
    () => {
      createConnectionLines(scene);
    },
    selectedCards.length * 200 + 2000,
  );
}

function createFlyPath(startPos, cardIndex) {
  const path = [];
  const numPoints = 10;

  for (let i = 0; i < numPoints; i++) {
    const t = i / (numPoints - 1);
    const spiralRadius = 15 * (1 - t * 0.7);
    const spiralAngle = t * Math.PI * 6 + cardIndex * 0.5;

    const heightVariation = Math.sin(t * Math.PI * 4) * 5 * (1 - t);
    const depthVariation = Math.cos(t * Math.PI * 3) * 10 * (1 - t);

    path.push(
      new THREE.Vector3(
        Math.sin(spiralAngle) * spiralRadius + (Math.random() - 0.5) * 5,
        heightVariation + (Math.random() - 0.5) * 3,
        Math.cos(spiralAngle) * spiralRadius + depthVariation,
      ),
    );
  }

  return path;
}

function animateCardFlight(card, pathPoints, index, targetPos) {
  const curve = new THREE.CatmullRomCurve3(pathPoints);
  const duration = 3 + index * 0.2;
  const startTime = performance.now();

  function update() {
    const elapsed = (performance.now() - startTime) / 1000;
    const progress = Math.min(elapsed / duration, 1);

    const easedProgress = gsap.parseEase("power2.inOut")(progress);
    const point = curve.getPoint(easedProgress);

    card.position.copy(point);
    card.rotation.x = Math.sin(elapsed * 5) * 0.5;
    card.rotation.y = Math.cos(elapsed * 4) * Math.PI;
    card.rotation.z = Math.sin(elapsed * 3) * 0.3;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      landCard(card, targetPos, index);
    }
  }

  update();
}

function landCard(card, targetPos, index) {
  gsap.to(card.position, {
    x: targetPos.x,
    y: targetPos.y,
    z: targetPos.z,
    duration: 1,
    ease: "power2.out",
    delay: index * 0.1,
  });

  gsap.to(card.rotation, {
    x: 0,
    y: targetPos.rotation || Math.PI,
    z: 0,
    duration: 1,
    ease: "power2.out",
    delay: index * 0.1,
    onComplete: () => {
      card.userData.isAnimating = false;
    },
  });
}

function createConnectionLines(scene) {
  clearConnectionLines(scene);

  if (!currentSpread) return;

  const material = new THREE.LineDashedMaterial({
    color: 0x00ffff,
    linewidth: 2,
    dashSize: 0.3,
    gapSize: 0.15,
    transparent: true,
    opacity: 0.8,
  });

  currentSpread.connections.forEach(([startIdx, endIdx]) => {
    if (spreadCards[startIdx] && spreadCards[endIdx]) {
      const points = [
        spreadCards[startIdx].position.clone(),
        spreadCards[endIdx].position.clone(),
      ];

      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geometry, material);
      line.computeLineDistances();
      line.userData.isConnectionLine = true;

      connectionLines.push(line);
      scene.add(line);

      gsap.from(line.material, {
        opacity: 0,
        duration: 1,
        ease: "power2.in",
      });
    }
  });
}

function clearConnectionLines(scene) {
  connectionLines.forEach((line) => {
    scene.remove(line);
    if (line.geometry) line.geometry.dispose();
    if (line.material) line.material.dispose();
  });
  connectionLines = [];
}

export function resetToRing(cardGroup) {
  if (!isSpreadActive) return;

  clearConnectionLines(window.sceneInstance);

  const cardsToReset = [...spreadCards];
  spreadCards = [];
  currentSpread = null;

  let completedCount = 0;
  const totalCards = cardsToReset.length;

  cardsToReset.forEach((card, index) => {
    card.userData.isAnimating = true;

    const originalPos = card.userData.originalPos;
    const originalRot = card.userData.originalRot;

    gsap.to(card.position, {
      x: 0,
      y: 0,
      z: 0,
      duration: 0.5,
      ease: "power2.in",
      delay: index * 0.05,
      onComplete: () => {
        cardGroup.attach(card);

        gsap.to(card.position, {
          x: originalPos.x,
          y: originalPos.y,
          z: originalPos.z,
          duration: 1,
          ease: "power2.out",
          onComplete: () => {
            card.userData.isAnimating = false;
            completedCount++;
            if (completedCount === totalCards) {
              isSpreadActive = false;
            }
          },
        });

        gsap.to(card.rotation, {
          x: originalRot.x,
          y: originalRot.y,
          z: originalRot.z,
          duration: 1,
        });
      },
    });

    gsap.to(card.rotation, {
      x: Math.PI * 4,
      y: Math.PI * 4,
      z: Math.PI * 2,
      duration: 0.5,
      ease: "power2.in",
    });
  });
}

export function updateSpreadMode() {
  if (isSpreadActive && connectionLines.length > 0) {
    connectionLines.forEach((line) => {
      line.material.opacity = 0.6 + Math.sin(Date.now() * 0.003) * 0.2;
    });
  }
}
