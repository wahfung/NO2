import * as THREE from "three";

export function setupScene() {
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x0a0515, 0.015);

  const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );
  camera.position.set(0, 0, 0);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.8;
  document.getElementById("app").appendChild(renderer.domElement);

  const ambientLight = new THREE.AmbientLight(0x4a3a5a, 1.2);
  scene.add(ambientLight);

  const mainLight = new THREE.DirectionalLight(0xffeedd, 0.8);
  mainLight.position.set(0, 10, 0);
  mainLight.castShadow = true;
  mainLight.shadow.mapSize.width = 1024;
  mainLight.shadow.mapSize.height = 1024;
  mainLight.shadow.camera.near = 0.5;
  mainLight.shadow.camera.far = 50;
  mainLight.shadow.camera.left = -20;
  mainLight.shadow.camera.right = 20;
  mainLight.shadow.camera.top = 20;
  mainLight.shadow.camera.bottom = -20;
  scene.add(mainLight);

  const fillLight = new THREE.DirectionalLight(0xffccaa, 0.4);
  fillLight.position.set(5, 3, 5);
  scene.add(fillLight);

  const backLight = new THREE.DirectionalLight(0x9966ff, 0.3);
  backLight.position.set(-5, 3, -5);
  scene.add(backLight);

  const rimLight = new THREE.SpotLight(0x9966ff, 1.0, 30, Math.PI / 4, 0.5);
  rimLight.position.set(0, 5, -10);
  scene.add(rimLight);

  const centerLight = new THREE.PointLight(0xffaa66, 1.5, 25);
  centerLight.position.set(0, 2, 0);
  scene.add(centerLight);

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  return { scene, camera, renderer };
}
