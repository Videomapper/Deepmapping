// Selección de elementos
const galleryTitle = document.querySelector(".gallery h2");
const galleryImages = document.querySelector(".gallery-images");

// Mostrar las imágenes al pasar el cursor sobre el título
galleryTitle.addEventListener("mouseenter", () => {
    galleryImages.style.display = "grid";
});

// Ocultar las imágenes al salir del área de la galería
galleryImages.addEventListener("mouseleave", () => {
    galleryImages.style.display = "none";
});
