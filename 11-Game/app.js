
const boxes = document.querySelectorAll('.box');
let array = Array.from(boxes);

let flag = true;
let count = 0;

function eventHandle(e) {
    console.log(e);
    
    if(flag) {
        this.classList.add('box-active');
        flag = false;
        count++;
    }
    else{
        this.classList.add('box-active2');
        flag=true;
        count++;
    }
    console.log(count);
    // console.log(boxes);
    console.log(array);
  
}

array.forEach(box => box.addEventListener('click', eventHandle));
