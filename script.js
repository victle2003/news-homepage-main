let container = document.getElementsByClassName("main-container")[0]

let containerWidth

function updateContainerSize() {
    containerWidth = container.offsetWidth
    container.style.gridTemplateRows = (containerWidth * .41)/15 + "em 1fr"
}

updateContainerSize()

window.addEventListener("resize", updateContainerSize)