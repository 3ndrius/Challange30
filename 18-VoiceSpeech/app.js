

//get a html

const utterance = new SpeechSynthesisUtterance();
let voices = [];

const voiceSelect = document.querySelector('#voice-list');
const options = document.querySelectorAll('[type="range"], #area-text');
const btnStart = document.querySelector('.btn-start');
const btnStop = document.querySelector('.btn-stop');

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
}



speechSynthesis.addEventListener('voiceschanged', populateVoices);
voiceSelect.addEventListener('change', setVoice);