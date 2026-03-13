import { setupScene } from './scene.js';
import { createCardRing } from './cards.js';
import { setupVision } from './vision.js';
import { updateInteraction } from './interaction.js';
import { TarotSpread, SPREAD_TYPES } from './spreads.js';

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

    // Create牌阵状态显示
    const spreadStatus = document.createElement('div');
    spreadStatus.id = 'spread-status';
    spreadStatus.style.position = 'absolute';
    spreadStatus.style.top = '20px';
    spreadStatus.style.left = '50%';
    spreadStatus.style.transform = 'translateX(-50%)';
    spreadStatus.style.color = '#d4af37';
    spreadStatus.style.fontFamily = 'serif';
    spreadStatus.style.fontSize = '24px';
    spreadStatus.style.textShadow = '0 0 10px rgba(212, 175, 55, 0.5)';
    spreadStatus.style.opacity = '0';
    spreadStatus.style.transition = 'opacity 0.5s';
    spreadStatus.style.pointerEvents = 'none';
    spreadStatus.style.zIndex = '100';
    document.body.appendChild(spreadStatus);

    // 2. Setup 3D Scene
    const { scene, camera, renderer } = setupScene();
    window.sceneInstance = scene; // Global ref for interaction.js

    // 3. Create Cards
    const cardGroup = createCardRing(scene);
    window.cardGroupInstance = cardGroup;

    // 存储原始卡片数据用于返回
    window.originalCardsData = cardGroup.children.map(card => ({
        id: card.userData.id,
        originalPos: card.userData.originalPos.clone(),
        originalRot: card.userData.originalRot.clone()
    }));

    // 4. Initialize Tarot Spread System
    const tarotSpread = new TarotSpread(scene);
    window.tarotSpread = tarotSpread;

    // 5. Setup Vision
    try {
        await setupVision();
        loading.style.opacity = 0;
    } catch (err) {
        loading.innerText = "无法访问摄像头，请允许权限。";
        console.error(err);
    }

    // 6. Animation Loop
    function animate() {
        requestAnimationFrame(animate);

        updateInteraction(scene, camera, cardGroup, tarotSpread);

        renderer.render(scene, camera);
    }
    animate();
}

init();
