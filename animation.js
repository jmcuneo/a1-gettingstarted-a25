const disappearButton = document.getElementById("disappear-button")

const handleDisappear = () => {
    const img = document.getElementById("face")

    img.animate([{
        opacity: 1
    }, {
        opacity: 0
    }], {
        duration: 1500
    })

    img.style = "opacity: 0;"
}

disappearButton.addEventListener("click", handleDisappear)