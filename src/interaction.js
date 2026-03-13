import * as THREE from "three";
import gsap from "gsap";
import { handState } from "./vision.js";

let drawnCard = null;
let rotationVelocity = 0;
const FRICTION = 0.95;
const ROTATION_SENSITIVITY = 0.005;

// Raycaster
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// 牌阵手势状态
let spreadTriggerCooldown = false;
let returnTriggerCooldown = false;
let lastSpreadTriggerTime = 0;
let lastReturnTriggerTime = 0;
const SPREAD_COOLDOWN_MS = 5000; // 5秒冷却时间
const RETURN_COOLDOWN_MS = 3000; // 3秒冷却时间

export function updateInteraction(scene, camera, cardGroup, tarotSpread) {
  // 检查是否在牌阵模式下
  const isInSpreadMode = tarotSpread && tarotSpread.isInSpreadMode;

  // 1. Handle Rotation (只在非牌阵模式下)
  if (handState.isPresent && !isInSpreadMode) {
    // Add velocity based on hand movement
    // handState.velocity is usually around -2 to 2 range maybe?
    // We dampen it
    rotationVelocity += handState.velocity * ROTATION_SENSITIVITY;
  }

  // Apply physics
  rotationVelocity *= FRICTION;
  cardGroup.rotation.y += rotationVelocity;

  // 2. Raycasting (只在非牌阵模式下)
  if (!isInSpreadMode) {
    mouse.x = handState.cursor.x;
    mouse.y = handState.cursor.y;
    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(cardGroup.children, false);

    // Reset scales
    cardGroup.children.forEach((card) => {
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

    // 3. Draw / Return Logic
    if (handState.isPinching && targetCard && !drawnCard) {
      drawCard(targetCard);
    } else if (!handState.isPinching && drawnCard) {
      returnCard();
    }
  }

  // 4. 双手推开手势 - 触发牌阵
  const now = Date.now();
  if (handState.handsSpreading && !spreadTriggerCooldown && !isInSpreadMode) {
    if (now - lastSpreadTriggerTime > SPREAD_COOLDOWN_MS) {
      triggerSpreadAnimation(cardGroup, tarotSpread);
      spreadTriggerCooldown = true;
      lastSpreadTriggerTime = now;

      // 3秒后重置冷却
      setTimeout(() => {
        spreadTriggerCooldown = false;
      }, 3000);
    }
  }

  // 5. 双手合拢手势 - 返回圆柱阵列
  if (handState.handsClosing && !returnTriggerCooldown && isInSpreadMode) {
    if (now - lastReturnTriggerTime > RETURN_COOLDOWN_MS) {
      triggerReturnAnimation(cardGroup, tarotSpread);
      returnTriggerCooldown = true;
      lastReturnTriggerTime = now;

      // 2秒后重置冷却
      setTimeout(() => {
        returnTriggerCooldown = false;
      }, 2000);
    }
  }

  // 6. 更新UI
  updateCursorVisual();
  updateSpreadStatus(tarotSpread);
}

// 更新光标视觉
function updateCursorVisual() {
  const cursorVisual = document.getElementById("cursor-visual");
  if (!cursorVisual) return;

  if (handState.isPresent) {
    cursorVisual.style.opacity = "1";
    // Convert normalized coords to screen pixels
    const px = ((handState.cursor.x + 1) / 2) * window.innerWidth;
    const py = ((-handState.cursor.y + 1) / 2) * window.innerHeight;
    cursorVisual.style.left = `${px}px`;
    cursorVisual.style.top = `${py}px`;
    cursorVisual.style.transform = `translate(-50%, -50%)`;

    // 根据状态改变颜色
    if (handState.handsSpreading) {
      cursorVisual.style.backgroundColor = "#00ff00"; // 绿色表示触发牌阵
      cursorVisual.style.boxShadow = "0 0 20px #00ff00";
    } else if (handState.handsClosing) {
      cursorVisual.style.backgroundColor = "#ff6600"; // 橙色表示返回
      cursorVisual.style.boxShadow = "0 0 20px #ff6600";
    } else if (handState.twoHandsPresent) {
      cursorVisual.style.backgroundColor = "#00aaff"; // 蓝色表示检测到双手
      cursorVisual.style.boxShadow = "0 0 10px #00aaff";
    } else if (handState.isPinching) {
      cursorVisual.style.backgroundColor = "red";
      cursorVisual.style.boxShadow = "0 0 10px red";
    } else {
      cursorVisual.style.backgroundColor = "gold";
      cursorVisual.style.boxShadow = "0 0 10px gold";
    }
  } else {
    cursorVisual.style.opacity = "0";
  }
}

// 更新牌阵状态显示
function updateSpreadStatus(tarotSpread) {
  const spreadStatus = document.getElementById("spread-status");
  if (!spreadStatus || !tarotSpread) return;

  if (tarotSpread.isInSpreadMode && tarotSpread.currentSpread) {
    const spreadInfo = tarotSpread.getSpreadInfo(tarotSpread.currentSpread);
    spreadStatus.textContent = spreadInfo.name;
    spreadStatus.style.opacity = "1";
  } else {
    spreadStatus.style.opacity = "0";
  }
}

// 触发牌阵动画
async function triggerSpreadAnimation(cardGroup, tarotSpread) {
  if (!tarotSpread) return;

  // 显示提示
  const spreadStatus = document.getElementById("spread-status");
  if (spreadStatus) {
    spreadStatus.textContent = "正在洗牌...";
    spreadStatus.style.opacity = "1";
  }

  // 随机选择牌阵类型
  const spreadType = tarotSpread.getRandomSpreadType();

  // 执行洗牌发牌动画
  const cards = cardGroup.children.filter((card) => card !== drawnCard);
  await tarotSpread.shuffleAnimation(cards, spreadType);

  console.log(`牌阵已展开: ${tarotSpread.getSpreadInfo(spreadType).name}`);
}

// 触发返回动画
async function triggerReturnAnimation(cardGroup, tarotSpread) {
  if (!tarotSpread || !tarotSpread.isInSpreadMode) return;

  // 显示提示
  const spreadStatus = document.getElementById("spread-status");
  if (spreadStatus) {
    spreadStatus.textContent = "正在返回...";
    spreadStatus.style.opacity = "1";
  }

  // 执行返回动画
  await tarotSpread.returnToRing(cardGroup, window.originalCardsData);

  console.log("已返回圆柱阵列");
}

function drawCard(card) {
  if (card.userData.isAnimating) return;
  drawnCard = card;
  card.userData.isAnimating = true;

  // Convert world position to local to camera... actually:
  // We want to bring it in front of the camera.
  // Simplest: Parent it to camera? Or just move it to camera local space world pos.

  // Let's animate position to a fixed point in front of camera
  // Camera is at 0,0,0 facing -Z (default) or set in scene.js
  // scene.js: camera.position.set(0, 0, 0); BUT cards are surrounding it.
  // If cards surround (0,0,0), then camera looks at them.
  // Wait, if camera is at (0,0,0), looking at -Z?
  // Cards are at radius.
  // We want to bring card close to camera.

  // Actually, let's just move it to (0, 0, -5) relative to camera rotation?
  // Since camera doesn't move/rotate (the ring rotates), we can just move card to (0, 0, -8).
  // And rotate it to face camera.

  // We need to change coordinate space or just animate world position.
  // Since camera is static at 0,0,0, (0,0,-8) is always "in front" if camera looks -Z.
  // But wait, setupScene() didn't specify lookAt. Default is look -Z.
  // So yes.

  // Store original world transform (which effectively is `originalPos` rotated by group.rotation)
  // Wait, the card is child of `group`. `group` is rotating.
  // If we move the card while it is child of group, it will keep rotating with group.
  // We should `scene.attach(card)` to detach it from group but keep world transform, then animate.

  card.parent.remove(card);
  const scene = card.parent ? card.parent : window.sceneInstance; // Hacky access?
  // Better: loop up to scene.
  // Assume main.js passes scene.
  // For now, let's attach to scene root.
  // But three.js `attach` handles the transform calculation.
  window.sceneInstance.attach(card);

  gsap.to(card.position, {
    x: 0,
    y: 0,
    z: -10,
    duration: 1,
    ease: "power2.out",
  });

  gsap.to(card.rotation, {
    x: 0,
    y: Math.PI, // Face camera
    z: 0,
    duration: 1,
  });
}

function returnCard() {
  if (!drawnCard) return;
  const card = drawnCard;

  // Re-attach to group?
  // If we re-attach, position becomes local.
  // We want to animate BACK to the slot in the ring.
  // The slot is rotating.
  // Easier: Animate purely in world space to where the slot IS right now?
  // No, easier to attach back to group immediately, and animate local position to originalPos.

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

  // Reset reference immediately so we don't call return again
  drawnCard = null;
}
