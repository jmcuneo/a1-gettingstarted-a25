/*
Runs the animation when the page finishes loading
This animation is inspired by the dvd logo
 */
window.onload = ()=>{
    let id = null;
    const element = document.getElementById("moving-object");
    let xPos = 1; //the position of the element in the frame on the x-axis
    let yPos = 1; //the position of the element in the frame on the y-axis
    let xVel = Math.ceil(Math.random()*5); //the velocity of the element in the frame in the x-axis direction
    let yVel = Math.ceil(Math.random()*5); //the velocity of the element in the frame in the y-axis direction
    if(xVel === yVel){
        xVel++; //makes the animation more interesting as the x and y velocities now cannot be the same
    }
    console.log("moveElement called with x velocity: "+xVel+" and y velocity: "+yVel);
    clearInterval(id);
    id = setInterval(() => {
        try {
            let temp1 = setAxis([xPos, xVel]); //returns new x-position and x-velocity
            let temp2 = setAxis([yPos, yVel]); //returns new y-position and y-velocity
            xPos = temp1[0]; //updates x-position
            yPos = temp2[0]; //updates y-position
            xVel = temp1[1]; //updates x-velocity
            yVel = temp2[1]; //updates y-velocity
            element.style.left = xPos + "%"; //updates position of element on webpage
            element.style.top = yPos + "%"; //updates position of element on webpage
        }
        catch(err){
            console.log(err);
            clearInterval(id); //ends animation if error occurs
        }
    }, 100)


}

/*
Updates position and velocity of a given pair (position, velocity)
 */
setAxis = (pair) => {
    if(typeof pair === typeof []) {
        if (pair.length === 2) {
            if (pair[0] + pair[1] > 0) {
                //checks to make sure that the object does not go over the axis boundary when it has negative velocity
                if (pair[0] + pair[1] < 100) {
                    //checks to make sure that the object does not go over the axis boundary when it has positive velocity
                    pair[0] += pair[1];
                } else {
                    //sets the value to the maximum allowed then sets the velocity to be in the opposite direction
                    pair[0] = 99; //prevents the element from going over the boundary
                    pair[1] *= -1;
                }
            } else {
                //sets the value to the minimum allowed then sets the velocity to be in the opposite direction
                pair[0] = 1 //prevents the element from going over the boundary
                pair[1] *= -1;
            }
            return pair;
        }
        else{
            throw Error("Wrong pair size")
        }
    }
    else{
        throw Error("Pair must be array")
    }
}

