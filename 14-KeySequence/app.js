
const pressed = [];
const secretCode = 'boss';


window.addEventListener('keyup', (e) => {
    console.log(e.key);
    pressed.push(e.key);
    console.log(pressed);
});