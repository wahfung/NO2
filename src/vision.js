import { Hands } from "@mediapipe/hands";
import { Camera } from "@mediapipe/camera_utils";

export const handState = {
  cursor: { x: 0, y: 0 },
  cursor2: { x: 0, y: 0 },
  rawX: 0,
  velocity: 0,
  isPinching: false,
  isPresent: false,
  isPushOut: false,
  handsDistance: 0,
  handsDistanceDelta: 0,
  twoHandsPresent: false,
  isPreparedForPushOut: false,
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
let lastHandsDistance = null;
let pushOutStartTime = 0;
let prepareStartTime = 0;

const PUSH_OUT_THRESHOLD = 0.02;
const PUSH_OUT_DURATION = 200;
const PREPARE_DURATION = 150;
const MIN_HANDS_DISTANCE = 0.2;
const MAX_PREPARE_DISTANCE = 0.4;

function onResults(results) {
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
      handState.twoHandsPresent = true;
      const hand1 = results.multiHandLandmarks[0];
      const hand2 = results.multiHandLandmarks[1];

      const palm1 = hand1[9];
      const palm2 = hand2[9];

      const indexTip2 = hand2[8];
      handState.cursor2.x = (1 - indexTip2.x) * 2 - 1;
      handState.cursor2.y = -(indexTip2.y * 2 - 1);

      const handsDist = Math.sqrt(
        Math.pow(palm1.x - palm2.x, 2) + Math.pow(palm1.y - palm2.y, 2),
      );

      if (lastHandsDistance !== null) {
        handState.handsDistanceDelta = handsDist - lastHandsDistance;
      } else {
        handState.handsDistanceDelta = 0;
      }
      lastHandsDistance = handsDist;
      handState.handsDistance = handsDist;

      const bothOpen = !isPinchingHand(hand1) && !isPinchingHand(hand2);

      if (bothOpen) {
        if (
          handsDist < MAX_PREPARE_DISTANCE &&
          !handState.isPreparedForPushOut
        ) {
          if (prepareStartTime === 0) {
            prepareStartTime = now;
          } else if (now - prepareStartTime > PREPARE_DURATION) {
            handState.isPreparedForPushOut = true;
            prepareStartTime = 0;
          }
        }

        if (
          handState.isPreparedForPushOut &&
          handState.handsDistanceDelta > PUSH_OUT_THRESHOLD &&
          handsDist > MIN_HANDS_DISTANCE
        ) {
          if (pushOutStartTime === 0) {
            pushOutStartTime = now;
          } else if (now - pushOutStartTime > PUSH_OUT_DURATION) {
            handState.isPushOut = true;
            pushOutStartTime = 0;
            handState.isPreparedForPushOut = false;
          }
        }

        if (handsDist > MAX_PREPARE_DISTANCE + 0.15) {
          handState.isPreparedForPushOut = false;
        }
      } else {
        handState.isPreparedForPushOut = false;
        prepareStartTime = 0;
        pushOutStartTime = 0;
      }
    } else {
      handState.twoHandsPresent = false;
      handState.isPushOut = false;
      handState.isPreparedForPushOut = false;
      prepareStartTime = 0;
      pushOutStartTime = 0;
      lastHandsDistance = null;
    }
  } else {
    handState.isPresent = false;
    handState.velocity = 0;
    handState.isPushOut = false;
    handState.twoHandsPresent = false;
    handState.isPreparedForPushOut = false;
    prepareStartTime = 0;
    pushOutStartTime = 0;
    lastHandsDistance = null;
  }
}

function isPinchingHand(landmarks) {
  const indexTip = landmarks[8];
  const thumbTip = landmarks[4];
  const dx = indexTip.x - thumbTip.x;
  const dy = indexTip.y - thumbTip.y;
  return Math.sqrt(dx * dx + dy * dy) < 0.08;
}
