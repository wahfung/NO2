import * as THREE from "three";

export function setupScene() {
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x050515, 0.01);

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
  document.getElementById("app").appendChild(renderer.domElement);

  const ambientLight = new THREE.AmbientLight(0x222244, 0.8);
  scene.add(ambientLight);

  const hemisphereLight = new THREE.HemisphereLight(0x88aaff, 0x221133, 0.6);
  scene.add(hemisphereLight);

  const fillLight = new THREE.PointLight(0x6688ff, 1.2, 100);
  fillLight.position.set(0, 15, 0);
  scene.add(fillLight);

  // Resize handler
  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  return { scene, camera, renderer };
}
