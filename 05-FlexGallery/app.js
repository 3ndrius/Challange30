const panels = document.querySelectorAll('.panel');

function toogleOpen() {
  console.log("hello");
}


panels.forEach(panel => panel.addEventListener('click', toogleOpen));


