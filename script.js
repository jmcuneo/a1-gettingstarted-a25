console.log("vibe check")

const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');

canvas.style.backgroundColor = '#0A7373';

class Ball{
    constructor(x, y, size, color, dx, dy){
        this.x = x;
        this.y = y;

        this.dx = dx;
        this.dy = dy;

        this.size = size;
        this.color = color;
    }

    draw(){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fill();
    }

    update(){
        this.x += this.dx;
        this.y += this.dy;

        if(this.x >= (canvas.width - this.size) || this.x <= (this.size)){
            this.dx *= -1;
        }

        if(this.y >= (canvas.height - this.size) || this.y <= this.size){
            this.dy *= -1;
        }

        this.draw();
    }

}

const ball = new Ball(100, 100, 20, "#B7BF99", 1, 1);
const ball2 = new Ball(200, 100, 20, "#C43322", -1, -1);

function animate(){
    // Clear all drawings
    ctx.fillStyle = `#0A7373`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ball.update();
    ball2.update();

    requestAnimationFrame(animate);
}

animate();