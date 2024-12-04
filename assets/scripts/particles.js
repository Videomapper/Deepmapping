// Añadir contenedor para partículas al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    if (!document.querySelector('.particles-container')) {
        document.body.insertAdjacentHTML('beforeend', '<div class="particles-container"></div>');
    }
});
