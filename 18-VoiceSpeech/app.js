

//get a html
var synth = window.speechSynthesis;

const utterance = new SpeechSynthesisUtterance();
let voices = [];

const voiceSelect = document.querySelector('#voice-list');
const options = document.querySelectorAll('[type="range"], #area-text');
const btnStart = document.querySelector('.btn-start');
const btnStop = document.querySelector('.btn-stop');
const btnPause = document.querySelector('.btn-pause');

utterance.text = document.querySelector('#area-text').value;


function populateVoices(){
    voices = this.getVoices();
    const voiceOption = voices.map(voice=> `<option value="${voice.name}"> ${voice.name} (${voice.lang}</option>`)
    .join('');
    voiceSelect.innerHTML = voiceOption;
}


function setVoice() {
    console.log(this.value);
    utterance.voice = voices.find(voice => voice.name === this.value);   
    toggle();
}
function toggle() {
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
}

function togglePause() {
    if(speechSynthesis.paused) {
        speechSynthesis.resume(utterance); 
    }
    else{
        speechSynthesis.pause(); 
    }
}
function setOption() {
    console.log(this.name, this.value);
    utterance[this.name] = this.value;
    toggle();
}


speechSynthesis.addEventListener('voiceschanged', populateVoices);
voiceSelect.addEventListener('change', setVoice);
options.forEach(option=> option.addEventListener('change', setOption));
btnStart.addEventListener('click', toggle);
btnStop.addEventListener('click', () => toggle(false));
btnPause.addEventListener('click', togglePause);
