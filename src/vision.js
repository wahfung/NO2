import { Hands } from "@mediapipe/hands";
import { Camera } from "@mediapipe/camera_utils";

export const handState = {
  cursor: { x: 0, y: 0 },
  rawX: 0,
  velocity: 0,
  isPinching: false,
  isPresent: false,
  isTwoHands: false,
  isSpreadGesture: false,
  handsDistance: 0,
};

const videoElement = document.createElement("video");
videoElement.style.display = "none";
document.body.appendChild(videoElement);

export async function setupVision() {
  const hands = new Hands({
    locateFile: (file) => {
      return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
    },
  });

  hands.setOptions({
    maxNumHands: 2,
    modelComplexity: 1,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5,
  });

  hands.onResults(onResults);

  const camera = new Camera(videoElement, {
    onFrame: async () => {
      await hands.send({ image: videoElement });
    },
    width: 1280,
    height: 720,
  });

  camera.start();
}

let lastX = 0;
let lastTime = performance.now();
let lastHandsDistance = 0;
let spreadGestureCooldown = 0;
const SPREAD_THRESHOLD = 0.15;
const SPREAD_SPEED_THRESHOLD = 0.02;

function onResults(results) {
  handState.isTwoHands = false;
  handState.isSpreadGesture = false;

  if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
    handState.isPresent = true;
    const landmarks = results.multiHandLandmarks[0];

    const indexTip = landmarks[8];
    const thumbTip = landmarks[4];

    handState.cursor.x = (1 - indexTip.x) * 2 - 1;
    handState.cursor.y = -(indexTip.y * 2 - 1);

    const now = performance.now();
    const dt = (now - lastTime) / 1000;
    if (dt > 0) {
      const currentX = 1 - indexTip.x;
      handState.velocity = (currentX - lastX) / dt;
      lastX = currentX;
    }
    lastTime = now;

    const dx = indexTip.x - thumbTip.x;
    const dy = indexTip.y - thumbTip.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    handState.isPinching = distance < 0.08;

    if (results.multiHandLandmarks.length === 2) {
      handState.isTwoHands = true;
      const hand1 = results.multiHandLandmarks[0];
      const hand2 = results.multiHandLandmarks[1];

      const h1CenterX = (hand1[0].x + hand1[5].x + hand1[17].x) / 3;
      const h1CenterY = (hand1[0].y + hand1[5].y + hand1[17].y) / 3;
      const h2CenterX = (hand2[0].x + hand2[5].x + hand2[17].x) / 3;
      const h2CenterY = (hand2[0].y + hand2[5].y + hand2[17].y) / 3;

      const hdx = h2CenterX - h1CenterX;
      const hdy = h2CenterY - h1CenterY;
      handState.handsDistance = Math.sqrt(hdx * hdx + hdy * hdy);

      const distanceChange = handState.handsDistance - lastHandsDistance;
      if (
        distanceChange > SPREAD_SPEED_THRESHOLD &&
        handState.handsDistance > SPREAD_THRESHOLD
      ) {
        if (now > spreadGestureCooldown) {
          handState.isSpreadGesture = true;
          spreadGestureCooldown = now + 2000;
        }
      }
      lastHandsDistance = handState.handsDistance;
    } else {
      lastHandsDistance = 0;
      handState.handsDistance = 0;
    }
  } else {
    handState.isPresent = false;
    handState.velocity = 0;
    lastHandsDistance = 0;
  }
}
