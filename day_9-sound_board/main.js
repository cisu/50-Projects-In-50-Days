const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach(sound => {
  // create an element button
  const btn = document.createElement('button');
  // add a class to that element btn
  btn.classList.add('btn');
  // add text to created element
  btn.innerText = sound;

  btn.addEventListener('click', () => {
    stopSongs();
    // sto getElementById to id einai xwris "" giati anaferomaste se auto sto id to forEach
    document.getElementById(sound).play();
  });

  // append to the DOM created element with a class and text,
  //  auto ginetai append mesa sto div me id=buttons.
  document.getElementById('buttons').appendChild(btn);
});

function stopSongs() {
  sounds.forEach(sound => {
    const song = document.getElementById(sound);

    song.pause();
    song.currentTime = 0;
  });
}
