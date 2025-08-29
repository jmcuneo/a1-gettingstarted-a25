function animation(){
    let id = null;
    const element = document.getElementById("animate");
    let pos = 0;
    clearInterval(id);
    id = setInterval(helper, 10);
        function helper() {
        if (pos == 1500) {
            clearInterval(id);
        } 
        else {
            pos = pos + 2;
            element.style.left = pos + 'px';
            }
    }  
}
