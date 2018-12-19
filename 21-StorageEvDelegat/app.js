

const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];
const btn = document.querySelector('.btn');
const del = document.querySelector('.btn-del');

function addItem(e){
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text: text, //(text es6)
        done: false
    };
    console.log(item);
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
}

function populateList(plates= [] , platesList){
   platesList.innerHTML = plates.map((plate, i ) => {
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : '' }/>
                <label for="item${i}"> ${plate.text}</label>
            </li>
        `;
    }).join('');
}

function toggleDone(e) {
    if(!e.target.matches('input')) return;
    console.log(e.target);
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}
function toggleCheck(e) {
    items.forEach(item => {
        item.done = !item.done
    })
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
btn.addEventListener('click', toggleCheck);



populateList(items, itemsList);