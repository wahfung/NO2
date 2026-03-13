import * as THREE from "three";
import gsap from "gsap";
import { handState } from "./vision.js";
import {
  startShuffleAndDeal,
  resetToRing,
  isSpreadModeActive,
  updateSpreadMode,
} from "./tarot-spreads.js";

let drawnCard = null;
let rotationVelocity = 0;
const FRICTION = 0.95;
const ROTATION_SENSITIVITY = 0.005;
let spreadCooldown = false;
let isReturning = false;

// Raycaster
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

export function updateInteraction(scene, camera, cardGroup) {
  if (handState.isSpreadGesture && !spreadCooldown) {
    spreadCooldown = true;
    if (isSpreadModeActive()) {
      resetToRing(cardGroup);
    } else {
      startShuffleAndDeal(scene, cardGroup);
    }
    setTimeout(() => {
      spreadCooldown = false;
    }, 3000);
  }

  updateSpreadMode();

  if (isSpreadModeActive()) {
    return;
  }

  if (handState.isPresent) {
    rotationVelocity += handState.velocity * ROTATION_SENSITIVITY;
  }

  rotationVelocity *= FRICTION;
  cardGroup.rotation.y += rotationVelocity;

  mouse.x = handState.cursor.x;
  mouse.y = handState.cursor.y;
  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(cardGroup.children, false);

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

  const cursorVisual = document.getElementById("cursor-visual");
  if (cursorVisual) {
    if (handState.isPresent) {
      cursorVisual.style.opacity = "1";
      const px = ((handState.cursor.x + 1) / 2) * window.innerWidth;
      const py = ((-handState.cursor.y + 1) / 2) * window.innerHeight;
      cursorVisual.style.left = `${px}px`;
      cursorVisual.style.top = `${py}px`;
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
  if (!drawnCard || isReturning) return;
  isReturning = true;
  const card = drawnCard;
  drawnCard = null;

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
      isReturning = false;
    },
  });

  gsap.to(card.rotation, {
    x: card.userData.originalRot.x,
    y: card.userData.originalRot.y,
    z: card.userData.originalRot.z,
    duration: 1,
  });
}
