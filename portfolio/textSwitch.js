let time = 5000,
    currentTextIndex = 0,
    text = document
                .querySelectorAll("#feedback blockquote")
    max = text.length;

function nextText() {

    text[currentTextIndex]
        .classList.remove("selected")

    currentTextIndex++

    if(currentTextIndex >= max)
        currentTextIndex = 0

    text[currentTextIndex]
        .classList.add("selected")
}

function start() {
    setInterval(() => {
        nextText()
    }, time)
}

window.addEventListener("load", start)