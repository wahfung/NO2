import * as THREE from 'three';
import { tarotDeck, getCardTextureUrl } from './tarot-data.js';
import {
    createCardFrontMaterial,
    createCardBackMaterial,
    createCardEdgeMaterial,
    updateMaterialReflection,
    updateHolographicEffect,
    getPBRMaps
} from './materials.js';

const CARD_WIDTH = 2;
const CARD_HEIGHT = 3.5;
const RADIUS = 18; // Adjust based on spacing needs

export function createCardRing(scene) {
    const group = new THREE.Group();
    scene.add(group);

    const textureLoader = new THREE.TextureLoader();

    // 获取 PBR 贴图
    const { backTexture } = getPBRMaps();

    // 创建共享的边缘材质
    const edgeMaterial = createCardEdgeMaterial();
    const backMaterial = createCardBackMaterial();

    tarotDeck.forEach((cardData, index) => {
        const angle = (index / tarotDeck.length) * Math.PI * 2;

        // 使用 BoxGeometry 创建有厚度的卡片
        const geometry = new THREE.BoxGeometry(CARD_WIDTH, CARD_HEIGHT, 0.03);

        // 加载正面纹理
        const frontTexture = textureLoader.load(getCardTextureUrl(cardData.img));
        frontTexture.colorSpace = THREE.SRGBColorSpace;

        // 创建正面 PBR 材质
        const frontMaterial = createCardFrontMaterial(frontTexture);

        // 材质数组: [右, 左, 上, 下, 前(背面), 后(正面)]
        const materials = [
            edgeMaterial,      // right
            edgeMaterial,      // left
            edgeMaterial,      // top
            edgeMaterial,      // bottom
            backMaterial,      // front (+Z) - 显示背面图案
            frontMaterial      // back (-Z) - 显示塔罗图像
        ];

        const cardMesh = new THREE.Mesh(geometry, materials);

        // Position
        const x = Math.sin(angle) * RADIUS;
        const z = Math.cos(angle) * RADIUS;

        cardMesh.position.set(x, 0, z);

        // Rotation: Look at center
        cardMesh.lookAt(0, 0, 0);

        // 存储数据在 userdata 中供交互使用
        cardMesh.userData = {
            id: index,
            name: cardData.name,
            originalPos: new THREE.Vector3(x, 0, z),
            originalRot: cardMesh.rotation.clone(),
            isDrawn: false,
            isFlipping: false,
            flipProgress: 0
        };

        group.add(cardMesh);
    });

    return group;
}

/**
 * 更新卡片的 PBR 反射效果
 * 用于动画循环中动态调整反光
 */
export function updateCardPBR(cardMesh, deltaTime) {
    if (!cardMesh) return;

    const userData = cardMesh.userData;

    // 如果卡片正在翻转，增强反光效果
    if (userData.isFlipping) {
        userData.flipProgress += deltaTime * 2; // 翻转速度

        // 计算翻转阶段的反光强度
        // 当卡片接近垂直于视线时（翻转中途），反光最强
        const flipIntensity = Math.sin(userData.flipProgress * Math.PI);

        // 动态调整材质反射
        const baseIntensity = 1.5;
        const maxIntensity = 3.0;
        const currentIntensity = baseIntensity + (maxIntensity - baseIntensity) * flipIntensity;

        updateMaterialReflection(cardMesh, currentIntensity, 0.9);

        // 更新镭射效果
        updateHolographicEffect(cardMesh, performance.now() * 0.001, flipIntensity * 0.8);

        // 翻转完成
        if (userData.flipProgress >= 1) {
            userData.isFlipping = false;
            userData.flipProgress = 0;
            updateMaterialReflection(cardMesh, baseIntensity, 1.0);
        }
    }
}

/**
 * 触发卡片翻转效果
 */
export function triggerCardFlip(cardMesh) {
    if (!cardMesh) return;
    cardMesh.userData.isFlipping = true;
    cardMesh.userData.flipProgress = 0;
}

/**
 * 设置卡片高亮效果（悬停时）
 */
export function setCardHighlight(cardMesh, isHighlighted) {
    if (!cardMesh || !cardMesh.material) return;

    const materials = Array.isArray(cardMesh.material) ? cardMesh.material : [cardMesh.material];

    materials.forEach((material, index) => {
        // 跳过边缘材质
        if (index < 4) return;

        if (isHighlighted) {
            // 悬停时增强金属感和反光
            material.envMapIntensity = 2.5;
            material.emissive = new THREE.Color(0x221100);
            material.emissiveIntensity = 0.2;
        } else {
            // 恢复正常
            material.envMapIntensity = 1.5;
            material.emissive = new THREE.Color(0x000000);
            material.emissiveIntensity = 0;
        }
        material.needsUpdate = true;
    });
}
