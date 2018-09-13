

const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth= 10;
let hue = 0;
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let direction = true;
function draw(e) {
    if(!isDrawing) return ; //stop function
    console.log(e);
    ctx.strokeStyle =  `hsl(${hue}, 100%, 50%)`;
    ctx.lineWidth = hue;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    lastX = e.offsetX;
    lastY = e.offsetY;
    hue++;
    
   if(hue >= 360) {
       hue = 0;
   }
   ctx.lineWidth++;
}
canvas.addEventListener('mousedown', (e) => {

    isDrawing=true;
    lastX = e.offsetX;
    lastY = e.offsetY;
});
canvas.addEventListener('mouseup', () => isDrawing=false);
canvas.addEventListener('mouseout', () => isDrawing=false);
canvas.addEventListener('mousemove', draw);
