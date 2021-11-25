let allElements = []
let counterSlides = 0;
let speedAutoSlide = parseInt(document.getElementsByClassName("speed")[0].textContent);
for(let i=0;i<document.getElementsByClassName("files-slider").length;i++){
allElements.unshift(document.getElementsByClassName("files-slider")[i].src)
}
setInterval(() => {
    if(allElements.length == 1){
        document.getElementById("slider-img").src = allElements[0];
    } else if (counterSlides < allElements.length-1) {
        counterSlides++;
        document.getElementById("slider-img").src = `${allElements[counterSlides]}`;
    }
     else {
        counterSlides = 0;
        document.getElementById("slider-img").src = `${allElements[0]}`;
    }
    document.getElementsByClassName("num")[0].textContent = counterSlides;
}, speedAutoSlide);
document.getElementsByClassName("pos-slider-class")[0].addEventListener("click", leftSlide);

function leftSlide() {
    counterSlides = document.getElementsByClassName("num")[0].textContent;
    if (counterSlides > 0) {
        counterSlides--;
        document.getElementById("slider-img").src = `${allElements[counterSlides]}`;
    } else{
        counterSlides = allElements.length-1;
        document.getElementById("slider-img").src = `${allElements[counterSlides-1]}`;
    }
    document.getElementsByClassName("num")[0].textContent = counterSlides;
}
let allElementsRight = []
let counterSlidesRight = 0;
for(let i=0;i<document.getElementsByClassName("files-slider").length;i++){
allElementsRight.unshift(document.getElementsByClassName("files-slider")[i].src)
}
document.getElementsByClassName("pos-slider-class-right")[0].addEventListener("click", rightSlide);
function rightSlide() {
    if (counterSlidesRight < allElementsRight.length-1 && counterSlidesRight !==allElementsRight.length-1) {
        counterSlidesRight+=1;
        counterSlides = counterSlidesRight;
        document.getElementById("slider-img").src = allElementsRight[counterSlidesRight];
    } else {
        counterSlidesRight = 0;
        counterSlides = counterSlidesRight;
        document.getElementById("slider-img").src = allElementsRight[0];
    }
    document.getElementsByClassName("num")[0].textContent = counterSlidesRight;
}
