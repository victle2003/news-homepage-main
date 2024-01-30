const root = document.querySelector(':root')
const navBtn = document.getElementsByClassName('nav-menu-btn')[0]
const container = document.getElementsByClassName("main-container")[0]
let navOpen = false
let mobile
let fontSize

let containerWidth

function toggleMobileNav () {
    if (navOpen) {
        navOpen = false
        document.getElementsByClassName('mobile-nav')[0].style.transform = "translateX(-100%)"
    } else {
        navOpen = true
        document.getElementsByClassName('mobile-nav')[0].style.display = "initial"
        document.getElementsByClassName('mobile-nav')[0].style.transform = "translateX(100%)"
    }
}

function updateContainerSize() {
    if (window.innerWidth < 930 && window.innerHeight > window.innerWidth) {
        mobile = 1
    }
    if (window.innerWidth >= 7680) {
        fontSize = 60
     } else if (window.innerWidth >= 3840) {
        fontSize = 35
     } else if (window.innerWidth >= 2560) {
        fontSize = 20
     } else if (window.innerWidth >= 1920) {
        fontSize = 15
     } else if (window.innerWidth >= 1280) {
        fontSize = 12
     }
     root.style.fontSize = fontSize + 'px'
     containerWidth = container.offsetWidth
     
    if (mobile) {
        console.log(mobile)
        container.style.gridTemplateRows = (containerWidth * .41)/fontSize + "em 1fr"
    }
} updateContainerSize()

window.addEventListener("resize", updateContainerSize)
window.addEventListener("click", toggleMobileNav)
