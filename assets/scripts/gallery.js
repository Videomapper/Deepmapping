// Selección de elementos
const gallery = document.querySelector('.gallery');
const galleryImages = document.querySelector('.gallery-images');

// Función para mostrar las imágenes al pasar el cursor
function showGalleryImages() {
    galleryImages.classList.add('gallery-images--visible');
}

// Función para ocultar las imágenes al retirar el cursor
function hideGalleryImages() {
    galleryImages.classList.remove('gallery-images--visible');
}

// Eventos para mostrar y ocultar la galería
gallery.addEventListener('mouseenter', showGalleryImages);
gallery.addEventListener('mouseleave', hideGalleryImages);

// Mejora de accesibilidad: manejo por teclado (focus/blur)
gallery.addEventListener('focus', showGalleryImages);
gallery.addEventListener('blur', hideGalleryImages);
