// Activar la visualización de la descripción cuando el cursor está sobre ella
const description = document.querySelector('#description');

document.addEventListener('mousemove', (event) => {
    const isHovered = event.target.closest('#description') !== null;
    description.classList.toggle('show', isHovered);
});

// Animación de partículas para el cursor
document.addEventListener('mousemove', (event) => {
    const cursorParticles = document.querySelector('.particles-container');
    const x = event.clientX;
    const y = event.clientY;

    if (!cursorParticles) return; // Verificar que el contenedor de partículas exista

    // Crear y personalizar una partícula
    const particle = document.createElement('div');
    particle.classList.add('cursor-particle');
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    particle.style.backgroundColor = `rgba(255, 255, 255, ${Math.random().toFixed(2)})`;

    // Añadir la partícula al contenedor
    cursorParticles.appendChild(particle);

    // Remover la partícula después de 1 segundo
    setTimeout(() => {
        particle.remove();
    }, 1000);
});
