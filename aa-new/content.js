var container = document.querySelectorAll("#menu_mobile_view");
var closer = document.querySelectorAll("#close")
var shower = document.querySelectorAll("#showBurger")
var review = document.querySelectorAll("#review_perantage")
const color = document.querySelectorAll("#color")
const sticky = document.querySelectorAll(".mobile_view")
const navbar = document.querySelectorAll(".copy_right_section")

shower[0].addEventListener("click", () => {
    container[0].style.display = "block"
})
closer[0].addEventListener("click", function () {
    container[0].style.display = "none"
})
// window.addEventListener('resize', function () {
//     sticky = sticky[0].off
// })

window.addEventListener('scroll', () => {
    if (sticky[0].offsetWidth < 400) {
        sticky[0].classList.add("mobile_view1")
        sticky[0].style.position = "fixed";
        sticky[0].style.top = "5px";
        console.log(navbar[0].offsetTop)
    }
    else {
        return null
    }

})