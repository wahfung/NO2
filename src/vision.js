import { Hands } from "@mediapipe/hands";
import { Camera } from "@mediapipe/camera_utils";

export const handState = {
  cursor: { x: 0, y: 0 },
  rawX: 0,
  velocity: 0,
  isPinching: false,
  isPresent: false,
  // 双手手势状态
  twoHandsPresent: false,
  handsSpreading: false,
  handsClosing: false,
  handsDistance: 0,
  handsSpreadVelocity: 0,
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
let lastHandsTime = performance.now();

function onResults(results) {
  if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
    handState.isPresent = true;
    const landmarks = results.multiHandLandmarks[0];

    // Index tip (8) and Thumb tip (4)
    const indexTip = landmarks[8];
    const thumbTip = landmarks[4];

    // Cursor position (inverted X for mirror effect)
    handState.cursor.x = (1 - indexTip.x) * 2 - 1; // -1 to 1
    handState.cursor.y = -(indexTip.y * 2 - 1); // -1 to 1 (threejs Y is up)

    // Calculate Velocity
    const now = performance.now();
    const dt = (now - lastTime) / 1000;
    if (dt > 0) {
      // Mirror X for intuitive control: Hand Left -> Cursor Left -> Rotate Left
      const currentX = 1 - indexTip.x;
      handState.velocity = (currentX - lastX) / dt;
      lastX = currentX;
    }
    lastTime = now;

    // Pinch Detection
    // Distance in normalized coordinates
    const dx = indexTip.x - thumbTip.x;
    const dy = indexTip.y - thumbTip.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Threshold usually around 0.05 - 0.1
    handState.isPinching = distance < 0.08;

    // 双手检测
    if (results.multiHandLandmarks.length >= 2) {
      handState.twoHandsPresent = true;

      // 获取两只手的手腕位置 (landmark 0)
      const hand1Wrist = results.multiHandLandmarks[0][0];
      const hand2Wrist = results.multiHandLandmarks[1][0];

      // 计算双手距离
      const handsDx = hand1Wrist.x - hand2Wrist.x;
      const handsDy = hand1Wrist.y - hand2Wrist.y;
      const currentHandsDistance = Math.sqrt(
        handsDx * handsDx + handsDy * handsDy,
      );
      handState.handsDistance = currentHandsDistance;

      // 计算双手分开速度
      const handsDt = (now - lastHandsTime) / 1000;
      if (handsDt > 0) {
        handState.handsSpreadVelocity =
          (currentHandsDistance - lastHandsDistance) / handsDt;
      }
      lastHandsDistance = currentHandsDistance;
      lastHandsTime = now;

      // 检测"向外推开"手势
      // 条件：双手距离足够大 (>0.3)，且分开速度为正（正在分开）
      const SPREAD_THRESHOLD = 0.3;
      const VELOCITY_THRESHOLD = 0.5;
      handState.handsSpreading =
        currentHandsDistance > SPREAD_THRESHOLD &&
        handState.handsSpreadVelocity > VELOCITY_THRESHOLD;

      // 检测"向内合拢"手势 - 用于返回圆柱阵列
      // 条件：双手距离足够小 (<0.25)，且合拢速度为负（正在靠近）
      const CLOSE_THRESHOLD = 0.25;
      const CLOSE_VELOCITY_THRESHOLD = -0.3;
      handState.handsClosing =
        currentHandsDistance < CLOSE_THRESHOLD &&
        handState.handsSpreadVelocity < CLOSE_VELOCITY_THRESHOLD;
    } else {
      handState.twoHandsPresent = false;
      handState.handsSpreading = false;
      handState.handsClosing = false;
      handState.handsDistance = 0;
      handState.handsSpreadVelocity = 0;
      lastHandsDistance = 0;
    }
  } else {
    handState.isPresent = false;
    handState.velocity = 0;
    handState.twoHandsPresent = false;
    handState.handsSpreading = false;
    handState.handsClosing = false;
    handState.handsDistance = 0;
    handState.handsSpreadVelocity = 0;
  }
}
