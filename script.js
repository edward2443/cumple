/* =========================================
   PÉTALOS
========================================= */

const petalsContainer = document.getElementById("petals");

function createPetal() {

    const petal = document.createElement("div");

    petal.classList.add("petal");

    // Posición horizontal aleatoria
    petal.style.left = Math.random() * 100 + "vw";

    // Tamaño aleatorio
    const size = Math.random() * 10 + 8;

    petal.style.width = size + "px";
    petal.style.height = size * 1.4 + "px";

    // Velocidad
    const duration = Math.random() * 6 + 5;

    petal.style.animationDuration =
        duration + "s, " +
        (Math.random() * 3 + 2) + "s";

    // Retraso
    petal.style.animationDelay =
        Math.random() * 5 + "s";

    // Diferentes tonos
    const colors = [
        "#f19abb",
        "#f5b3cb",
        "#e889aa",
        "#ffd4e2",
        "#ffffff"
    ];

    petal.style.background =
        colors[Math.floor(Math.random() * colors.length)];

    petalsContainer.appendChild(petal);

    // Eliminar después de caer
    setTimeout(() => {
        petal.remove();
    }, (duration + 6) * 1000);
}


/* Crear pétalos continuamente */

setInterval(createPetal, 300);


/* =========================================
   PARTÍCULAS BRILLANTES
========================================= */

const particlesContainer =
    document.getElementById("particles");

function createParticle() {

    const particle = document.createElement("div");

    particle.classList.add("particle");

    particle.style.left =
        Math.random() * 100 + "vw";

    particle.style.top =
        Math.random() * 100 + "vh";

    const size = Math.random() * 5 + 2;

    particle.style.width = size + "px";
    particle.style.height = size + "px";

    particle.style.animationDelay =
        Math.random() * 4 + "s";

    particlesContainer.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 5000);
}

setInterval(createParticle, 400);


/* =========================================
   CORAZONES FLOTANDO
========================================= */

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "♡";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (Math.random() * 20 + 15) + "px";

    heart.style.animationDuration =
        (Math.random() * 3 + 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

setInterval(createHeart, 1200);


/* =========================================
   EFECTO INICIAL
========================================= */

window.addEventListener("load", () => {

    // Crear algunos pétalos inmediatamente
    for (let i = 0; i < 15; i++) {
        setTimeout(createPetal, i * 150);
    }

    // Crear partículas iniciales
    for (let i = 0; i < 20; i++) {
        setTimeout(createParticle, i * 100);
    }

});
