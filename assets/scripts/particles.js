// Partículas en el cursor
document.addEventListener("mousemove", (event) => {
    const particle = document.createElement("div");
    particle.classList.add("cursor-particle");
    document.body.appendChild(particle);
    particle.style.left = `${event.pageX - 5}px`;
    particle.style.top = `${event.pageY - 5}px`;

    // Cambio de color al hacer clic
    particle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

    setTimeout(() => {
        particle.remove();
    }, 1500); // Elimina la partícula después de 1.5 segundos
});
