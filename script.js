function firstButtonPress() {
    alert("You pressed the button!")
    document.getElementById("hiding").style="display: auto"
}

function showTrombone() {
    document.getElementById("trombone").style="display: auto; position: fixed; bottom: 50%; right: 50%; width: 200px;"
    document.getElementById("header").innerHTML = "<a href='https://www.youtube.com/watch?v=Vk5G2f3Mnwg'>Link to the spinning fish</a>"
}