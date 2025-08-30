function makePulse(elementId, interval = 1000){

    const element = document.getElementById(elementId);
    let pulsing = false;

    setInterval(() => {
        pulsing = !pulsing;
        if (pulsing) {
            element.classList.add("pulse");
        } else {
            element.classList.remove("pulse");
        }
    }, interval);
}

makePulse("header", 800);