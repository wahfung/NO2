import * as THREE from 'three';
import { getPBRMaps } from './materials.js';

export function setupScene() {
    const scene = new THREE.Scene();
    // Fog to fade out distant cards or create atmosphere
    scene.fog = new THREE.FogExp2(0x050510, 0.02);

    const camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.set(0, 0, 0); // Center of the ring

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    document.getElementById('app').appendChild(renderer.domElement);

    // 创建环境贴图用于 PBR 反射
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();

    // 创建自定义环境贴图
    const envMap = createCustomEnvironmentMap();
    scene.environment = envMap;
    scene.background = null; // 保持透明背景

    // 增强的光照系统
    // 1. 环境光 - 提供基础照明
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    // 2. 主光源 - 暖色调点光源（模拟神秘氛围）
    const mainLight = new THREE.PointLight(0xffaa33, 2.0, 100);
    mainLight.position.set(0, 10, 5);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = 1024;
    mainLight.shadow.mapSize.height = 1024;
    scene.add(mainLight);

    // 3. 补光 - 冷色调（增加对比）
    const fillLight = new THREE.PointLight(0x6688ff, 0.8, 80);
    fillLight.position.set(-10, 5, -10);
    scene.add(fillLight);

    // 4. 轮廓光 - 从后方照射（突出卡片边缘）
    const rimLight = new THREE.PointLight(0xffd700, 1.2, 60);
    rimLight.position.set(0, 8, -15);
    scene.add(rimLight);

    // 5. 动态光源 - 用于卡片翻转时的特殊反光效果
    const dynamicLight = new THREE.PointLight(0xffffff, 0, 30);
    dynamicLight.position.set(0, 0, -5);
    scene.add(dynamicLight);

    // Resize handler
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    return { scene, camera, renderer, mainLight, fillLight, rimLight, dynamicLight, pmremGenerator };
}

/**
 * 创建自定义环境贴图 - 用于 PBR 材质反射
 * 创建一个带有金色和蓝色调的神秘环境
 */
function createCustomEnvironmentMap() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // 创建渐变背景 - 模拟环境光照
    const gradient = ctx.createLinearGradient(0, 0, 0, 512);
    gradient.addColorStop(0, '#1a0f2e');    // 深紫
    gradient.addColorStop(0.3, '#2d1b4e');  // 紫色
    gradient.addColorStop(0.5, '#0f1a2e');  // 深蓝
    gradient.addColorStop(0.7, '#1e3a5f');  // 亮蓝
    gradient.addColorStop(1, '#0a0f1a');    // 近黑

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1024, 512);

    // 添加光源点 - 模拟环境光的高光
    const lights = [
        { x: 200, y: 150, color: '#ffaa33', size: 80 },  // 暖光
        { x: 800, y: 200, color: '#4488ff', size: 100 }, // 冷光
        { x: 500, y: 100, color: '#ffdd88', size: 60 },  // 金光
        { x: 100, y: 350, color: '#6644aa', size: 70 },  // 紫光
        { x: 900, y: 400, color: '#3388aa', size: 90 },  // 青蓝光
    ];

    lights.forEach(light => {
        const radialGradient = ctx.createRadialGradient(
            light.x, light.y, 0,
            light.x, light.y, light.size
        );
        radialGradient.addColorStop(0, light.color);
        radialGradient.addColorStop(0.5, light.color + '66'); // 40% 透明度
        radialGradient.addColorStop(1, 'transparent');

        ctx.fillStyle = radialGradient;
        ctx.beginPath();
        ctx.arc(light.x, light.y, light.size, 0, Math.PI * 2);
        ctx.fill();
    });

    // 添加一些星光效果
    for (let i = 0; i < 50; i++) {
        const x = Math.random() * 1024;
        const y = Math.random() * 512;
        const size = Math.random() * 3 + 1;
        const brightness = Math.random();

        ctx.fillStyle = `rgba(255, 255, 255, ${brightness * 0.8})`;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.mapping = THREE.EquirectangularReflectionMapping;
    texture.colorSpace = THREE.SRGBColorSpace;

    return texture;
}

/**
 * 更新动态光源位置和强度
 * 用于卡片翻转时的特殊反光效果
 */
export function updateDynamicLight(dynamicLight, intensity, position = null) {
    if (!dynamicLight) return;

    dynamicLight.intensity = intensity;

    if (position) {
        dynamicLight.position.copy(position);
    }
}

/**
 * 获取环境光照强度
 * 用于调整材质的 envMapIntensity
 */
export function getEnvironmentIntensity() {
    return 1.5;
}
