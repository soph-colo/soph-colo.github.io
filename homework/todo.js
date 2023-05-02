// Create a class for the element
class Todo extends HTMLElement {
    // Specify observed attributes so that
    // attributeChangedCallback will work
    static get observedAttributes() {
      return ['c', 'l'];
    }
  
    constructor() {
      // Always call super first in constructor
      super();
  
      const shadow = this.attachShadow({mode: 'open'});
  
      const div = document.createElement('div');
      shadow.appendChild(style);
      shadow.appendChild(div);
    }
  
    connectedCallback() {
      console.log('Custom square element added to page.');
      updateStyle(this);
    }
  
    disconnectedCallback() {
      console.log('Custom square element removed from page.');
    }
  
    adoptedCallback() {
      console.log('Custom square element moved to new page.');
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      console.log('Custom square element attributes changed.');
      updateStyle(this);
    }
  }
  
  document.createElement('todo-element', Todo);
  
  const add = document.querySelector('.add');
  const update = document.querySelector('.update');
  const remove = document.querySelector('.remove');
  let todo;
  
  update.disabled = true;
  remove.disabled = true;

  let todoList = ["Clean room", "Wash dishes", "Fold laundry"];
  
  
  add.onclick = function() {
    // Create a custom todo element
    todo = document.createElement('todo-element');
    rand = Math.floor(Math.random() * todoList.length);
    todo.setAttribute(todoList[rand]);
    document.body.appendChild(todo);
  
    update.disabled = false;
    remove.disabled = false;
    add.disabled = true;
  };
  
  update.onclick = function() {
    // Randomly update square's attributes
    todo.setAttribute('l', random(50, 200));
    todo.setAttribute('c', `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`);
  };
  
  remove.onclick = function() {
    // Remove the square
    document.body.removeChild(todo);
  
    update.disabled = true;
    remove.disabled = true;
    add.disabled = false;
  };