// a JavaScript file that tells the page what to do; you’ll be doing most of your coding in this file.
//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
// add the querySelector for todoList

//Event Listeners
todoButton.addEventListener('click', addTodo);
// add the addEventListener for todoList which has a callback function (deleteCheck)

//Functions
function addTodo(event){
    // console.log(event.target);
    // prevent form from submitting
    event.preventDefault();
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // create a const that is equal to the li element 
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // Checkmark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    // Delete button
     // create the button for a delete element (similar to completedButton but call this button deleteButton)
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>'
    // add a new class to the delete button like line 25 (give it a class name of delete-btn)
    todoDiv.appendChild(deleteButton);
    // Append to list
    todoList.appendChild(todoDiv);
    // clear todo input value
    todoInput.value = "";
};

function deleteCheck(e){
    // const item = e.target;
    // if(item.classList[0] === 'delete-btn'){
    //     const todo = item.parentElement;
    //     todo.remove();
    //}
    // create an if statement add functionality to the complete btn
}


