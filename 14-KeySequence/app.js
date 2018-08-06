
const pressed = [];
const secretCode = 'boss';


window.addEventListener('keyup', (e) => {
    console.log(e.key);
    pressed.push(e.key);
   
    pressed.splice(-secretCode.length-1, pressed.length -secretCode-length)

    if(pressed.join('').includes(secretCode)){
        console.log("You reach goal");
        cornify_add();
    }


    console.log(pressed);
});