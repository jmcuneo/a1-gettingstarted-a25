
const title = document.querySelector('h1');
const colors = ['#2B4C7E', '#567D8D', '#F5E6D3', '#8B3A3A', '#A4B494'];
let colorIndex = 0;

function animateTitle() {
    title.style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}

setInterval(animateTitle, 500);
