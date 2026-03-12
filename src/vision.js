import { Hands } from '@mediapipe/hands';
import { Camera } from '@mediapipe/camera_utils';

export const handState = {
    cursor: { x: 0, y: 0 },
    rawX: 0,
    velocity: 0,
    isPinching: false,
    isPresent: false
};

const videoElement = document.createElement('video');
videoElement.style.display = 'none';
document.body.appendChild(videoElement);

export async function setupVision() {
    const hands = new Hands({
        locateFile: (file) => {
            return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
        }
    });

    hands.setOptions({
        maxNumHands: 1,
        modelComplexity: 1,
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5
    });

    hands.onResults(onResults);

    const camera = new Camera(videoElement, {
        onFrame: async () => {
            await hands.send({ image: videoElement });
        },
        width: 1280,
        height: 720
    });

    camera.start();
}

let lastX = 0;
let lastTime = performance.now();

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

    } else {
        handState.isPresent = false;
        handState.velocity = 0;
    }
}
