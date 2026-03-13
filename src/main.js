import { setupScene } from './scene.js';
import { createCardRing } from './cards.js';
import { setupVision } from './vision.js';
import { updateInteraction, initSpreadManager } from './interaction.js';

async function init() {
    const loading = document.getElementById('loading');

    const cursor = document.createElement('div');
    cursor.id = 'cursor-visual';
    cursor.style.position = 'absolute';
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    cursor.style.borderRadius = '50%';
    cursor.style.border = '2px solid white';
    cursor.style.backgroundColor = 'gold';
    cursor.style.transform = 'translate(-50%, -50%)';
    cursor.style.pointerEvents = 'none';
    cursor.style.zIndex = '1000';
    cursor.style.transition = 'background-color 0.2s, opacity 0.2s';
    cursor.style.opacity = '0';
    document.body.appendChild(cursor);

    const secondCursor = document.createElement('div');
    secondCursor.id = 'cursor-visual-2';
    secondCursor.style.position = 'absolute';
    secondCursor.style.width = '20px';
    secondCursor.style.height = '20px';
    secondCursor.style.borderRadius = '50%';
    secondCursor.style.border = '2px solid cyan';
    secondCursor.style.backgroundColor = 'cyan';
    secondCursor.style.transform = 'translate(-50%, -50%)';
    secondCursor.style.pointerEvents = 'none';
    secondCursor.style.zIndex = '1000';
    secondCursor.style.transition = 'background-color 0.2s, opacity 0.2s';
    secondCursor.style.opacity = '0';
    document.body.appendChild(secondCursor);

    const { scene, camera, renderer } = setupScene();
    window.sceneInstance = scene;
    window.cameraInstance = camera;

    const cardGroup = createCardRing(scene);
    window.cardGroupInstance = cardGroup;

    initSpreadManager(scene, cardGroup);

    try {
        await setupVision();
        loading.style.opacity = 0;
    } catch (err) {
        loading.innerText = "无法访问摄像头，请允许权限。";
        console.error(err);
    }

    function animate() {
        requestAnimationFrame(animate);

        updateInteraction(scene, camera, cardGroup);

        renderer.render(scene, camera);
    }
    animate();
}

init();
