// Configuración de partículas
document.addEventListener('DOMContentLoaded', function () {
    const cursor = document.querySelector('.cursor');
    const particlesContainer = document.createElement('div');
    particlesContainer.classList.add('particles-container');
    document.body.appendChild(particlesContainer);

    let particles = [];

    // Crear partículas
    function createParticle(x, y) {
        const particle = document.createElement('div');
        particle.classList.add('cursor-particle');
        particle.style.left = `${x - 5}px`; // Ajuste para centrar la partícula
        particle.style.top = `${y - 5}px`; // Ajuste para centrar la partícula
        particlesContainer.appendChild(particle);
        particles.push(particle);
        
        // Eliminar la partícula después de un tiempo
        setTimeout(() => {
            particle.remove();
        }, 1500); // Duración de la partícula
    }

    // Mover el cursor y crear partículas
    document.addEventListener('mousemove', function (event) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        
        // Mover el cursor
        cursor.style.left = `${mouseX - cursor.offsetWidth / 2}px`;
        cursor.style.top = `${mouseY - cursor.offsetHeight / 2}px`;

        // Crear partículas
        createParticle(mouseX, mouseY);
    });

    // Cambiar el color de las partículas al hacer clic
    document.addEventListener('click', function () {
        const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        cursor.style.backgroundColor = randomColor;  // Cambiar el color del cursor
        particles.forEach(particle => {
            particle.style.backgroundColor = randomColor;  // Cambiar el color de las partículas
        });
    });
});
