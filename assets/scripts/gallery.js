document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.querySelector(".gallery");
    const images = document.querySelector(".gallery-images");

    // Mostrar las imágenes al pasar el cursor sobre la galería
    gallery.addEventListener("mouseenter", () => {
        images.style.display = "flex";
    });

    // Ocultar las imágenes al mover el cursor fuera de la galería
    gallery.addEventListener("mouseleave", () => {
        images.style.display = "none";
    });
});
