//https://www.geeksforgeeks.org/javascript/javascript-animations/

const text = document.getElementById("move");
let direction = 1;
let position = 0;

function animateMove() {
    position += direction * 4;
    text.style.transform = `translateX(${position}px)`;
    text.style.position = "absolute";
    
    if (position >= window.innerWidth - text.offsetWidth - 20 || position <= 0){
        direction *= -1;
    }

    //Asked ChatGPT how to make an Animation Repeat/ Why Static
    requestAnimationFrame(animateMove);
}

animateMove();