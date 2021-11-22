let allElements = []
let counterSlides = 0;
let speedAutoSlide = 5000;
for(let i=0;i<document.getElementsByClassName("files-slider").length;i++){
allElements.unshift(document.getElementsByClassName("files-slider")[i].src)
}
setInterval(() => {
    if (counterSlides < allElements.length) {
        document.getElementById("slider-img").src = `${allElements[counterSlides]}`;
        counterSlides++;
    } else {
        document.getElementById("slider-img").src = `${allElements[0]}`;
        counterSlides = 0;
    }
}, speedAutoSlide);
document.getElementsByClassName("pos-slider-class")[0].addEventListener("click", leftSlide);

function leftSlide() {
    if (counterSlides > 0) {
        counterSlides--;
        document.getElementById("slider-img").src = `${allElements[counterSlides]}`;
    } else{
        counterSlides = allElements.length;
        document.getElementById("slider-img").src = `${allElements[counterSlides-1]}`;
    }
};
document.getElementsByClassName("pos-slider-class-right")[0].addEventListener("click", rightSlide);
function rightSlide() {
    if (counterSlides < allElements.length-1) {
        counterSlides++;
        document.getElementById("slider-img").src = allElements[counterSlides];
    } else {
        counterSlides =  0;
        document.getElementById("slider-img").src = allElements[counterSlides];
    }
}
