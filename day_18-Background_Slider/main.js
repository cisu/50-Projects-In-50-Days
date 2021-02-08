var body = document.body;
var slides = document.querySelectorAll('.slide');
var leftBtn = document.getElementById('left');
var rightBtn = document.getElementById('right');
var activeSlides = 0;
rightBtn.addEventListener('click', function () {
    activeSlides++;
    if (activeSlides > slides.length) {
        activeSlides = 0;
    }
    setBgToBody();
    setActiveSlide();
});
leftBtn.addEventListener('click', function () {
    activeSlides--;
    if (activeSlides < 0) {
        activeSlides = slides.length - 1;
    }
    setBgToBody();
    setActiveSlide();
});
setBgToBody();
function setBgToBody() {
    body.style.backgroundImage = slides[activeSlides].style.backgroundImage;
}
function setActiveSlide() {
    slides.forEach(function (slide) {
        slide.classList.remove('active');
    });
    slides[activeSlides].classList.add('active');
}
