const boxes = document.querySelectorAll('.box');
let array = Array.from(boxes);

let flag = true;
let count = 0;
const who = document.querySelector('.who');

function eventHandle(e) {
    if (flag) {
        this.classList.add('box-active');

        flag = false;
        z = "x";
        array[e.target.id] = "x";
        check(z);
        this.removeEventListener('click', eventHandle, false);
    } else {
        this.classList.add('box-active2');
        flag = true;
        array[e.target.id] = "o";
        z = "o";
        check(z);
    }
    function check(z) {
        if ((array[0] === z && array[1] === z && array[2] === z) || (array[3] === z && array[4] === z && array[5] === z) || (array[6] === z && array[7] === z && array[8] === z) ||
            (array[0] === z && array[4] === z && array[8] === z) || (array[2] === z && array[4] === z && array[6] === z) || (array[0] === z && array[3] === z && array[6] === z) || (array[1] === z && array[4] === z && array[7] === z) || (array[2] === z && array[5] === z && array[8] === z)) {

            if (z === "x") {
                console.log("win x");
                who.innerHTML = "x";
            } else {
                console.log("win o");
                who.innerHTML = "o";
            }
        }
    }
}
array.forEach(box => box.addEventListener('click', eventHandle));