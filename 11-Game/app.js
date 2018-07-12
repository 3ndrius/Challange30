
const boxes = document.querySelectorAll('.box');

function eventHandle(e) {
    console.log(e);
}

boxes.forEach(box => box.addEventListener('click', eventHandle));