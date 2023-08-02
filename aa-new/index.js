var container = document.querySelectorAll("#menu_mobile_view");
var closer = document.querySelectorAll("#close")
var shower = document.querySelectorAll("#showBurger")
var review = document.querySelectorAll("#review_perantage")
const color = document.querySelectorAll("#color")
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
window.onload = () => {
    responsive();
}