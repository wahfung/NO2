import * as THREE from 'three';

export function setupScene() {
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050510, 0.02);

    const camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.set(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    document.getElementById('app').appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffaa00, 2, 50);
    pointLight.position.set(0, 5, 0);
    scene.add(pointLight);

    const dynamicLight1 = new THREE.PointLight(0x00ffff, 1.5, 30);
    dynamicLight1.position.set(5, 3, -5);
    dynamicLight1.name = 'dynamicLight1';
    scene.add(dynamicLight1);

    const dynamicLight2 = new THREE.PointLight(0xff00ff, 1.5, 30);
    dynamicLight2.position.set(-5, 3, -5);
    dynamicLight2.name = 'dynamicLight2';
    scene.add(dynamicLight2);

    const envMap = createHolographicEnvMap();
    scene.environment = envMap;

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    return { scene, camera, renderer };
}

function createHolographicEnvMap() {
    const size = 256;
    const data = new Float32Array(size * size * 4);
    
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const idx = (i * size + j) * 4;
            const u = j / size;
            const v = i / size;
            
            const r = Math.sin(u * Math.PI * 4) * 0.5 + 0.5;
            const g = Math.sin(v * Math.PI * 4 + Math.PI / 3) * 0.5 + 0.5;
            const b = Math.sin((u + v) * Math.PI * 2 + Math.PI * 2 / 3) * 0.5 + 0.5;
            
            data[idx] = r * 0.8 + 0.2;
            data[idx + 1] = g * 0.8 + 0.2;
            data[idx + 2] = b * 0.8 + 0.2;
            data[idx + 3] = 1;
        }
    }
    
    const texture = new THREE.DataTexture(data, size, size, THREE.RGBAFormat, THREE.FloatType);
    texture.mapping = THREE.EquirectangularReflectionMapping;
    texture.needsUpdate = true;
    
    return texture;
}
