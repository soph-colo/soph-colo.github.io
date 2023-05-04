//create todo class web compoenent
class Todo extends HTMLUListElement{

    //constructor (obviously)
    constructor(){

        //call superclass
        super();

        //set up in constructor
        const shadow = this.attachShadow({mode: 'open'});
        const div = document.createElement('div');
        shadow.appendChild(div);
    }
}


//button handling 
const add = document.querySelector('.add');
const remove = document.querySelector('.remove');
remove.disabled = true;

//variables for displaying lists

//html
let todoList = document.getElementById('todoList');

//options
let todoListOptions = ["Clean room", "Dry dishes", "Fold laundry", "Grocery shop", "Cook dinner", "Plan meals"];

//list to be altered here
let myList = [];
        
  
//adding a task
add.onclick = function() {
      
    //randomly generating a value in the list
    rand = Math.floor(Math.random() * todoListOptions.length);
    myList.push(todoListOptions[rand]);
        
    //adding it to the html element
    let li = document.createElement('li');
    li.innerText = todoListOptions[rand];
    todoList.appendChild(li);
     
    //handle buttons
    add.disabled = false;
    remove.disabled = false;
};


//removing a task
remove.onclick = function(){

    //random
    var l = document.getElementById('todoList').getElementsByTagName('li').length;
    rand = Math.floor(Math.random() * l);

    //removing the element
    var element = document.getElementById('todoList');
    element.removeChild(element.children[rand]);

    //handle buttons
    remove.disabled = false;
    add.disabled = false;
};
   

