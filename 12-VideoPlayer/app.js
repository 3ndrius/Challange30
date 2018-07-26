// get elements


const player = document.querySelector('.player');
const video = player.querySelector('.viewer');

const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');

const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
let ranges = player.querySelectorAll('.player__slider');



function togglePlay() {

 const method = video.paused ? 'play' : 'pause';
 video[method]();
}

function updateButton() {
    const icon = this.paused ? '►' : "||";
    toggle.textContent = icon;
    console.log(icon);

}
function handleRangeUpdate() {
    video[this.name] = this.value;
    console.log(this.value);
}

function skip() {
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}
function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
    console.log(e);
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

video.addEventListener('timeupdate', handleProgress);


toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => {
    if(mousedown ) {
        scrub(e);
    }
});
progress.addEventListener('mousedown', () => {
    mousedown = true;
});
progress.addEventListener('mouseup', () => {
    mousedown = false;
});