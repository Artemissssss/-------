let allElements = []
document.getElementsByClassName("num")[0].textContent = 0;
let speedAutoSlide = parseInt(document.getElementsByClassName("speed")[0].textContent);
for (let i = 0; i < document.getElementsByClassName("files-slider").length; i++) {
    allElements.unshift(document.getElementsByClassName("files-slider")[i].src)
}
setInterval(() => {
    let counterSlides = parseInt(document.getElementsByClassName("num")[0].textContent);
    if (allElements.length == 1) {
        document.getElementById("slider-img").src = allElements[0];
    } else if (counterSlides < allElements.length - 1) {
        counterSlides++;
        document.getElementById("slider-img").src = `${allElements[counterSlides]}`;
    } else {
        counterSlides = 0;
        document.getElementById("slider-img").src = `${allElements[0]}`;
    }
    document.getElementsByClassName("num")[0].textContent = counterSlides;
}, speedAutoSlide);
document.getElementsByClassName("pos-slider-class")[0].addEventListener("click", leftSlide);

function leftSlide() {
    let counterSlides = parseInt(document.getElementsByClassName("num")[0].textContent);
    document.getElementById("pos-slider").style.transform = "translateX(-10px)";
    let m = 1;
    for (let i = 0; i <= 500; i += 50) {
        setTimeout(() => {
            m -= 0.1
            document.getElementById("slider-img").style.opacity = m;
        }, i)
    }
    setTimeout(() => {
        if (counterSlides > 0) {
            counterSlides--;
            document.getElementById("slider-img").src = `${allElements[counterSlides]}`;
        } else {
            counterSlides = allElements.length - 1;
            document.getElementById("slider-img").src = `${allElements[counterSlides]}`;
        }
        document.getElementsByClassName("num")[0].textContent = counterSlides;
        document.getElementById("pos-slider").style.transform = "translateX(0px)";
        for (let i = 0; i <= 500; i += 50) {
            setTimeout(() => {
                m += 0.1
                document.getElementById("slider-img").style.opacity = m;
            }, i)
        }
    }, 1000)
}
let allElementsRight = []

for (let i = 0; i < document.getElementsByClassName("files-slider").length; i++) {
    allElementsRight.unshift(document.getElementsByClassName("files-slider")[i].src)
}
document.getElementsByClassName("pos-slider-class-right")[0].addEventListener("click", rightSlide);
let counterSlidesRight = parseInt(document.getElementsByClassName("num")[0].textContent)
let helper = []
helper.unshift(counterSlidesRight)

function rightSlide() {
    document.getElementById("pos-slider").style.transform = "translateX(10px)";
    let m = 1;
    for (let i = 0; i <= 500; i += 50) {
        setTimeout(() => {
            m -= 0.1
            document.getElementById("slider-img").style.opacity = m;
        }, i)
    }
    setTimeout(() => {
        counterSlidesRight = parseInt(document.getElementsByClassName("num")[0].textContent)
        helper.unshift(counterSlidesRight)
        if (helper[0] < allElementsRight.length - 1 && helper[0] !== allElementsRight.length - 1) {
            helper[0] += 1;
            document.getElementById("slider-img").src = allElementsRight[helper[0]];
        } else {
            helper[0] = 0;
            document.getElementById("slider-img").src = allElementsRight[0];
        }
        document.getElementById("pos-slider").style.transform = "translateX(0px)";
        for (let i = 0; i <= 500; i += 50) {
            setTimeout(() => {
                m += 0.1
                document.getElementById("slider-img").style.opacity = m;
            }, i)
        }
    }, 1000)
    document.getElementsByClassName("num")[0].textContent = helper[0];
}