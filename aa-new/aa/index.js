var container = document.querySelectorAll("#menu_mobile_view");
var closer = document.querySelectorAll("#close")
var shower = document.querySelectorAll("#showBurger")
var review = document.querySelectorAll("#review_perantage")
const color = document.querySelectorAll("#color")
const sticky = document.querySelectorAll(".mobile_view")
const section = document.querySelectorAll(".from_sub_container")
const about = document.querySelectorAll(".about_text")
const navbar = document.querySelectorAll(".navbar")[0]
const documentWidth = document.querySelector("body").offsetWidth
const animateCouter = document.querySelectorAll("#animateNumaber")
color[0].style.width = review[0].textContent
color[1].style.width = review[1].textContent
color[2].style.width = review[2].textContent
color[3].style.width = review[3].textContent
color[4].style.width = review[4].textContent

var responsive = function () {
    var slider = document.querySelectorAll(".slider")
    var sliderWidth = slider[0].offsetWidth;
    var cardWarp = document.querySelectorAll(".slideWrap")
    var count = 1;
    var cardList = document.querySelectorAll(".card").length
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    window.addEventListener('resize', function () {
        sliderWidth = slider[0].offsetWidth;
    })
    var nextSlide = function () {
        const atScreenSize = Math.round(cardList / 2)
        if (sliderWidth == 400) {
            if (count < cardList) {
                cardWarp[0].style.left = "-" + count * sliderWidth + "px";
                count++;
            }
            else if (count = cardList) {
                cardWarp[0].style.left = "0px";
                count = 1;
            }
        }
        else {

            if (count < atScreenSize) {
                cardWarp[0].style.left = "-" + count * sliderWidth + "px";
                count++;
            }
            else if (count = cardList) {
                cardWarp[0].style.left = "0px";
                count = 1;
            }
        }

    };
    var prevSlide = function () {
        const atScreenSize = Math.round(cardList / 2)
        if (count > 1) {
            count = count - 2;
            cardWarp[0].style.left = "-" + count * sliderWidth + "px";
            count++;
        }
        else if (count = 1) {
            count = atScreenSize - 1;
            cardWarp[0].style.left = "-" + count * sliderWidth + "px";
            count++;
        }
    };
    next.addEventListener("click", function () {
        nextSlide();
    });

    prev.addEventListener("click", function () {
        prevSlide();
    });
    setInterval(function () {
        nextSlide()
    }, 5000);
    // console.log(Math.round(cardList / 2))
    // console.log(sliderWidth)
}
shower[0].addEventListener("click", () => {
    container[0].style.display = "block"
})
closer[0].addEventListener("click", function () {
    container[0].style.display = "none"
})

const respon = () => {
    const observer = new IntersectionObserver((entites) => {
        const ent = entites[0]
        ent.isIntersecting == false ? sticky[0].classList.add("mobile_view1") : sticky[0].classList.remove("mobile_view1")
        ent.isIntersecting == false ? navbar.classList.add("navbarfloat") : navbar.classList.remove("navbarfloat")
        // console.log(ent.isIntersecting)
    },
        {
            root: null,
            rootMargin: "",
            threshold: 0
        })
    observer.observe(section[0] || about[0])
}
// Animated counter 
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
    responsive();
    if (documentWidth < 500) {
        respon();
    }
}