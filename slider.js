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
    for (let i = 0; i <= 1000; i += 100) {
        let m = 1;
        setTimeout(() => {
            m-=0.1
            document.getElementById("slider-img").style.opacity = `${m}`;
            console.log(m,i)
        }, i)
    }
    if (counterSlides > 0) {
        counterSlides--;
        document.getElementById("slider-img").src = `${allElements[counterSlides]}`;
    } else {
        counterSlides = allElements.length - 1;
        document.getElementById("slider-img").src = `${allElements[counterSlides]}`;
    }
    setTimeout(() => {
        for (let i = 0; i < 1000; i += 100) {
            let m = 0;
            setTimeout(() => {
                m+=0.1
                document.getElementById("slider-img").style.opacity = `${m}`;
            }, i)
        }
        document.getElementById("pos-slider").style.transform = "translateX(0px)";
    }, 1000)
    document.getElementsByClassName("num")[0].textContent = counterSlides;
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
    if (helper[0] < allElementsRight.length - 1 && helper[0] !== allElementsRight.length - 1) {
        helper[0] += 1;
        document.getElementById("slider-img").src = allElementsRight[helper[0]];
    } else {
        helper[0] = 0;
        document.getElementById("slider-img").src = allElementsRight[0];
    }
    document.getElementsByClassName("num")[0].textContent = helper[0];
}