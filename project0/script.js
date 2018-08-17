const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
let itemCount =0;
let uncheckedCount =0;
let listItems = [];
itemCountSpan.innerHTML = itemCount;
uncheckedCountSpan.innerHTML = uncheckedCount;


function newTodo() {
  itemCount++;
  uncheckedCount++;
  itemCountSpan.innerHTML = itemCount;
  uncheckedCountSpan.innerHTML = uncheckedCount;
  let item = document.createElement("LI");
  item.setAttribute("class", list);
  item.innerHTML = "Todo Item " + itemCount;
  list.appendChild(item);
}
