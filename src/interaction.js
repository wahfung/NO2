import * as THREE from 'three';
import gsap from 'gsap';
import { handState } from './vision.js';

let drawnCard = null;
let rotationVelocity = 0;
const FRICTION = 0.95;
const ROTATION_SENSITIVITY = 0.005;

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

let time = 0;

export function updateInteraction(scene, camera, cardGroup) {
    time += 0.016;

    if (handState.isPresent) {
        rotationVelocity += handState.velocity * ROTATION_SENSITIVITY;
    }

    rotationVelocity *= FRICTION;
    cardGroup.rotation.y += rotationVelocity;

    updateDynamicLights(scene, time);

    if (drawnCard) {
        updateCardHolographicEffect(drawnCard, time);
    }

    mouse.x = handState.cursor.x;
    mouse.y = handState.cursor.y;
    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(cardGroup.children, false);

    cardGroup.children.forEach(card => {
        if (card !== drawnCard) {
            gsap.to(card.scale, { x: 1, y: 1, z: 1, duration: 0.3 });
        }
    });

    let targetCard = null;
    if (intersects.length > 0) {
        targetCard = intersects[0].object;
        if (targetCard !== drawnCard) {
            gsap.to(targetCard.scale, { x: 1.2, y: 1.2, z: 1.2, duration: 0.3 });
        }
    }

    const cursorVisual = document.getElementById('cursor-visual');
    if (cursorVisual) {
        if (handState.isPresent) {
            cursorVisual.style.opacity = '1';
            const px = (handState.cursor.x + 1) / 2 * window.innerWidth;
            const py = (-handState.cursor.y + 1) / 2 * window.innerHeight;
            cursorVisual.style.left = `${px}px`;
            cursorVisual.style.top = `${py}px`;
            cursorVisual.style.transform = `translate(-50%, -50%)`;
            cursorVisual.style.backgroundColor = handState.isPinching ? 'red' : 'gold';
        } else {
            cursorVisual.style.opacity = '0';
        }
    }

    if (handState.isPinching && targetCard && !drawnCard) {
        drawCard(targetCard, scene);
    } else if (!handState.isPinching && drawnCard) {
        returnCard();
    }
}

function updateDynamicLights(scene, time) {
    const light1 = scene.getObjectByName('dynamicLight1');
    const light2 = scene.getObjectByName('dynamicLight2');
    
    if (light1) {
        light1.position.x = Math.sin(time * 0.5) * 8;
        light1.position.z = Math.cos(time * 0.5) * 8 - 5;
        light1.intensity = 1.5 + Math.sin(time * 2) * 0.5;
    }
    
    if (light2) {
        light2.position.x = Math.sin(time * 0.5 + Math.PI) * 8;
        light2.position.z = Math.cos(time * 0.5 + Math.PI) * 8 - 5;
        light2.intensity = 1.5 + Math.cos(time * 2) * 0.5;
    }
}

function updateCardHolographicEffect(card, time) {
    if (card.material && Array.isArray(card.material)) {
        const frontMaterial = card.material[5];
        if (frontMaterial && frontMaterial.iridescence !== undefined) {
            frontMaterial.iridescence = 0.3 + Math.sin(time * 3) * 0.2;
            frontMaterial.iridescenceThicknessRange = [
                100 + Math.sin(time * 2) * 50,
                400 + Math.cos(time * 2) * 100
            ];
        }
    }
}

function drawCard(card, scene) {
    if (card.userData.isAnimating) return;
    drawnCard = card;
    card.userData.isAnimating = true;

    card.parent.remove(card);
    window.sceneInstance.attach(card);

    gsap.to(card.position, {
        x: 0,
        y: 0,
        z: -10,
        duration: 1,
        ease: "power2.out"
    });

    gsap.to(card.rotation, {
        x: 0,
        y: Math.PI,
        z: 0,
        duration: 1
    });

    animateCardGlow(card, true);
}

function returnCard() {
    if (!drawnCard) return;
    const card = drawnCard;

    window.cardGroupInstance.attach(card);

    gsap.to(card.position, {
        x: card.userData.originalPos.x,
        y: card.userData.originalPos.y,
        z: card.userData.originalPos.z,
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
            card.userData.isAnimating = false;
            drawnCard = null;
            animateCardGlow(card, false);
        }
    });

    gsap.to(card.rotation, {
        x: card.userData.originalRot.x,
        y: card.userData.originalRot.y,
        z: card.userData.originalRot.z,
        duration: 1
    });

    drawnCard = null;
}

function animateCardGlow(card, isDrawn) {
    if (card.material && Array.isArray(card.material)) {
        const frontMaterial = card.material[5];
        const backMaterial = card.material[4];
        
        if (frontMaterial) {
            gsap.to(frontMaterial, {
                envMapIntensity: isDrawn ? 3.5 : 2.0,
                duration: 0.5
            });
            
            if (frontMaterial.iridescence !== undefined) {
                gsap.to(frontMaterial, {
                    iridescence: isDrawn ? 0.6 : 0.3,
                    duration: 0.5
                });
            }
        }
        
        if (backMaterial) {
            gsap.to(backMaterial, {
                envMapIntensity: isDrawn ? 2.5 : 1.5,
                duration: 0.5
            });
        }
    }
}
