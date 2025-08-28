

/* when the cursor moves we trigger an event! */

/* this finds the element from the document so we can manipulate it! */
const tracker = document.querySelector('.tracker');


/* this part of the program runs whenever the mouse moves. When it does, we update
the cordinates of the tracker element. */
document.addEventListener("mousemove", (event) => {
    tracker.style.left = event.pageX+ 'px'; // set x coordinates.
    tracker.style.top = event.pageY + 'px'; // set y coordinates.
    //tracker.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
})


