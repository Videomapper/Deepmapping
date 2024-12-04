// Función para mostrar la galería al pasar el cursor
const galleryLink = document.getElementById('gallery-link');
const galleryImages = document.getElementById('gallery-images');

// Manejadores de eventos para la galería
galleryLink.addEventListener('mouseenter', function() {
    galleryLink.classList.add('show-images');
});

galleryLink.addEventListener('mouseleave', function() {
    galleryLink.classList.remove('show-images');
});

// Activar la visualización de la descripción cuando el cursor está sobre ella
const description = document.getElementById('description');

document.addEventListener('mousemove', function(event) {
    if (event.target.closest('#description')) {
        description.classList.add('show');
    } else {
        description.classList.remove('show');
    }
});

// Función de animación de partículas para el cursor
document.addEventListener('mousemove', (e) => {
    let x = e.clientX;
    let y = e.clientY;
    const cursorParticles = document.querySelector('.particles-container');
    
    for (let i = 0; i < 10; i++) {
        let particle = document.createElement('div');
        particle.classList.add('cursor-particle');
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.backgroundColor = `rgba(255, 255, 255, ${Math.random()})`;
        cursorParticles.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 1000);
    }
});

// Función para redirigir al hacer clic en el logo
const logo = document.querySelector('#logo img');
logo.addEventListener('click', function(event) {
    window.location.href = 'index.html';
});

// Partículas interactivas (para efecto visual)
document.body.insertAdjacentHTML('beforeend', '<div class="particles-container"></div>');

// Modal para la visualización de imágenes ampliadas en la galería
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery-item img');
    const modal = document.createElement('div');
    modal.classList.add('modal');
    const modalImage = document.createElement('img');
    modal.appendChild(modalImage);
    document.body.appendChild(modal);

    // Cerrar el modal al hacer clic
    modal.addEventListener('click', function() {
        modal.style.display = 'none'; // Cerrar el modal
    });

    // Mostrar imagen en el modal al hacer clic en una imagen
    images.forEach(image => {
        image.addEventListener('click', function() {
            modalImage.src = image.src;
            modal.style.display = 'flex'; // Mostrar el modal
        });
    });
});

// Función para manejar el cambio de colores de los iconos de redes sociales al hacer hover
const socialIcons = document.querySelectorAll('.social-icon');
socialIcons.forEach(icon => {
    icon.addEventListener('mouseover', function() {
        icon.style.filter = 'brightness(1.2)';
    });
    icon.addEventListener('mouseout', function() {
        icon.style.filter = 'brightness(1)';
    });
});
