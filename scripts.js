const duck = document.getElementById("duck");
var canvas = document.getElementById("wave-canvas");
var context = canvas.getContext("2d");
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

var amplitude = 10;
var frequency =0.01;
var phase = 0;
var speed = 0.01;

function playQuack() {
    var quack = document.getElementById("quack")
    quack.play();
}

function drawWave() {
    context.clearRect(0, 0, width, height);
    context.beginPath();
    context.moveTo(0, height / 2);

    for(var x = 0; x < width; x++) {
        var y = height / 2 + amplitude * Math.sin(x * frequency + phase);
        context.lineTo(x, y);
    }

    context.strokeStyle='#9EDDFF';
    context.lineWidth = 700;
    context.stroke();

    phase+=speed;
    requestAnimationFrame(drawWave);
}

function init_animation() {
    window.requestAnimationFrame(drawWave);
}

duck.addEventListener('mousedown', (e) => {
    playQuack();
})