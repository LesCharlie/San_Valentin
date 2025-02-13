document.getElementById("carta").addEventListener("click", function() {
    document.getElementById("mensaje").style.display = "flex";
    iniciarLluvia();
    mostrarTextoArriba();

    // 🔊 Reproducir la música
    const musica = document.getElementById("musica");
    musica.play();
});

function iniciarLluvia() {
    const lluvia = document.querySelector(".lluvia");
    const imagenes = ["corazon.png", "rosa.png", "estrella.png", "corazon2.png", "teamo.png"];
    for (let i = 0; i < 40; i++) {
        let img = document.createElement("img");
        img.src = imagenes[Math.floor(Math.random() * imagenes.length)];
        img.classList.add("gota");
        img.style.left = Math.random() * 100 + "vw";
        img.style.animationDuration = Math.random() * 2 + 3 + "s";
        img.style.position = "absolute";
        img.style.top = "-50px";
        img.style.width = Math.random() * 40 + 40 + "px"; // tamaño de las imágenes
        img.style.animation = "caer " + (Math.random() * 3 + 2) + "s linear infinite";
        lluvia.appendChild(img);
    }
}

function mostrarTextoArriba() {
    const textoArriba = document.querySelector(".texto-arriba");
    textoArriba.style.opacity = 1;
    textoArriba.style.transform = "translateY(0)";
    textoArriba.style.transition = "all 0.5s ease-in-out";
}

// Animación de caída
const style = document.createElement("style");
style.innerHTML = `
@keyframes caer {
    0% { transform: translateY(0) rotate(0deg); opacity: 1; }
    100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
}`;
document.head.appendChild(style);

