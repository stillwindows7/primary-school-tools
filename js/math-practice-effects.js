/**
 * math-practice-effects.js
 * 口算练习工具 - 粒子特效模块
 * 负责各种视觉特效，包括粒子系统、爆炸特效等
 */

// 创建命名空间
window.MathPractice = window.MathPractice || {};

// ==================== 粒子类 ====================

/**
 * 粒子类 - 支持物理模拟
 */
class Particle {
    constructor(options) {
        this.x = options.x || 50;
        this.y = options.y || 50;
        this.vx = options.vx || 0;
        this.vy = options.vy || 0;
        this.gravity = options.gravity || 0.5;
        this.friction = options.friction || 0.98;
        this.alpha = options.alpha || 1;
        this.scale = options.scale || 1;
        this.rotation = options.rotation || 0;
        this.rotationSpeed = options.rotationSpeed || 0;
        this.color = options.color || '#FFD700';
        this.size = options.size || 10;
        this.shape = options.shape || 'circle';
        this.element = null;
    }

    create() {
        this.element = document.createElement('div');
        this.updateStyle();
        return this.element;
    }

    updateStyle() {
        if (!this.element) return;
        const borderRadius = this.shape === 'circle' ? '50%' : '0';
        this.element.style.cssText = `
            position: fixed;
            left: ${this.x}%;
            top: ${this.y}%;
            width: ${this.size}px;
            height: ${this.size}px;
            background: ${this.color};
            border-radius: ${borderRadius};
            opacity: ${this.alpha};
            transform: translate(-50%, -50%) rotate(${this.rotation}deg) scale(${this.scale});
            pointer-events: none;
            box-shadow: 0 0 ${this.size/2}px ${this.color};
            z-index: 10000;
        `;
    }

    update() {
        this.vx *= this.friction;
        this.vy *= this.friction;
        this.vy += this.gravity;
        this.x += this.vx;
        this.y += this.vy;
        this.rotation += this.rotationSpeed;
        this.alpha -= 0.008;
        this.scale *= 0.99;
        this.updateStyle();
    }

    isDead() {
        return this.alpha <= 0 || this.scale < 0.1;
    }
}

// ==================== 特效函数 ====================

/**
 * 超级大爆炸特效
 */
function createMegaExplosion() {
    const container = document.createElement('div');
    container.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999;';
    document.body.appendChild(container);

    const centerX = 50;
    const centerY = 45;
    const particles = [];
    const colors = ['#FF6B6B', '#FFD93D', '#7ED321', '#4A90D9', '#FFC107', '#FF69B4', '#00E5FF'];

    // 闪光
    const flash = document.createElement('div');
    flash.style.cssText = `
        position: fixed;
        top: 0; left: 0; width: 100%; height: 100%;
        background: white;
        opacity: 0.8;
        pointer-events: none;
        z-index: 10001;
        transition: opacity 0.3s ease-out;
    `;
    document.body.appendChild(flash);
    setTimeout(() => { flash.style.opacity = '0'; }, 50);
    setTimeout(() => { flash.remove(); }, 350);

    // 第一层：核心爆发 (15个粒子, 超快)
    for (let i = 0; i < 15; i++) {
        const angle = (i / 15) * Math.PI * 2;
        const speed = 8 + Math.random() * 4;
        particles.push(new Particle({
            x: centerX, y: centerY,
            vx: Math.cos(angle) * speed * 3,
            vy: Math.sin(angle) * speed * 3,
            gravity: 0.2, friction: 0.95,
            size: 8 + Math.random() * 6,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotationSpeed: (Math.random() - 0.5) * 30
        }));
    }

    // 第二层：中型粒子 (30个, 中速)
    for (let i = 0; i < 30; i++) {
        const angle = (i / 30) * Math.PI * 2 + Math.random() * 0.3;
        const speed = 4 + Math.random() * 3;
        particles.push(new Particle({
            x: centerX, y: centerY,
            vx: Math.cos(angle) * speed * 2,
            vy: Math.sin(angle) * speed * 2,
            gravity: 0.3, friction: 0.97,
            size: 12 + Math.random() * 8,
            color: colors[Math.floor(Math.random() * colors.length)],
            shape: Math.random() > 0.5 ? 'circle' : 'square',
            rotationSpeed: (Math.random() - 0.5) * 20
        }));
    }

    // 第三层：大型粒子 (50个, 慢速+重力)
    for (let i = 0; i < 50; i++) {
        const angle = (i / 50) * Math.PI * 2 + Math.random() * 0.5;
        const speed = 2 + Math.random() * 2;
        particles.push(new Particle({
            x: centerX, y: centerY,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed - 2,
            gravity: 0.4, friction: 0.98,
            size: 15 + Math.random() * 10,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotationSpeed: (Math.random() - 0.5) * 15
        }));
    }

    // 第四层：持续飘落的星星 (30个, 延迟)
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const star = document.createElement('div');
            star.textContent = '⭐';
            star.style.cssText = `
                position: fixed;
                left: ${20 + Math.random() * 60}%;
                top: -50px;
                font-size: ${20 + Math.random() * 25}px;
                opacity: 1;
                transform: rotate(${Math.random() * 360}deg);
                pointer-events: none;
                z-index: 10000;
                transition: all 2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            `;
            container.appendChild(star);

            requestAnimationFrame(() => {
                star.style.top = '110%';
                star.style.opacity = '0';
                star.style.transform = `rotate(${Math.random() * 720}deg) translateX(${(Math.random() - 0.5) * 100}px)`;
            });

            setTimeout(() => star.remove(), 2000);
        }, i * 40 + 300);
    }

    // 弹出文字 "太棒了！"
    setTimeout(() => {
        const text = document.createElement('div');
        const messages = ['太棒了！', '真厉害！', '好样的！', '完美！', '你真棒！'];
        text.textContent = messages[Math.floor(Math.random() * messages.length)];
        text.style.cssText = `
            position: fixed;
            left: 50%; top: 40%;
            transform: translate(-50%, -50%) scale(0);
            font-size: 3em;
            font-weight: bold;
            color: #FFD700;
            text-shadow: 0 0 20px rgba(255, 215, 0, 0.8),
                         3px 3px 0 rgba(0, 0, 0, 0.3);
            pointer-events: none;
            z-index: 10002;
            animation: textPop 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        `;
        document.body.appendChild(text);
        setTimeout(() => {
            text.style.transition = 'all 0.5s ease-out';
            text.style.transform = 'translate(-50%, -50%) scale(1.2)';
            text.style.opacity = '0';
        }, 1200);
        setTimeout(() => text.remove(), 1700);
    }, 200);

    // 粒子动画循环
    const animate = () => {
        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            if (!p.element) {
                p.element = p.create();
                container.appendChild(p.element);
            }
            p.update();
            if (p.isDead()) {
                if (p.element) p.element.remove();
                particles.splice(i, 1);
            }
        }
        if (particles.length > 0) {
            requestAnimationFrame(animate);
        } else {
            container.remove();
        }
    };
    setTimeout(animate, 100);
}

/**
 * 彩虹螺旋特效
 */
function createRainbowSpiral() {
    const container = document.createElement('div');
    container.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999;';
    document.body.appendChild(container);

    const centerX = 50;
    const centerY = 50;
    const colors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#8B00FF'];
    const spirals = [];

    // 屏幕缩放效果
    document.body.style.transition = 'transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    document.body.style.transform = 'scale(1.05)';
    setTimeout(() => {
        document.body.style.transform = 'scale(1)';
    }, 300);

    // 创建7条彩虹螺旋
    colors.forEach((color, index) => {
        const spiral = { color, index, particles: [] };
        const particleCount = 20;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: ${8 + Math.random() * 8}px;
                height: ${8 + Math.random() * 8}px;
                background: ${color};
                border-radius: 50%;
                left: ${centerX}%;
                top: ${centerY}%;
                opacity: 0;
                box-shadow: 0 0 10px ${color}, 0 0 20px ${color};
                pointer-events: none;
                z-index: 10000;
                transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            `;
            container.appendChild(particle);
            spiral.particles.push({ element: particle, angle: (i / particleCount) * Math.PI * 2 });

            setTimeout(() => {
                const radius = 100 + index * 15 + i * 5;
                const x = centerX + Math.cos(spiral.particles[i].angle + index * 0.5) * radius / 5;
                const y = centerY + Math.sin(spiral.particles[i].angle + index * 0.5) * radius / 5;
                particle.style.left = `${x}%`;
                particle.style.top = `${y}%`;
                particle.style.opacity = '1';
                particle.style.transform = `translate(-50%, -50%) scale(${1 + i * 0.05})`;
            }, index * 50 + i * 30);
        }
        spirals.push(spiral);
    });

    // 粒子炸裂效果
    setTimeout(() => {
        spirals.forEach(spiral => {
            spiral.particles.forEach((p, i) => {
                setTimeout(() => {
                    p.element.style.transition = 'all 0.6s ease-out';
                    p.element.style.opacity = '0';
                    p.element.style.transform = `translate(-50%, -50%) scale(2)`;
                }, i * 20);
                setTimeout(() => p.element.remove(), 800 + i * 20);
            });
        });
    }, 1400);

    // 弹出文字
    setTimeout(() => {
        const text = document.createElement('div');
        const messages = ['🌟 哇！', '✨ 太棒了！', '🎉 厉害！', '💫 完美！'];
        text.textContent = messages[Math.floor(Math.random() * messages.length)];
        text.style.cssText = `
            position: fixed;
            left: 50%; top: 50%;
            transform: translate(-50%, -50%) scale(0) rotate(-5deg);
            font-size: 3.5em;
            font-weight: 900;
            background: linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF6B6B 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-shadow: 0 0 30px rgba(255, 215, 0, 0.6);
            pointer-events: none;
            z-index: 10002;
            animation: textPop 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        `;
        document.body.appendChild(text);
        setTimeout(() => {
            text.style.transition = 'all 0.4s ease-out';
            text.style.transform = 'translate(-50%, -50%) scale(1.3) rotate(5deg)';
            text.style.opacity = '0';
        }, 1500);
        setTimeout(() => text.remove(), 2000);
    }, 800);

    setTimeout(() => container.remove(), 2500);
}

/**
 * 错题震动特效
 */
function createWrongShake() {
    const container = document.createElement('div');
    container.style.cssText = `
        position: fixed;
        top: 0; left: 0; width: 100%; height: 100%;
        pointer-events: none;
        z-index: 9998;
        background: radial-gradient(ellipse at center, rgba(255, 107, 107, 0.2) 0%, transparent 70%);
        opacity: 0;
        transition: opacity 0.3s;
    `;
    document.body.appendChild(container);
    setTimeout(() => container.style.opacity = '1', 10);

    // 屏幕震动
    document.body.style.animation = 'none';
    document.body.offsetHeight;
    document.body.style.animation = 'shake 0.5s ease-in-out';

    // 错误标记
    const mark = document.createElement('div');
    mark.textContent = '❌';
    mark.style.cssText = `
        position: fixed;
        left: 50%; top: 40%;
        transform: translate(-50%, -50%) scale(0);
        font-size: 5em;
        opacity: 0;
        pointer-events: none;
        z-index: 10002;
        animation: wrongMark 0.5s ease-out forwards;
    `;
    document.body.appendChild(mark);
    setTimeout(() => {
        mark.style.transition = 'all 0.3s ease-out';
        mark.style.transform = 'translate(-50%, -50%) scale(1.5)';
        mark.style.opacity = '0';
    }, 800);
    setTimeout(() => mark.remove(), 1200);

    setTimeout(() => {
        container.style.opacity = '0';
        setTimeout(() => container.remove(), 300);
    }, 500);
}

/**
 * 主触发函数 - 答对时调用
 */
function showCelebration() {
    const effects = ['megaExplosion', 'rainbowSpiral'];
    const effect = effects[Math.floor(Math.random() * effects.length)];

    switch(effect) {
        case 'megaExplosion': createMegaExplosion(); break;
        case 'rainbowSpiral': createRainbowSpiral(); break;
    }
}

/**
 * 答错时调用
 */
function showWrongFeedback() {
    createWrongShake();
}

// 导出模块
window.MathPractice.Particle = Particle;
window.MathPractice.createMegaExplosion = createMegaExplosion;
window.MathPractice.createRainbowSpiral = createRainbowSpiral;
window.MathPractice.createWrongShake = createWrongShake;
window.MathPractice.showCelebration = showCelebration;
window.MathPractice.showWrongFeedback = showWrongFeedback;
