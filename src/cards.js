import * as THREE from 'three';
import { tarotDeck, getCardTextureUrl } from './tarot-data.js';

const CARD_WIDTH = 2;
const CARD_HEIGHT = 3.5;
const RADIUS = 18; // Adjust based on spacing needs

export function createCardRing(scene) {
    const group = new THREE.Group();
    scene.add(group);

    const textureLoader = new THREE.TextureLoader();
    const cardGeometry = new THREE.PlaneGeometry(CARD_WIDTH, CARD_HEIGHT);

    // Placeholder back texture (Dark Gold Pattern)
    const backCanvas = document.createElement('canvas');
    backCanvas.width = 256;
    backCanvas.height = 512;
    const ctx = backCanvas.getContext('2d');
    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, 256, 512);
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 5;
    ctx.strokeRect(10, 10, 236, 492);
    ctx.font = "40px serif";
    ctx.fillStyle = "#d4af37";
    ctx.fillText("✡", 110, 256);

    const backTexture = new THREE.CanvasTexture(backCanvas);

    tarotDeck.forEach((cardData, index) => {
        const angle = (index / tarotDeck.length) * Math.PI * 2;

        // Create Mesh
        // Material 0: Front, 1: Back? PlaneGeometry is 1-sided by default?
        // We need double sided or two planes. 
        // Simplest: BoxGeometry with very thin depth, or 2 planes.
        // Let's use BoxGeometry for thickness (cards are objects).
        const geometry = new THREE.BoxGeometry(CARD_WIDTH, CARD_HEIGHT, 0.02);

        // Load Front Texture
        // Optimize: Lazy load? Or load all? 78 is valid for modern GPU.
        // Ensure we handle loading.
        const frontTexture = textureLoader.load(getCardTextureUrl(cardData.img));
        frontTexture.colorSpace = THREE.SRGBColorSpace;

        const materials = [
            new THREE.MeshStandardMaterial({ color: 0x222222 }), // right
            new THREE.MeshStandardMaterial({ color: 0x222222 }), // left
            new THREE.MeshStandardMaterial({ color: 0x222222 }), // top
            new THREE.MeshStandardMaterial({ color: 0x222222 }), // bottom
            new THREE.MeshStandardMaterial({ map: backTexture }),  // 4: front (+Z) -> Shows Back Pattern in Ring
            new THREE.MeshStandardMaterial({ map: frontTexture }), // 5: back (-Z) -> Shows Tarot Image when Flipped
        ];

        const cardMesh = new THREE.Mesh(geometry, materials);

        // Position
        const x = Math.sin(angle) * RADIUS;
        const z = Math.cos(angle) * RADIUS;

        cardMesh.position.set(x, 0, z);

        // Rotation: Look at center
        // Math.atan2(x, z) gives the angle.
        // Or just lookAt(0,0,0) and then flip if needed.
        cardMesh.lookAt(0, 0, 0);

        // Store data in userdata for raycasting
        cardMesh.userData = {
            id: index,
            name: cardData.name,
            originalPos: new THREE.Vector3(x, 0, z),
            originalRot: cardMesh.rotation.clone(),
            isDrawn: false
        };

        group.add(cardMesh);
    });

    return group;
}
