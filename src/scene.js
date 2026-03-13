import * as THREE from "three";

export function setupScene() {
  const scene = new THREE.Scene();
  // 稍微明亮的夜空背景色
  scene.background = new THREE.Color(0x0a0a20);
  // Fog to fade out distant cards or create atmosphere
  scene.fog = new THREE.FogExp2(0x0a0a20, 0.005);

  const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );
  camera.position.set(0, 0, 0); // Center of the ring

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  // 启用阴影
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.shadowMap.autoUpdate = true;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;
  document.getElementById("app").appendChild(renderer.domElement);

  // Lighting - 大幅提升亮度以突出阴影对比
  const ambientLight = new THREE.AmbientLight(0x8080c0, 0.8);
  scene.add(ambientLight);

  // 中心主光源（更强的照明）
  const pointLight = new THREE.PointLight(0xffcc66, 3.0, 80);
  pointLight.position.set(0, 12, 0);
  pointLight.castShadow = true;
  pointLight.shadow.mapSize.width = 2048;
  pointLight.shadow.mapSize.height = 2048;
  scene.add(pointLight);

  // 蓝色边缘光
  const rimLight = new THREE.DirectionalLight(0x88aaff, 0.8);
  rimLight.position.set(-15, 8, -15);
  scene.add(rimLight);

  // 暖色补光1
  const warmFillLight1 = new THREE.PointLight(0xffddaa, 1.2, 50);
  warmFillLight1.position.set(12, 6, 12);
  scene.add(warmFillLight1);

  // 暖色补光2
  const warmFillLight2 = new THREE.PointLight(0xffddaa, 1.2, 50);
  warmFillLight2.position.set(-12, 6, 12);
  scene.add(warmFillLight2);

  // Resize handler
  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  return { scene, camera, renderer };
}
