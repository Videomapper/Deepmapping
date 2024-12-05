// Refactorizado para consolidar funcionalidades comunes y optimizar partículas

document.addEventListener('DOMContentLoaded', () => {
    // Configuración del modal para la galería
    const modal = document.createElement('div');
    modal.classList.add('modal');
    const modalImage = document.createElement('img');
    modal.appendChild(modalImage);
    document.body.appendChild(modal);

    modal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    document.querySelectorAll('.gallery-item img').forEach(image => {
        image.addEventListener('click', () => {
            modalImage.src = image.src;
            modal.style.display = 'flex';
        });
    });

    // Contenedor de partículas
    if (!document.querySelector('.particles-container')) {
        document.body.insertAdjacentHTML('beforeend', '<div class="particles-container"></div>');
    }

    // Animación de partículas interactivas para el cursor
    let particleCooldown = false;

    document.addEventListener('mousemove', (e) => {
        if (particleCooldown) return;

        particleCooldown = true;
        setTimeout(() => particleCooldown = false, 50); // Limitar la generación de partículas

        const particle = document.createElement('div');
        particle.classList.add('cursor-particle');
        particle.style.left = `${e.clientX}px`;
        particle.style.top = `${e.clientY}px`;
        particle.style.backgroundColor = `rgba(255, 255, 255, ${Math.random()})`;

        document.querySelector('.particles-container').appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 1000);
    });

    // Manejo de hover en iconos sociales con transiciones suaves
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseover', () => {
            icon.style.filter = 'brightness(1.2)';
        });
        icon.addEventListener('mouseout', () => {
            icon.style.filter = 'brightness(1)';
        });
    });

    // Redirigir al hacer clic en el logo
    const logo = document.querySelector('#logo img');
    if (logo) {
        logo.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }
});
