const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');
const mainContent = document.querySelector('.main-content');

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 130, 1, -0.3);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
  mainContent.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
