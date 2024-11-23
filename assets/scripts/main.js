// Activar la visualización de la descripción cuando el cursor está sobre ella
const description = document.getElementById('description');

document.addEventListener('mousemove', function(event) {
    // Hacer que la descripción aparezca solo cuando el cursor está sobre ella
    if (event.target.closest('#description')) {
        description.classList.add('show');
    } else {
        description.classList.remove('show');
    }
});

// Función para el cursor animado
document.addEventListener('mousemove', (e) => {
    let x = e.clientX;
    let y = e.clientY;
    const cursorParticles = document.querySelector('.particles-container');
    
    for (let i = 0; i < 10; i++) {
        let particle = document.createElement('div');
        particle.classList.add('cursor-particle');
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
        cursorParticles.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 1500); // Remueve las partículas después de un tiempo
    }
});
