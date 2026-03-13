import * as THREE from "three";

/**
 * PBR 材质系统 - 为塔罗牌提供金属度和粗糙度贴图
 * 实现烫金/镭射反光效果
 */

// 缓存材质和纹理
const textureCache = new Map();
const materialCache = new Map();

/**
 * 创建卡片的金属度贴图
 * 金色边框和装饰区域具有高金属度，其余区域金属度较低
 */
export function createMetalnessMap() {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 896; // 保持塔罗牌比例
  const ctx = canvas.getContext("2d");

  // 背景 - 低金属度 (暗色)
  ctx.fillStyle = "#1a1a1a";
  ctx.fillRect(0, 0, 512, 896);

  // 边框 - 高金属度 (亮色) - 烫金效果
  const borderWidth = 30;
  ctx.strokeStyle = "#e8d5a3"; // 高金属度值
  ctx.lineWidth = borderWidth;
  ctx.strokeRect(
    borderWidth / 2,
    borderWidth / 2,
    512 - borderWidth,
    896 - borderWidth,
  );

  // 内边框装饰
  ctx.strokeStyle = "#c9b896";
  ctx.lineWidth = 8;
  ctx.strokeRect(50, 50, 412, 796);

  // 角落装饰 - 高金属度
  const cornerSize = 60;
  ctx.fillStyle = "#e8d5a3";
  // 左上
  ctx.fillRect(20, 20, cornerSize, 15);
  ctx.fillRect(20, 20, 15, cornerSize);
  // 右上
  ctx.fillRect(512 - 20 - cornerSize, 20, cornerSize, 15);
  ctx.fillRect(512 - 20 - 15, 20, 15, cornerSize);
  // 左下
  ctx.fillRect(20, 896 - 20 - 15, cornerSize, 15);
  ctx.fillRect(20, 896 - 20 - cornerSize, 15, cornerSize);
  // 右下
  ctx.fillRect(512 - 20 - cornerSize, 896 - 20 - 15, cornerSize, 15);
  ctx.fillRect(512 - 20 - 15, 896 - 20 - cornerSize, 15, cornerSize);

  // 中心装饰图案 - 中等金属度
  ctx.fillStyle = "#8a7a5a";
  ctx.beginPath();
  ctx.arc(256, 448, 80, 0, Math.PI * 2);
  ctx.fill();

  // 顶部和底部装饰线
  ctx.fillStyle = "#b8a880";
  ctx.fillRect(100, 120, 312, 6);
  ctx.fillRect(100, 770, 312, 6);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.NoColorSpace;
  return texture;
}

/**
 * 创建卡片的粗糙度贴图
 * 金色区域较光滑（低粗糙度），其他区域较粗糙
 */
export function createRoughnessMap() {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 896;
  const ctx = canvas.getContext("2d");

  // 背景 - 高粗糙度 (亮色在粗糙度贴图中表示粗糙)
  ctx.fillStyle = "#aaaaaa";
  ctx.fillRect(0, 0, 512, 896);

  // 边框 - 低粗糙度 (光滑的烫金)
  const borderWidth = 30;
  ctx.strokeStyle = "#333333"; // 低粗糙度值
  ctx.lineWidth = borderWidth;
  ctx.strokeRect(
    borderWidth / 2,
    borderWidth / 2,
    512 - borderWidth,
    896 - borderWidth,
  );

  // 内边框
  ctx.strokeStyle = "#444444";
  ctx.lineWidth = 8;
  ctx.strokeRect(50, 50, 412, 796);

  // 角落装饰 - 光滑
  const cornerSize = 60;
  ctx.fillStyle = "#333333";
  ctx.fillRect(20, 20, cornerSize, 15);
  ctx.fillRect(20, 20, 15, cornerSize);
  ctx.fillRect(512 - 20 - cornerSize, 20, cornerSize, 15);
  ctx.fillRect(512 - 20 - 15, 20, 15, cornerSize);
  ctx.fillRect(20, 896 - 20 - 15, cornerSize, 15);
  ctx.fillRect(20, 896 - 20 - cornerSize, 15, cornerSize);
  ctx.fillRect(512 - 20 - cornerSize, 896 - 20 - 15, cornerSize, 15);
  ctx.fillRect(512 - 20 - 15, 896 - 20 - cornerSize, 15, cornerSize);

  // 中心装饰 - 中等光滑
  ctx.fillStyle = "#555555";
  ctx.beginPath();
  ctx.arc(256, 448, 80, 0, Math.PI * 2);
  ctx.fill();

  // 装饰线
  ctx.fillStyle = "#444444";
  ctx.fillRect(100, 120, 312, 6);
  ctx.fillRect(100, 770, 312, 6);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.NoColorSpace;
  return texture;
}

/**
 * 创建法线贴图 - 增加卡片表面的细微凹凸感
 */
export function createNormalMap() {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 896;
  const ctx = canvas.getContext("2d");

  // 基础法线颜色 (0.5, 0.5, 1.0) 表示平面
  ctx.fillStyle = "#8080ff";
  ctx.fillRect(0, 0, 512, 896);

  // 边框凸起效果
  const borderWidth = 30;
  ctx.strokeStyle = "#9090ff";
  ctx.lineWidth = borderWidth;
  ctx.strokeRect(
    borderWidth / 2,
    borderWidth / 2,
    512 - borderWidth,
    896 - borderWidth,
  );

  // 内边框
  ctx.strokeStyle = "#8585ff";
  ctx.lineWidth = 8;
  ctx.strokeRect(50, 50, 412, 796);

  // 添加细微噪点纹理模拟纸张质感
  const imageData = ctx.getImageData(0, 0, 512, 896);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    const noise = (Math.random() - 0.5) * 10;
    data[i] = Math.min(255, Math.max(0, data[i] + noise));
    data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise));
  }
  ctx.putImageData(imageData, 0, 0);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.NoColorSpace;
  return texture;
}

/**
 * 创建卡片背面纹理 - 带有烫金图案
 */
export function createBackTextureWithGold() {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 896;
  const ctx = canvas.getContext("2d");

  // 深蓝紫色背景
  const gradient = ctx.createLinearGradient(0, 0, 512, 896);
  gradient.addColorStop(0, "#0f0f23");
  gradient.addColorStop(0.5, "#1a1a3e");
  gradient.addColorStop(1, "#0f0f23");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 512, 896);

  // 烫金边框
  ctx.strokeStyle = "#d4af37";
  ctx.lineWidth = 6;
  ctx.strokeRect(20, 20, 472, 856);

  ctx.strokeStyle = "#b8941f";
  ctx.lineWidth = 2;
  ctx.strokeRect(35, 35, 442, 826);

  // 中心神秘符号
  ctx.save();
  ctx.translate(256, 448);

  // 外圈
  ctx.strokeStyle = "#d4af37";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(0, 0, 120, 0, Math.PI * 2);
  ctx.stroke();

  // 内圈
  ctx.beginPath();
  ctx.arc(0, 0, 100, 0, Math.PI * 2);
  ctx.stroke();

  // 六芒星
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const angle = (i * Math.PI) / 3;
    const x = Math.cos(angle) * 80;
    const y = Math.sin(angle) * 80;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.stroke();

  // 倒三角
  ctx.beginPath();
  for (let i = 0; i < 3; i++) {
    const angle = (i * Math.PI * 2) / 3 + Math.PI / 6;
    const x = Math.cos(angle) * 50;
    const y = Math.sin(angle) * 50;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.stroke();

  // 正三角
  ctx.beginPath();
  for (let i = 0; i < 3; i++) {
    const angle = (i * Math.PI * 2) / 3 - Math.PI / 2;
    const x = Math.cos(angle) * 50;
    const y = Math.sin(angle) * 50;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.stroke();

  // 中心点
  ctx.fillStyle = "#d4af37";
  ctx.beginPath();
  ctx.arc(0, 0, 15, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();

  // 角落装饰
  const drawCorner = (x, y, rotation) => {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.strokeStyle = "#d4af37";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, -30);
    ctx.lineTo(0, 0);
    ctx.lineTo(30, 0);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, 10, 0, Math.PI / 2);
    ctx.stroke();
    ctx.restore();
  };

  drawCorner(60, 60, 0);
  drawCorner(452, 60, Math.PI / 2);
  drawCorner(452, 836, Math.PI);
  drawCorner(60, 836, -Math.PI / 2);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

// 缓存纹理
let cachedMetalnessMap = null;
let cachedRoughnessMap = null;
let cachedNormalMap = null;
let cachedBackTexture = null;

/**
 * 获取或创建共享的 PBR 贴图
 */
export function getPBRMaps() {
  if (!cachedMetalnessMap) {
    cachedMetalnessMap = createMetalnessMap();
  }
  if (!cachedRoughnessMap) {
    cachedRoughnessMap = createRoughnessMap();
  }
  if (!cachedNormalMap) {
    cachedNormalMap = createNormalMap();
  }
  if (!cachedBackTexture) {
    cachedBackTexture = createBackTextureWithGold();
  }

  return {
    metalnessMap: cachedMetalnessMap,
    roughnessMap: cachedRoughnessMap,
    normalMap: cachedNormalMap,
    backTexture: cachedBackTexture,
  };
}

/**
 * 创建卡片正面的 PBR 材质
 * @param {THREE.Texture} frontTexture - 塔罗牌正面纹理
 */
export function createCardFrontMaterial(frontTexture) {
  const { metalnessMap, roughnessMap, normalMap } = getPBRMaps();

  return new THREE.MeshStandardMaterial({
    map: frontTexture,
    metalnessMap: metalnessMap,
    roughnessMap: roughnessMap,
    normalMap: normalMap,
    metalness: 1.0, // 最大金属度，由 metalnessMap 控制具体区域
    roughness: 1.0, // 最大粗糙度，由 roughnessMap 控制具体区域
    normalScale: new THREE.Vector2(0.3, 0.3),
    envMapIntensity: 1.5,
  });
}

/**
 * 创建卡片背面的 PBR 材质
 */
export function createCardBackMaterial() {
  const { metalnessMap, roughnessMap, normalMap, backTexture } = getPBRMaps();

  return new THREE.MeshStandardMaterial({
    map: backTexture,
    metalnessMap: metalnessMap,
    roughnessMap: roughnessMap,
    normalMap: normalMap,
    metalness: 0.9,
    roughness: 0.8,
    normalScale: new THREE.Vector2(0.3, 0.3),
    envMapIntensity: 1.2,
  });
}

/**
 * 创建卡片边缘材质
 */
export function createCardEdgeMaterial() {
  return new THREE.MeshStandardMaterial({
    color: 0x1a1a2e,
    metalness: 0.3,
    roughness: 0.9,
  });
}

/**
 * 创建环境贴图 - 用于 PBR 反射
 */
export function createEnvironmentMap() {
  // 创建一个简单的立方体环境贴图
  const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(256);
  cubeRenderTarget.texture.type = THREE.HalfFloatType;
  cubeRenderTarget.texture.mapping = THREE.CubeReflectionMapping;

  return cubeRenderTarget.texture;
}

/**
 * 更新材质的环境反射强度（用于动态镭射效果）
 * @param {THREE.Mesh} cardMesh - 卡片网格
 * @param {number} intensity - 反射强度 (0-2)
 * @param {number} metalness - 金属度 (0-1)
 */
export function updateMaterialReflection(
  cardMesh,
  intensity,
  metalness = null,
) {
  if (!cardMesh || !cardMesh.material) return;

  const materials = Array.isArray(cardMesh.material)
    ? cardMesh.material
    : [cardMesh.material];

  materials.forEach((material) => {
    if (material.envMapIntensity !== undefined) {
      material.envMapIntensity = intensity;
    }
    if (metalness !== null && material.metalness !== undefined) {
      material.metalness = metalness;
    }
    material.needsUpdate = true;
  });
}

/**
 * 创建动态镭射效果材质变体
 * 用于卡片翻转时的特殊反光效果
 */
export function createHolographicMaterial(baseMaterial) {
  const material = baseMaterial.clone();

  // 添加自定义着色器逻辑来实现镭射效果
  material.onBeforeCompile = (shader) => {
    shader.uniforms.uTime = { value: 0 };
    shader.uniforms.uHolographic = { value: 0 };

    shader.vertexShader = `
            varying vec3 vWorldPosition;
            varying vec3 vNormal;
            ${shader.vertexShader}
        `;

    shader.vertexShader = shader.vertexShader.replace(
      "#include <worldpos_vertex>",
      `
            #include <worldpos_vertex>
            vWorldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;
            vNormal = normalize(normalMatrix * normal);
            `,
    );

    shader.fragmentShader = `
            uniform float uTime;
            uniform float uHolographic;
            varying vec3 vWorldPosition;
            varying vec3 vNormal;
            ${shader.fragmentShader}
        `;

    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <dithering_fragment>",
      `
            #include <dithering_fragment>

            // 镭射效果计算
            if (uHolographic > 0.0) {
                vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
                float fresnel = 1.0 - abs(dot(viewDirection, vNormal));

                // 彩虹色偏移
                float hue = fract(fresnel * 2.0 - uTime * 0.5);
                vec3 holographicColor = vec3(
                    abs(sin(hue * 6.28318)),
                    abs(sin((hue + 0.33) * 6.28318)),
                    abs(sin((hue + 0.66) * 6.28318))
                );

                // 混合镭射效果
                float holographicIntensity = pow(fresnel, 2.0) * uHolographic * 0.5;
                gl_FragColor.rgb = mix(gl_FragColor.rgb, holographicColor, holographicIntensity);
            }
            `,
    );

    material.userData.shader = shader;
  };

  return material;
}

/**
 * 更新镭射效果时间
 */
export function updateHolographicEffect(cardMesh, time, intensity) {
  if (!cardMesh || !cardMesh.material) return;

  const materials = Array.isArray(cardMesh.material)
    ? cardMesh.material
    : [cardMesh.material];

  materials.forEach((material) => {
    if (material.userData && material.userData.shader) {
      material.userData.shader.uniforms.uTime.value = time;
      material.userData.shader.uniforms.uHolographic.value = intensity;
    }
  });
}
