Slider can automatically slide and with buttons
Please read All!
1)Create your HTML document.
2)Conect and create slide.js with your HTML:
<script src="./slider.js"></script>
3)Put this all in your HTML:
 <div id="slider-cont">
        <div class="pos-slider-class"></div>
            <div class="pos-slider-class-right"></div>
                <p id="pos-slider"><img src="./d.jpg" alt="slider-img" id="slider-img"></p>
                <img src="./d.jpg" alt="#" class="files-slider">
                <img src="./f.jpg" alt="#" class="files-slider">
                <img src="./p.jpg" alt="#" class="files-slider">
                <p class="num" style="display: none;"></p>
                <p class="speed" style="display: none;">100000</p>
    </div>
In p with class speed choose time of auto slide in ms.
4)Connect and create with CSS:<link rel="stylesheet" href="./slider.css">
Or create <style></style> in HTML
5)Put this code in style tag or CSS file:
     @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap');

        #slider-cont {
            width: 600px;
            height: 400px;
            display: inline-block;
            position: relative;
            user-select: none;
        }

        .pos-slider-class-right,
        .pos-slider-class {
            display: inline-block;
            width: 40px;
            height: 400px;
            z-index: 10;
        }

        .pos-slider-class-right {
            position: absolute;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
        }

        .pos-slider-class {
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
        }

        .pos-slider-class::after {
            content: '<';
            width: 40px;
            height: 70px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: rgba(44, 44, 44, 0.5);
            border: none;
            color: white;
            font-family: 'Comfortaa', cursive;
            font-size: 44px;
            position: absolute;
            text-align: center;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            z-index: 2;
            cursor: pointer;
        }

        .pos-slider-class-right::after {
            content: '>';
            width: 40px;
            height: 70px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: rgba(44, 44, 44, 0.5);
            border: none;
            color: white;
            font-family: 'Comfortaa', cursive;
            font-size: 44px;
            position: absolute;
            text-align: center;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
            z-index: 3;
            cursor: pointer;
        }

        #slider-img {
            width: 600px;
            height: 400px;
            animation-name: example;
        }

        #pos-slider {
            text-align: center;
            transition: 0.5s;
        }

        .files-slider {
            display: none;
        }
5)Use this
With best wishes Artemissssss        