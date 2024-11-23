// Mostrar y ocultar la descripción cuando el cursor pasa por encima
const description = document.getElementById('description');
const descriptionText = description.querySelector('p');

description.addEventListener('mouseenter', () => {
    description.style.display = 'block'; // Muestra la descripción
});

description.addEventListener('mouseleave', () => {
    description.style.display = 'none'; // Oculta la descripción
});

// Mostrar la galería cuando el cursor pasa sobre la sección
const gallerySection = document.getElementById('gallery');

gallerySection.addEventListener('mouseenter', () => {
    const galleryImages = document.querySelectorAll('.gallery-image');
    galleryImages.forEach(image => {
        image.style.opacity = 1; // Muestra las imágenes
    });
});

gallerySection.addEventListener('mouseleave', () => {
    const galleryImages = document.querySelectorAll('.gallery-image');
    galleryImages.forEach(image => {
        image.style.opacity = 0; // Oculta las imágenes
    });
});
