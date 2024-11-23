// Función para mostrar la galería al pasar el cursor
const gallery = document.getElementById('gallery');
const galleryImages = document.getElementById('gallery-images');

gallery.addEventListener('mouseenter', function() {
    gallery.classList.add('show-images');
});

gallery.addEventListener('mouseleave', function() {
    gallery.classList.remove('show-images');
});
