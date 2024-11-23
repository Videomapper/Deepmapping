// Activar la visualización de la descripción cuando el cursor está sobre ella
const description = document.getElementById('description');

document.addEventListener('mousemove', function(event) {
    if (event.target.closest('#description')) {
        description.classList.add('show');
    } else {
        description.classList.remove('show');
    }
});

// Función de animación de partículas para el cursor
document.addEventListener('mousemove', (e) => {
    let x = e.clientX;
    let y = e.clientY;
    const cursorParticles = document.querySelector('.particles-container');
    
    for (let i = 0; i < 10; i++) {
        let particle = document.createElement('div');
        particle.classList.add('cursor-particle');
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.backgroundColor = `rgba(255, 255, 255, ${Math.random()})`;
        cursorParticles.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 1000);
    }
});
