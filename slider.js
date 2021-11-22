let allElements = []
let counterSlides = 0;
let counterSlidesRight = 0;
let speedAutoSlide = 5000;
for(let i=0;i<document.getElementsByClassName("files-slider").length;i++){
allElements.unshift(document.getElementsByClassName("files-slider")[i].src)
}
setInterval(() => {
    if (counterSlides < allElements.length) {
        counterSlides++;
        counterSlidesRight++;
        document.getElementById("slider-img").src = `${allElements[counterSlides]}`;
    } else {
        counterSlides = 0;
        counterSlidesRight = 0;
        document.getElementById("slider-img").src = `${allElements[0]}`;
    }
}, speedAutoSlide);
document.getElementsByClassName("pos-slider-class")[0].addEventListener("click", leftSlide);

function leftSlide() {
    if (counterSlides > 0) {
        document.getElementById("slider-img").src = `${allElements[counterSlides]}`;
    } else{
        document.getElementById("slider-img").src = `${allElements[counterSlides-1]}`;
    }
    counterSlidesRight = counterSlides;
}
document.getElementsByClassName("pos-slider-class-right")[0].addEventListener("click", rightSlide);
function rightSlide() {
    if (counterSlidesRight < allElements.length-1 && counterSlidesRight !==allElements.length-1) {
        counterSlidesRight+=1;
        counterSlides = counterSlidesRight;
        document.getElementById("slider-img").src = allElements[counterSlidesRight];
    } else {
        counterSlidesRight = 0;
        counterSlides = counterSlidesRight;
        document.getElementById("slider-img").src = allElements[0];
    }
}
