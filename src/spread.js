import * as THREE from 'three';
import gsap from 'gsap';

export const SPREAD_TYPES = {
    THREE_CARD: 'three_card',
    CELTIC_CROSS: 'celtic_cross',
    HORSESHOE: 'horseshoe'
};

const spreadLayouts = {
    [SPREAD_TYPES.THREE_CARD]: [
        { x: -4, y: 0, z: -12, label: '过去' },
        { x: 0, y: 0, z: -12, label: '现在' },
        { x: 4, y: 0, z: -12, label: '未来' }
    ],
    [SPREAD_TYPES.CELTIC_CROSS]: [
        { x: -2, y: 0, z: -10, label: '现状' },
        { x: -2, y: 0, z: -10, rotationZ: Math.PI / 2, label: '挑战' },
        { x: -6, y: 0, z: -10, label: '基础' },
        { x: 2, y: 0, z: -10, label: '近期过去' },
        { x: -2, y: 4, z: -10, label: '可能结果' },
        { x: -2, y: -4, z: -10, label: '近期未来' },
        { x: 6, y: 4, z: -10, label: '你的态度' },
        { x: 6, y: 1.5, z: -10, label: '外部环境' },
        { x: 6, y: -1.5, z: -10, label: '希望与恐惧' },
        { x: 6, y: -4, z: -10, label: '最终结果' }
    ],
    [SPREAD_TYPES.HORSESHOE]: [
        { x: -8, y: -3, z: -10, label: '过去' },
        { x: -5, y: -3, z: -10, label: '现在' },
        { x: -2, y: -3, z: -10, label: '未来' },
        { x: 1, y: -3, z: -10, label: '最佳行动' },
        { x: 4, y: -3, z: -10, label: '周围环境' },
        { x: 7, y: -3, z: -10, label: '希望与恐惧' },
        { x: 10, y: -3, z: -10, label: '结果' }
    ]
};

export class SpreadManager {
    constructor(scene, cardGroup) {
        this.scene = scene;
        this.cardGroup = cardGroup;
        this.currentSpread = null;
        this.spreadCards = [];
        this.connectionLines = [];
        this.isAnimating = false;
        this.lineGroup = new THREE.Group();
        this.scene.add(this.lineGroup);
        this.labelElements = [];
    }

    shuffleAndDeal(spreadType, count = null) {
        if (this.isAnimating) return;
        this.isAnimating = true;

        const layout = spreadLayouts[spreadType];
        const cardCount = count || layout.length;

        this.clearSpread();

        const allCards = [...this.cardGroup.children];
        const shuffled = allCards.sort(() => Math.random() - 0.5);
        const selectedCards = shuffled.slice(0, cardCount);

        this.animateShuffle(selectedCards, layout, spreadType);
    }

    animateShuffle(cards, layout, spreadType) {
        const tl = gsap.timeline({
            onComplete: () => {
                this.animateDeal(cards, layout, spreadType);
            }
        });

        cards.forEach((card, i) => {
            this.scene.attach(card);
            
            const angle = (i / cards.length) * Math.PI * 2;
            const radius = 15 + Math.random() * 5;
            const height = (Math.random() - 0.5) * 10;
            
            tl.to(card.position, {
                x: Math.cos(angle) * radius,
                y: height,
                z: Math.sin(angle) * radius,
                duration: 0.8,
                ease: "power2.out"
            }, i * 0.02);

            tl.to(card.rotation, {
                x: Math.random() * Math.PI * 2,
                y: Math.random() * Math.PI * 2,
                z: Math.random() * Math.PI * 2,
                duration: 0.8,
                ease: "power2.out"
            }, i * 0.02);
        });

        tl.to({}, { duration: 0.5 });

        cards.forEach((card, i) => {
            const spiralAngle = (i / cards.length) * Math.PI * 4;
            const spiralRadius = 8 - (i / cards.length) * 4;
            
            tl.to(card.position, {
                x: Math.cos(spiralAngle) * spiralRadius,
                y: 3 + Math.sin(spiralAngle * 2) * 2,
                z: Math.sin(spiralAngle) * spiralRadius - 5,
                duration: 1.2,
                ease: "power1.inOut"
            }, 0.8 + i * 0.03);

            tl.to(card.rotation, {
                x: 0,
                y: Math.PI,
                z: 0,
                duration: 1.2,
                ease: "power1.inOut"
            }, 0.8 + i * 0.03);
        });
    }

    animateDeal(cards, layout, spreadType) {
        const tl = gsap.timeline({
            onComplete: () => {
                this.isAnimating = false;
                this.currentSpread = spreadType;
                this.createConnectionLines(cards, spreadType);
                this.showSpreadLabels(layout);
            }
        });

        cards.forEach((card, i) => {
            if (i < layout.length) {
                const pos = layout[i];
                
                tl.to(card.position, {
                    x: pos.x,
                    y: pos.y,
                    z: pos.z,
                    duration: 0.6,
                    ease: "back.out(1.7)"
                }, i * 0.15);

                tl.to(card.rotation, {
                    x: 0,
                    y: Math.PI,
                    z: pos.rotationZ || 0,
                    duration: 0.6,
                    ease: "power2.out"
                }, i * 0.15);

                card.userData.spreadIndex = i;
                card.userData.spreadLabel = pos.label;
            }
        });

        this.spreadCards = cards.slice(0, layout.length);
    }

    createConnectionLines(cards, spreadType) {
        this.clearConnectionLines();

        if (spreadType === SPREAD_TYPES.CELTIC_CROSS) {
            this.createDashedLine(cards[0].position, cards[1].position);
            this.createDashedLine(cards[0].position, cards[2].position);
            this.createDashedLine(cards[0].position, cards[3].position);
            this.createDashedLine(cards[0].position, cards[4].position);
            this.createDashedLine(cards[0].position, cards[5].position);
            
            for (let i = 6; i < cards.length - 1; i++) {
                this.createDashedLine(cards[i].position, cards[i + 1].position);
            }
        } else if (spreadType === SPREAD_TYPES.THREE_CARD) {
            this.createDashedLine(cards[0].position, cards[1].position);
            this.createDashedLine(cards[1].position, cards[2].position);
        } else if (spreadType === SPREAD_TYPES.HORSESHOE) {
            for (let i = 0; i < cards.length - 1; i++) {
                this.createDashedLine(cards[i].position, cards[i + 1].position);
            }
        }
    }

    createDashedLine(start, end) {
        const points = [];
        const segments = 50;
        
        for (let i = 0; i <= segments; i++) {
            const t = i / segments;
            const x = start.x + (end.x - start.x) * t;
            const y = start.y + (end.y - start.y) * t + Math.sin(t * Math.PI) * 0.3;
            const z = start.z + (end.z - start.z) * t;
            points.push(new THREE.Vector3(x, y, z));
        }

        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        
        const material = new THREE.LineDashedMaterial({
            color: 0xd4af37,
            dashSize: 0.3,
            gapSize: 0.15,
            transparent: true,
            opacity: 0.6
        });

        const line = new THREE.Line(geometry, material);
        line.computeLineDistances();
        line.userData.isGlowing = true;
        
        this.lineGroup.add(line);
        this.connectionLines.push(line);

        this.addGlowEffect(line, points);
    }

    addGlowEffect(line, points) {
        const glowMaterial = new THREE.LineBasicMaterial({
            color: 0xffd700,
            transparent: true,
            opacity: 0.3,
            linewidth: 2
        });

        const glowGeometry = new THREE.BufferGeometry().setFromPoints(points);
        const glowLine = new THREE.Line(glowGeometry, glowMaterial);
        glowLine.position.copy(line.position);
        
        this.lineGroup.add(glowLine);
        this.connectionLines.push(glowLine);

        gsap.to(glowMaterial, {
            opacity: 0.1,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }

    showSpreadLabels(layout) {
        this.clearLabels();

        layout.forEach((pos, i) => {
            const label = document.createElement('div');
            label.className = 'spread-label';
            label.textContent = pos.label;
            label.style.cssText = `
                position: absolute;
                color: #d4af37;
                font-size: 14px;
                text-shadow: 0 0 10px rgba(212, 175, 55, 0.8);
                pointer-events: none;
                opacity: 0;
                transition: opacity 0.5s;
                white-space: nowrap;
                z-index: 100;
            `;
            document.body.appendChild(label);

            setTimeout(() => {
                label.style.opacity = '1';
            }, i * 100 + 500);

            this.labelElements.push({ element: label, position: pos });
            this.updateLabelPosition(label, pos);
        });
    }

    updateLabelPosition(label, pos) {
        const update = () => {
            if (!this.currentSpread) return;
            
            const vector = new THREE.Vector3(pos.x, pos.y - 2.5, pos.z);
            vector.project(window.cameraInstance);
            
            const x = (vector.x * 0.5 + 0.5) * window.innerWidth;
            const y = (-vector.y * 0.5 + 0.5) * window.innerHeight;
            
            label.style.left = `${x}px`;
            label.style.top = `${y}px`;
            label.style.transform = 'translate(-50%, -50%)';
            
            requestAnimationFrame(update);
        };
        update();
    }

    clearLabels() {
        this.labelElements.forEach(item => {
            item.element.remove();
        });
        this.labelElements = [];
    }

    clearConnectionLines() {
        this.connectionLines.forEach(line => {
            gsap.killTweensOf(line.material);
            this.lineGroup.remove(line);
            if (line.geometry) line.geometry.dispose();
            if (line.material) line.material.dispose();
        });
        this.connectionLines = [];
    }

    clearSpread() {
        this.clearConnectionLines();
        this.clearLabels();

        this.spreadCards.forEach(card => {
            this.cardGroup.attach(card);
            gsap.to(card.position, {
                x: card.userData.originalPos.x,
                y: card.userData.originalPos.y,
                z: card.userData.originalPos.z,
                duration: 0.8,
                ease: "power2.out"
            });
            gsap.to(card.rotation, {
                x: card.userData.originalRot.x,
                y: card.userData.originalRot.y,
                z: card.userData.originalRot.z,
                duration: 0.8
            });
            gsap.to(card.scale, {
                x: 1,
                y: 1,
                z: 1,
                duration: 0.8
            });
            delete card.userData.spreadIndex;
            delete card.userData.spreadLabel;
        });

        this.spreadCards = [];
        this.currentSpread = null;
    }

    returnToRing() {
        if (this.isAnimating) return;
        this.clearSpread();
    }
}
