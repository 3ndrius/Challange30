

// get a html

const utterance = new SpeechSynthesisUtterance();
let voices = [];

const voiceSelect = document.querySelector('#voice-list');
const options = document.querySelectorAll('[type="range"], #area-text');
const btnStart = document.querySelector('.btn-start');
const btnStop = document.querySelector('.btn-stop');

utterance.text = document.querySelector('#area-text').value;


populateVoices = () =>{

}
speechSynthesis.addEventListener('voiceschanged', populateVoices);