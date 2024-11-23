document.addEventListener("mousemove", (e) => {
    const canvas = document.getElementById("particleCanvas");
    const ctx = canvas.getContext("2d");

    // Ajustar tamaño del canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Crear partículas alrededor del cursor
    const particleCount = 10;
    for (let i = 0; i < particleCount; i++) {
        ctx.beginPath();
        ctx.arc(mouseX + Math.random() * 10 - 5, mouseY + Math.random() * 10 - 5, 3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.fill();
    }
});
