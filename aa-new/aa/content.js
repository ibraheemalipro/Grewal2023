var container = document.querySelectorAll("#menu_mobile_view");
var closer = document.querySelectorAll("#close")
var shower = document.querySelectorAll("#showBurger")
var review = document.querySelectorAll("#review_perantage")
const color = document.querySelectorAll("#color")
const sticky = document.querySelectorAll(".mobile_view")
const section = document.querySelectorAll(".from_sub_container")
const navbar = document.querySelectorAll(".navbar")[0]
const documentWidth = document.querySelector("body").offsetWidth
const animateCouter = document.querySelectorAll("#animateNumaber")
// const navbar = document.querySelectorAll(".copy_right_section")
// const navbar1 = document.querySelectorAll(".footer_contain")[0]

shower[0].addEventListener("click", () => {
    container[0].style.display = "block"
})
closer[0].addEventListener("click", function () {
    container[0].style.display = "none"
})
// window.addEventListener('resize', function () {
//     sticky = sticky[0].off
// })

const responsive = () => {
    const observer = new IntersectionObserver((entites) => {
        const ent = entites[0]
        ent.isIntersecting == false ? sticky[0].classList.add("mobile_view1") : sticky[0].classList.remove("mobile_view1")
        ent.isIntersecting == false ? navbar.classList.add("navbarfloat") : navbar.classList.remove("navbarfloat")
        // console.log(sliderWidth)
    },
        {
            root: null,
            rootMargin: "",
            threshold: 0
        })
    observer.observe(section[0] || about[0])

}
let interval = 5000
animateCouter.forEach((animateCouter) => {
    let startValue = 0;
    let endValue = parseInt((animateCouter.textContent))
    console.log(endValue)
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(() => {
        startValue += 1;
        animateCouter.textContent = startValue + "+";
        if (startValue == endValue) {
            clearInterval(counter)
        }
    }, duration)
})
window.onload = () => {
    if (documentWidth < 500) {
        responsive()
    }
}
// console.log(navbar)
// console.log(documentWidth)