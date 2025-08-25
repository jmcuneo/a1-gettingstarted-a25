let characters = 0;

function updateAnimation() {
    // Stop the animation once all the characters are on the screen.
    if (characters > fullName.length) return;

    name.innerText = fullName.slice(0, characters++);
    setTimeout(updateAnimation, 100);
}

const name = document.querySelector('#name');
const fullName = name.innerText;

updateAnimation();