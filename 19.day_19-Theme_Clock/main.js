//  Inspired by this dribbble shot https://dribbble.com/shots/5958443-Alarm-clock
var hourEl = document.querySelector('.hour');
var minuteEl = document.querySelector('.minute');
var secondEl = document.querySelector('.second');
var timeEl = document.querySelector('.time');
var dateEl = document.querySelector('.date');
var toggle = document.querySelector('.toggle');
var days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];
var months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];
toggle.addEventListener('click', function (e) {
    var html = document.querySelector('html');
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        e.target.innerHTML = 'Dark mode';
    }
    else {
        html.classList.add('dark');
        e.target.innerHTML = 'Light mode';
    }
});
function setTime() {
    var time = new Date();
    var month = time.getMonth();
    var day = time.getDay();
    var date = time.getDate();
    var hours = time.getHours();
    var hoursForClock = hours >= 13 ? hours % 12 : hours;
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hourEl.style.transform = "translate(-50%, -100%) rotate(" + scale(hoursForClock, 0, 11, 0, 360) + "deg)";
    minuteEl.style.transform = "translate(-50%, -100%) rotate(" + scale(minutes, 0, 59, 0, 360) + "deg)";
    secondEl.style.transform = "translate(-50%, -100%) rotate(" + scale(seconds, 0, 59, 0, 360) + "deg)";
    timeEl.innerHTML = hoursForClock + ":" + (minutes < 10 ? "0" + minutes : minutes) + " " + ampm;
    dateEl.innerHTML = days[day] + ", " + months[month] + " <span class=\"circle\">" + date + "</span>";
}
// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
var scale = function (num, in_min, in_max, out_min, out_max) {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
setTime();
setInterval(setTime, 1000);
