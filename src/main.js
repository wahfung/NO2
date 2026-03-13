import { setupScene } from './scene.js';
import { createCardRing } from './cards.js';
import { setupVision } from './vision.js';
import { updateInteraction, setDynamicLight } from './interaction.js';

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
    const { scene, camera, renderer, mainLight, fillLight, rimLight, dynamicLight } = setupScene();
    window.sceneInstance = scene; // Global ref for interaction.js

    // 设置动态光源引用
    setDynamicLight(dynamicLight);

    // 3. Create Cards with PBR materials
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
    let lastTime = performance.now();

    function animate() {
        requestAnimationFrame(animate);

        const currentTime = performance.now();
        const deltaTime = (currentTime - lastTime) / 1000;
        lastTime = currentTime;

        // 更新光源动画（营造动态环境氛围）
        if (mainLight) {
            mainLight.intensity = 2.0 + Math.sin(currentTime * 0.001) * 0.3;
        }
        if (rimLight) {
            rimLight.position.x = Math.sin(currentTime * 0.0005) * 5;
            rimLight.intensity = 1.2 + Math.cos(currentTime * 0.002) * 0.4;
        }
        if (fillLight) {
            fillLight.intensity = 0.8 + Math.sin(currentTime * 0.0015) * 0.2;
        }

        updateInteraction(scene, camera, cardGroup);

        renderer.render(scene, camera);
    }
    animate();
}

init();
