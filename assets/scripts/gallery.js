// Asegurarse de que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todas las imágenes en la galería
    const images = document.querySelectorAll('.gallery-item img');
    
    // Función para manejar el clic en las imágenes
    images.forEach(image => {
        image.addEventListener('click', function() {
            // Mostrar una alerta con el nombre de la imagen (alternativo: abre una modal o una vista más grande)
            alert('Imagen clickeada: ' + image.alt);
        });
    });

    // Funcionalidad de modal para ver imágenes en tamaño completo
    const modal = document.createElement('div');
    modal.classList.add('modal');
    const modalImage = document.createElement('img');
    modal.appendChild(modalImage);
    document.body.appendChild(modal);
    
    modal.addEventListener('click', function() {
        modal.style.display = 'none';  // Cerrar el modal al hacer clic
    });

    // Mostrar la imagen en modal al hacer clic
    images.forEach(image => {
        image.addEventListener('click', function() {
            modalImage.src = image.src;
            modal.style.display = 'flex';
        });
    });
});
