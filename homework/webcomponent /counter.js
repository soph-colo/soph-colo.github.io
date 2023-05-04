//create a taskcounter class
class TaskCounter extends HTMLParagraphElement {
    
    constructor() {
        
        super();

        //setup
        const shadow = this.attachShadow({mode: 'open'});
        
        //parent element
        const listParent = this.parentNode;

        //counting the tasks by getting the elements tagged with li
        function countTasks(node){
            const task = node.getElementsByTagName('li').length;
            return task;
        }

        //holding the count
        const count = `Tasks: ${countTasks(listParent)}`;

        //text that can be counted
        const text = document.createElement('span');
        text.textContent = count;

        //add to shadow root
        shadow.appendChild(text);

        //update when the length is updated
        setInterval(function() {
            const count = `Tasks: ${countTasks(listParent)}`;
            text.textContent = count;
        }, 200);
    }
}

//define the new element
customElements.define('count-tasks', TaskCounter, { extends: 'p' });