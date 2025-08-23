moveElement = ()=>{
    let id = null;
    const element = document.getElementById("moving");
    let xPos = 0;
    let yPos = 0;
    let velocity = Math.ceil((Math.random()*5));

    clearInterval(id);
    id = setInterval(() => {
        if(xPos + velocity > 0 && yPos + velocity > 0 && xPos + velocity < 100 && yPos + velocity < 100){
            xPos += velocity;
            yPos += velocity;
            element.style.left = xPos + '%';
            element.style.top = yPos + '%';
        }
        else{
            clearInterval(id);
        }
    }, 5)
}