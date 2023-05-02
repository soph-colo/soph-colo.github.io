
  
const add = document.querySelector('.add');
const update = document.querySelector('.update');
const remove = document.querySelector('.remove');
let todo;

update.disabled = true;
remove.disabled = true;

let todoList = document.getElementById('todoList');
let todoListOptions = ["Clean room", "Wash dishes", "Fold laundry"];
let myList = []

add.onclick = function() {

    rand = Math.floor(Math.random() *todoListOptions.length)
    myList.push(todoListOptions[rand]);

    let li = document.createElement('li');
    li.innerText = todoListOptions[rand];
    todoList.appendChild(li);

    update.disabled = false;
    remove.disabled = false;
  };

update.onlick = function(){

}
