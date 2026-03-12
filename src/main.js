import { setupScene } from './scene.js';
import { createCardRing } from './cards.js';
import { setupVision } from './vision.js';
import { updateInteraction } from './interaction.js';

async function init() {
    // 1. Setup UI
    const loading = document.getElementById('loading');

    // Create Visual Cursor
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
    cursor.style.opacity = '0'; // Hidden by default until hand detected
    document.body.appendChild(cursor);

    // 2. Setup 3D Scene
    const { scene, camera, renderer } = setupScene();
    window.sceneInstance = scene; // Global ref for interaction.js

    // 3. Create Cards
    const cardGroup = createCardRing(scene);
    window.cardGroupInstance = cardGroup;

    // 4. Setup Vision
    try {
        await setupVision();
        loading.style.opacity = 0;
    } catch (err) {
        loading.innerText = "无法访问摄像头，请允许权限。";
        console.error(err);
    }

    // 5. Animation Loop
    function animate() {
        requestAnimationFrame(animate);

        updateInteraction(scene, camera, cardGroup);

        renderer.render(scene, camera);
    }
    animate();
}

init();
