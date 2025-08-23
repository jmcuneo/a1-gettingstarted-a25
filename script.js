// Simple animation: fade-in & pulsing header text
const header = document.querySelector("header h1");
header.style.opacity = 0;

let opacity = 0;
let fadingIn = true;

function animate() {
    if (fadingIn && opacity < 1) {
        opacity += 0.02;
        header.style.opacity = opacity;
    } else if (!fadingIn && opacity > 0.8) {
        opacity -= 0.01;
        header.style.opacity = opacity;
    }

    if (opacity >= 1) fadingIn = false;
    if (opacity <= 0.8) fadingIn = true;

    requestAnimationFrame(animate);
}

animate();
