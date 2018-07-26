// get elements


const player = document.querySelector('.player');
const video = player.querySelector('.viewer');

const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress_filled');

const toggle = player.querySelector('.toggle');
const skipButton = player.querySelector('[data-skip]');
const ranges = player.querySelectorAll('.plyer__slider');



function togglePlay() {

 const method = video.paused ? 'play' : 'pause';
 video[method]();
}

function updateButton() {
    const icon = this.paused ? '►' : "||";
    toggle.textContent = icon;
    console.log(icon);

}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);


toggle.addEventListener('click', togglePlay);
