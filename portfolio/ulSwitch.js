let currentImageIndex = 0,
    image = document
                .querySelectorAll("#portfolio ul")
    max = image.length;

function ulSwitch() {

    image[currentImageIndex]
        .classList.remove("selected1")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    image[currentImageIndex]
        .classList.add("selected1")
}

function start() {
    setInterval(() => {
        ulSwitch()
    }, 5000)
}

window.addEventListener("load", start)