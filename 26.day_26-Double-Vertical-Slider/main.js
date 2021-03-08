var sliderContainer = document.querySelector('.slider-container');
var slideRight = document.querySelector('.right-slide');
var slideLeft = document.querySelector('.right-slide');
var upButton = document.querySelector('.up-bottom');
var downButton = document.querySelector('.down-bottom');
var slidesLength = slideRight.querySelectorAll('div').length;
var activeSlideIndex = 0;
slideLeft.style.top = "-" + (slidesLength - 1) * 100 + "vh";
upButton.addEventListener('click', function () { return changeSlide('up'); });
downButton.addEventListener('click', function () { return changeSlide('down'); });
var changeSlide = function (direction) {
    var sliderHeight = sliderContainer.clientHeight;
    console.log(sliderHeight);
};
