//get a html
var synth = window.speechSynthesis;
const utterance = new SpeechSynthesisUtterance();
let voices = [];
const voiceSelect = document.querySelector('#voice-list');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const btnStart = document.querySelector('.btn-start');
const btnStop = document.querySelector('.btn-stop');
utterance.text = document.querySelector('#area-text').value;
const vol = document.querySelector('#vol');
const spd = document.querySelector('#spd');
const pth = document.querySelector('#pth');
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
function setOption() {
    console.log(this.name, this.value);
    utterance[this.name] = this.value;
    if(this.name === 'volume') vol.innerHTML = this.value;
    if(this.name === 'rate') spd.innerHTML = this.value;
    if(this.name === 'pitch') pth.innerHTML = this.value;
    toggle();
}
btnStart.addEventListener('click', toggle);
speechSynthesis.addEventListener('voiceschanged', populateVoices);
voiceSelect.addEventListener('change', setVoice);
options.forEach(option=> option.addEventListener('change', setOption));
btnStop.addEventListener('click', () => toggle(false));
