let allElements = ['./s.jpg', './p.jpg', './f.jpg', './d.jpg']
let counterSlides = 0;
let speedAutoSlide = 5000;
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
document.getElementById("blyat").addEventListener("click", rightSlide);


function rightSlide() {
    if (counterSlides < allElements.length) {
        console.log("b",counterSlides)
        document.getElementById("slider-img").src = allElements[counterSlides];
        counterSlides+=1;
    } else {
            console.log("m")
            counterSlides = 0;
            document.getElementById("slider-img").src = `${allElements[0]}`;
        }
}
//if(counterSlides < allElements.length) {document.getElementById("slider-img").src = `${allElements[counterSlides]}`;counterSlides++;}else{counterSlides = 0;document.getElementById("slider-img").src = `${allElements[0]}`;}
//{if(counterSlides > 0) {counterSlides--;document.getElementById("slider-img").src = `${allElements[counterSlides]}`;console.log("1")}else{counterSlides = allElements.length;document.getElementById("slider-img").src = `${allElements[counterS