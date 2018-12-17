
const pressed = [];
const secretCode = 'cool';
const h2 =document.getElementById("org_div1");

window.addEventListener('keyup', e => {
    console.log(e.key);

    pressed.push(e.key);

    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

    if(pressed.join('').includes(secretCode)) {
        let title = document.createElement("h1");
        title.innerHTML="Hello world";
        document.body.insertBefore(title, h2);
    }
    console.log(pressed);
 

    
})