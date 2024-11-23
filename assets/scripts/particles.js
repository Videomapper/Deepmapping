const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");
let particles = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 1;
        this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        this.velocityX = Math.random() * 2 - 1;
        this.velocityY = Math.random() * 2 - 1;
        this.opacity = 1;
    }

    update() {
        this.x += this.velocityX;
        this.y += this.velocityY;
        this.opacity -= 0.02;
    }

    draw() {
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles = particles.filter(p => p.opacity > 0);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animate);
}

window.addEventListener("mousemove", (e) => {
    for (let i = 0; i < 5; i++) {
        particles.push(new Particle(e.clientX, e.clientY));
    }
});

animate();
