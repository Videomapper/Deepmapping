document.getElementById("gallery").addEventListener("mouseenter", function() {
    const images = document.querySelectorAll(".gallery-image");
    images.forEach(image => {
        image.style.opacity = 1; // Muestra las imágenes
    });
});

document.getElementById("gallery").addEventListener("mouseleave", function() {
    const images = document.querySelectorAll(".gallery-image");
    images.forEach(image => {
        image.style.opacity = 0; // Oculta las imágenes
    });
});
