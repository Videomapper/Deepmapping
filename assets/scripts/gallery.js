document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery-item img');
    images.forEach(image => {
        image.addEventListener('click', function() {
            alert('Imagen clickeada: ' + image.alt);
        });
    });
});
