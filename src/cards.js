import * as THREE from 'three';
import { tarotDeck, getCardTextureUrl } from './tarot-data.js';

const CARD_WIDTH = 2;
const CARD_HEIGHT = 3.5;
const RADIUS = 18;

export function createCardRing(scene) {
    const group = new THREE.Group();
    scene.add(group);

    const textureLoader = new THREE.TextureLoader();
    const cardGeometry = new THREE.PlaneGeometry(CARD_WIDTH, CARD_HEIGHT);

    const backCanvas = document.createElement('canvas');
    backCanvas.width = 512;
    backCanvas.height = 1024;
    const ctx = backCanvas.getContext('2d');
    
    const gradient = ctx.createRadialGradient(256, 512, 0, 256, 512, 512);
    gradient.addColorStop(0, '#2a2a4e');
    gradient.addColorStop(1, '#1a1a2e');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 512, 1024);
    
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 8;
    ctx.strokeRect(20, 20, 472, 984);
    
    ctx.font = "80px serif";
    ctx.fillStyle = "#d4af37";
    ctx.textAlign = "center";
    ctx.fillText("✡", 256, 512);
    
    const decorPattern = createDecorativePattern(ctx, 512, 1024);

    const backTexture = new THREE.CanvasTexture(backCanvas);
    const backMetalnessMap = createBackMetalnessMap();

    tarotDeck.forEach((cardData, index) => {
        const angle = (index / tarotDeck.length) * Math.PI * 2;

        const geometry = new THREE.BoxGeometry(CARD_WIDTH, CARD_HEIGHT, 0.02);

        const frontTexture = textureLoader.load(getCardTextureUrl(cardData.img));
        frontTexture.colorSpace = THREE.SRGBColorSpace;

        const frontMetalnessMap = createFrontMetalnessMap(cardData.type, cardData.val);
        const frontRoughnessMap = createFrontRoughnessMap();

        const edgeMaterial = new THREE.MeshPhysicalMaterial({
            color: 0x1a1a1a,
            metalness: 0.9,
            roughness: 0.3,
            clearcoat: 0.5,
            clearcoatRoughness: 0.2,
        });

        const backMaterial = new THREE.MeshPhysicalMaterial({
            map: backTexture,
            metalnessMap: backMetalnessMap,
            metalness: 0.8,
            roughness: 0.25,
            clearcoat: 0.8,
            clearcoatRoughness: 0.1,
            envMapIntensity: 1.5,
        });

        const frontMaterial = new THREE.MeshPhysicalMaterial({
            map: frontTexture,
            metalnessMap: frontMetalnessMap,
            metalness: 0.6,
            roughnessMap: frontRoughnessMap,
            roughness: 0.4,
            clearcoat: 0.6,
            clearcoatRoughness: 0.15,
            envMapIntensity: 2.0,
            iridescence: 0.3,
            iridescenceIOR: 1.3,
            iridescenceThicknessRange: [100, 400],
        });

        const materials = [
            edgeMaterial,
            edgeMaterial,
            edgeMaterial,
            edgeMaterial,
            backMaterial,
            frontMaterial,
        ];

        const cardMesh = new THREE.Mesh(geometry, materials);

        const x = Math.sin(angle) * RADIUS;
        const z = Math.cos(angle) * RADIUS;

        cardMesh.position.set(x, 0, z);

        cardMesh.lookAt(0, 0, 0);

        cardMesh.userData = {
            id: index,
            name: cardData.name,
            type: cardData.type,
            val: cardData.val,
            originalPos: new THREE.Vector3(x, 0, z),
            originalRot: cardMesh.rotation.clone(),
            isDrawn: false,
            holographicPhase: Math.random() * Math.PI * 2,
        };

        group.add(cardMesh);
    });

    return group;
}

function createFrontMetalnessMap(type, val) {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 448;
    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, 256, 448);
    
    ctx.fillStyle = '#ffffff';
    
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 4;
    ctx.strokeRect(10, 10, 236, 428);
    
    const cornerSize = 20;
    ctx.fillRect(10, 10, cornerSize, 4);
    ctx.fillRect(10, 10, 4, cornerSize);
    ctx.fillRect(246 - cornerSize, 10, cornerSize, 4);
    ctx.fillRect(242, 10, 4, cornerSize);
    ctx.fillRect(10, 434, cornerSize, 4);
    ctx.fillRect(10, 434 - cornerSize, 4, cornerSize);
    ctx.fillRect(246 - cornerSize, 434, cornerSize, 4);
    ctx.fillRect(242, 434 - cornerSize, 4, cornerSize);
    
    if (type === 'major') {
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(128, 224, 60, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 3;
        for (let i = 0; i < 8; i++) {
            const angle = (i / 8) * Math.PI * 2;
            const x1 = 128 + Math.cos(angle) * 70;
            const y1 = 224 + Math.sin(angle) * 70;
            const x2 = 128 + Math.cos(angle) * 100;
            const y2 = 224 + Math.sin(angle) * 100;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
        }
        
        ctx.font = 'bold 24px serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#ffffff';
        const romanNumerals = ['0', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX', 'XXI'];
        if (romanNumerals[val]) {
            ctx.fillText(romanNumerals[val], 128, 420);
        }
    } else {
        ctx.fillStyle = '#cccccc';
        const patternIntensity = (val / 14) * 0.5 + 0.3;
        ctx.globalAlpha = patternIntensity;
        
        for (let i = 0; i < val; i++) {
            const row = Math.floor(i / 4);
            const col = i % 4;
            const x = 40 + col * 50;
            const y = 100 + row * 60;
            
            ctx.beginPath();
            ctx.arc(x, y, 15, 0, Math.PI * 2);
            ctx.fill();
        }
        
        ctx.globalAlpha = 1;
    }
    
    addHolographicStripes(ctx, 256, 448);
    
    const texture = new THREE.CanvasTexture(canvas);
    return texture;
}

function createFrontRoughnessMap() {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 448;
    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = '#888888';
    ctx.fillRect(0, 0, 256, 448);
    
    ctx.fillStyle = '#444444';
    ctx.strokeStyle = '#444444';
    ctx.lineWidth = 4;
    ctx.strokeRect(10, 10, 236, 428);
    
    const texture = new THREE.CanvasTexture(canvas);
    return texture;
}

function createBackMetalnessMap() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, 512, 1024);
    
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 8;
    ctx.strokeRect(20, 20, 472, 984);
    
    ctx.fillStyle = '#ffffff';
    ctx.font = "80px serif";
    ctx.textAlign = "center";
    ctx.fillText("✡", 256, 512);
    
    for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2;
        const x1 = 256 + Math.cos(angle) * 150;
        const y1 = 512 + Math.sin(angle) * 150;
        const x2 = 256 + Math.cos(angle) * 200;
        const y2 = 512 + Math.sin(angle) * 200;
        
        ctx.strokeStyle = '#aaaaaa';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    return texture;
}

function createDecorativePattern(ctx, width, height) {
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.3)';
    ctx.lineWidth = 1;
    
    for (let i = 0; i < 20; i++) {
        const y = (i / 20) * height;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
    }
}

function addHolographicStripes(ctx, width, height) {
    ctx.globalAlpha = 0.15;
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    
    for (let i = 0; i < 20; i++) {
        const y = (i / 20) * height;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y + 20);
        ctx.stroke();
    }
    
    ctx.globalAlpha = 1;
}
