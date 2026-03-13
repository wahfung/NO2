import * as THREE from "three";
import gsap from "gsap";
import { handState } from "./vision.js";
import { SpreadManager, SPREAD_TYPES } from "./spread.js";

let drawnCard = null;
let rotationVelocity = 0;
const FRICTION = 0.95;
const ROTATION_SENSITIVITY = 0.005;

let spreadManager = null;
let currentSpreadIndex = 0;
const spreadTypes = [
  SPREAD_TYPES.THREE_CARD,
  SPREAD_TYPES.CELTIC_CROSS,
  SPREAD_TYPES.HORSESHOE,
];
const spreadNames = {
  [SPREAD_TYPES.THREE_CARD]: "三牌阵",
  [SPREAD_TYPES.CELTIC_CROSS]: "凯尔特十字阵",
  [SPREAD_TYPES.HORSESHOE]: "马蹄阵",
};

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

let gestureHintElement = null;

export function initSpreadManager(scene, cardGroup) {
  spreadManager = new SpreadManager(scene, cardGroup);

  gestureHintElement = document.createElement("div");
  gestureHintElement.className = "gesture-hint";
  gestureHintElement.style.opacity = "0";
  document.body.appendChild(gestureHintElement);
}

export function updateInteraction(scene, camera, cardGroup) {
  if (handState.isPresent) {
    rotationVelocity += handState.velocity * ROTATION_SENSITIVITY;
  }

  if (!spreadManager || !spreadManager.currentSpread) {
    rotationVelocity *= FRICTION;
    cardGroup.rotation.y += rotationVelocity;
  }

  if (handState.isPushOut && spreadManager && !spreadManager.isAnimating) {
    if (spreadManager.currentSpread) {
      spreadManager.returnToRing();
      updateSpreadIndicator("");
    } else {
      const spreadType = spreadTypes[currentSpreadIndex];
      updateSpreadIndicator(`正在发牌: ${spreadNames[spreadType]}`);
      spreadManager.shuffleAndDeal(spreadType);
      currentSpreadIndex = (currentSpreadIndex + 1) % spreadTypes.length;
    }
    handState.isPushOut = false;
    updateGestureHint("");
  }

  if (
    handState.twoHandsPresent &&
    !spreadManager?.currentSpread &&
    !spreadManager?.isAnimating
  ) {
    if (handState.isPreparedForPushOut) {
      if (handState.handsDistanceDelta > 0.01) {
        updateGestureHint("✨ 继续推开...");
      } else {
        updateGestureHint("🤚 双手张开，向外推开");
      }
    } else if (handState.handsDistance < 0.4) {
      updateGestureHint("🤚 双手靠近，准备洗牌");
    } else {
      updateGestureHint("🤚 双手张开，靠近后推开");
    }
  } else if (
    !handState.twoHandsPresent &&
    spreadManager &&
    !spreadManager.currentSpread
  ) {
    updateGestureHint("👋 请将双手放入画面");
  } else {
    updateGestureHint("");
  }

  mouse.x = handState.cursor.x;
  mouse.y = handState.cursor.y;
  raycaster.setFromCamera(mouse, camera);

  let targetCards = [];
  if (spreadManager && spreadManager.currentSpread) {
    targetCards = spreadManager.spreadCards;
  } else {
    targetCards = cardGroup.children;
  }

  const intersects = raycaster.intersectObjects(targetCards, false);

  targetCards.forEach((card) => {
    if (card !== drawnCard) {
      gsap.to(card.scale, { x: 1, y: 1, z: 1, duration: 0.3 });
    }
  });

  let targetCard = null;
  if (intersects.length > 0) {
    targetCard = intersects[0].object;
    if (targetCard !== drawnCard) {
      gsap.to(targetCard.scale, { x: 1.2, y: 1.2, z: 1.2, duration: 0.3 });
    }
  }

  const cursorVisual = document.getElementById("cursor-visual");
  if (cursorVisual) {
    if (handState.isPresent) {
      cursorVisual.style.opacity = "1";
      const px = ((handState.cursor.x + 1) / 2) * window.innerWidth;
      const py = ((-handState.cursor.y + 1) / 2) * window.innerHeight;
      cursorVisual.style.left = `${px}px`;
      cursorVisual.style.top = `${py}px`;
      cursorVisual.style.transform = `translate(-50%, -50%)`;

      let color = "gold";
      if (handState.isPinching) color = "red";
      else if (handState.twoHandsPresent) color = "cyan";
      cursorVisual.style.backgroundColor = color;
    } else {
      cursorVisual.style.opacity = "0";
    }
  }

  const cursorVisual2 = document.getElementById("cursor-visual-2");
  if (cursorVisual2) {
    if (handState.twoHandsPresent) {
      cursorVisual2.style.opacity = "1";
      const px = ((handState.cursor2.x + 1) / 2) * window.innerWidth;
      const py = ((-handState.cursor2.y + 1) / 2) * window.innerHeight;
      cursorVisual2.style.left = `${px}px`;
      cursorVisual2.style.top = `${py}px`;
      cursorVisual2.style.transform = `translate(-50%, -50%)`;
    } else {
      cursorVisual2.style.opacity = "0";
    }
  }

  if (handState.isPinching && targetCard && !drawnCard) {
    drawCard(targetCard, camera);
  } else if (!handState.isPinching && drawnCard) {
    returnCard();
  }
}

function drawCard(card, camera) {
  if (card.userData.isAnimating) return;
  drawnCard = card;
  card.userData.isAnimating = true;

  if (card.parent !== window.sceneInstance) {
    card.parent.remove(card);
    window.sceneInstance.attach(card);
  }

  gsap.to(card.position, {
    x: 0,
    y: 0,
    z: -6,
    duration: 1,
    ease: "power2.out",
  });

  gsap.to(card.rotation, {
    x: 0,
    y: Math.PI,
    z: 0,
    duration: 1,
  });

  gsap.to(card.scale, {
    x: 1.5,
    y: 1.5,
    z: 1.5,
    duration: 1,
  });
}

function returnCard() {
  if (!drawnCard) return;
  const card = drawnCard;

  if (
    spreadManager &&
    spreadManager.currentSpread &&
    card.userData.spreadIndex !== undefined
  ) {
    const layout = spreadLayouts[spreadManager.currentSpread];
    const pos = layout[card.userData.spreadIndex];

    gsap.to(card.position, {
      x: pos.x,
      y: pos.y,
      z: pos.z,
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        card.userData.isAnimating = false;
        drawnCard = null;
      },
    });

    gsap.to(card.rotation, {
      x: 0,
      y: Math.PI,
      z: pos.rotationZ || 0,
      duration: 1,
    });

    gsap.to(card.scale, {
      x: 1,
      y: 1,
      z: 1,
      duration: 1,
    });
  } else {
    window.cardGroupInstance.attach(card);

    gsap.to(card.position, {
      x: card.userData.originalPos.x,
      y: card.userData.originalPos.y,
      z: card.userData.originalPos.z,
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        card.userData.isAnimating = false;
        drawnCard = null;
      },
    });

    gsap.to(card.rotation, {
      x: card.userData.originalRot.x,
      y: card.userData.originalRot.y,
      z: card.userData.originalRot.z,
      duration: 1,
    });

    gsap.to(card.scale, {
      x: 1,
      y: 1,
      z: 1,
      duration: 1,
    });
  }

  drawnCard = null;
}

const spreadLayouts = {
  [SPREAD_TYPES.THREE_CARD]: [
    { x: -4, y: 0, z: -12 },
    { x: 0, y: 0, z: -12 },
    { x: 4, y: 0, z: -12 },
  ],
  [SPREAD_TYPES.CELTIC_CROSS]: [
    { x: -2, y: 0, z: -10 },
    { x: -2, y: 0, z: -10, rotationZ: Math.PI / 2 },
    { x: -6, y: 0, z: -10 },
    { x: 2, y: 0, z: -10 },
    { x: -2, y: 4, z: -10 },
    { x: -2, y: -4, z: -10 },
    { x: 6, y: 4, z: -10 },
    { x: 6, y: 1.5, z: -10 },
    { x: 6, y: -1.5, z: -10 },
    { x: 6, y: -4, z: -10 },
  ],
  [SPREAD_TYPES.HORSESHOE]: [
    { x: -8, y: -3, z: -10 },
    { x: -5, y: -3, z: -10 },
    { x: -2, y: -3, z: -10 },
    { x: 1, y: -3, z: -10 },
    { x: 4, y: -3, z: -10 },
    { x: 7, y: -3, z: -10 },
    { x: 10, y: -3, z: -10 },
  ],
};

function updateSpreadIndicator(text) {
  const indicator = document.getElementById("spread-indicator");
  if (indicator) {
    indicator.textContent = text;
    indicator.style.opacity = text ? "1" : "0";
  }
}

function updateGestureHint(text) {
  if (gestureHintElement) {
    gestureHintElement.textContent = text;
    gestureHintElement.style.opacity = text ? "1" : "0";
  }
}
