const ADD_ITEMS = document.querySelector('.add-items');
const ITEMS_LIST = document.querySelector('.items-list');
const ITEMS = JSON.parse(localStorage.getItem('items')) || [];
const CLEAR_STORAGE = document.querySelector('.storage-clear');

function addItem(ev) {
  ev.preventDefault();

  const text = (this.querySelector('[name=item]')).value;
  const item = {
    text,
    done: false
  };

  ITEMS.push(item);

  makeList(ITEMS, ITEMS_LIST);

  localStorage.setItem('items', JSON.stringify(ITEMS));

  this.reset();

}

function makeList(items = [], itemsList) {

  itemsList.innerHTML = items.map((item, i) => {
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${item.done ? 'checked' : ''}>
        <label for="item${i}">${item.text}</label>
      </li>
    `;
  }).join('');

}

function toggleDone(ev) {

  if (!ev.target.matches('input')) return;

  const el = ev.target;
  const index = el.dataset.index;

  ITEMS[index].done = !ITEMS[index].done;
  localStorage.setItem('items', JSON.stringify(ITEMS));
  makeList(ITEMS, ITEMS_LIST);

}

function clearStorage() {

  while (ITEMS_LIST.firstChild) {
    ITEMS_LIST.removeChild(ITEMS_LIST.lastChild);
  }

  localStorage.clear();

}

CLEAR_STORAGE.addEventListener('click', clearStorage);
ADD_ITEMS.addEventListener('submit', addItem);
ITEMS_LIST.addEventListener('click', toggleDone);

makeList(ITEMS, ITEMS_LIST);
