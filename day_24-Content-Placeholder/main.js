var header = document.getElementById('header');
var title = document.getElementById('title');
var excerpt = document.getElementById('excerpt');
var profile_img = document.getElementById('profile_img');
var name = document.getElementById('name');
var date = document.getElementById('date');
var animated_bgs = document.querySelectorAll('.animated-bg');
var animated_bg_texts = document.querySelectorAll('.animated-bg-text');
setTimeout(getData, 2500);
function getData() {
    header.innerHTML =
        '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />';
    title.innerHTML = 'Lorem ipsum dolor sit amet';
    excerpt.innerHTML =
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis';
    profile_img.innerHTML =
        '<img src="https://randomuser.me/api/portraits/men/0.jpg" alt="" />';
    name.innerHTML = 'John Doe';
    date.innerHTML = 'Oct 16, 2020';
    animated_bgs.forEach(function (bg) { return bg.classList.remove('animated-bg'); });
    animated_bg_texts.forEach(function (bg) { return bg.classList.remove('animated-bg-text'); });
}
