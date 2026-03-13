import * as THREE from "three";

function createPMREMEnvironment(renderer) {
  const pmremGenerator = new THREE.PMREMGenerator(renderer);
  pmremGenerator.compileEquirectangularShader();

  const envScene = new THREE.Scene();
  const envCamera = new THREE.PerspectiveCamera(90, 1, 0.1, 1000);

  const ambient = new THREE.AmbientLight(0x202040, 3);
  envScene.add(ambient);

  const positions = [
    [50, 20, 50],
    [-50, 20, 50],
    [50, 20, -50],
    [-50, 20, -50],
    [0, 50, 0],
    [0, -50, 0],
  ];
  const colors = [0xffffff, 0xffffff, 0xffeedd, 0xddffff, 0xffffee, 0xeeeeff];

  positions.forEach((pos, i) => {
    const light = new THREE.PointLight(colors[i], 3, 200);
    light.position.set(pos[0], pos[1], pos[2]);
    envScene.add(light);
  });

  const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(256, {
    format: THREE.RGBAFormat,
    generateMipmaps: true,
    minFilter: THREE.LinearMipmapLinearFilter,
  });

  const cubeCamera = new THREE.CubeCamera(0.1, 1000, cubeRenderTarget);
  cubeCamera.update(renderer, envScene);

  const envMap = pmremGenerator.fromCubemap(cubeRenderTarget.texture).texture;
  pmremGenerator.dispose();

  return envMap;
}

export function setupScene() {
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x050510, 0.02);

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
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 2.5;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  document.getElementById("app").appendChild(renderer.domElement);

  const ambientLight = new THREE.AmbientLight(0x606080, 0.8);
  scene.add(ambientLight);

  const mainLight = new THREE.PointLight(0xffffff, 5, 150);
  mainLight.position.set(0, 8, 10);
  scene.add(mainLight);

  const warmLight = new THREE.PointLight(0xffaa55, 3, 80);
  warmLight.position.set(20, 5, -20);
  scene.add(warmLight);

  const coolLight = new THREE.PointLight(0x55aaff, 2, 80);
  coolLight.position.set(-20, 5, -20);
  scene.add(coolLight);

  const topLight = new THREE.PointLight(0xffdd88, 1, 60);
  topLight.position.set(0, 15, 0);
  scene.add(topLight);

  setTimeout(() => {
    const envMap = createPMREMEnvironment(renderer);
    scene.environment = envMap;
  }, 100);

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  return { scene, camera, renderer, mainLight, warmLight, coolLight };
}
