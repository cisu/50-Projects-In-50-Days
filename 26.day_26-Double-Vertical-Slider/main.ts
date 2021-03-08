const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.right-slide');
const upButton = document.querySelector('.up-bottom');
const downButton = document.querySelector('.down-bottom');
const slidesLength = slideRight.querySelectorAll('div').length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

const changeSlide = direction => {
  const sliderHeight = sliderContainer.clientHeight;
  console.log(sliderHeight);
};
