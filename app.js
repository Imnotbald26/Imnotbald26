const todoInput = document.querySelector(".todo_input");
const todoBtn = document.querySelector(".todo_btn");
const todoList = document.querySelector(".todo_list")
const filterOption = document.querySelector(".filter-todo")
const landBtn = document.querySelector(".landscape_btn");
const body = document.querySelector("body");
const landscapes = document.querySelector(".landscapes");

todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", btnCheck)
filterOption.addEventListener("click", filterTodo);
landBtn.addEventListener("click", function(){
    landscapes.style.opacity = 100;
})

function addTodo(e){
    if(todoInput.value){
        e.preventDefault();
        // to do div
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        // create li
        const newTodo = document.createElement("li");
        newTodo.innerText = todoInput.value;
        newTodo.classList.add("todo_item")
        todoDiv.appendChild(newTodo);
        //check mark button
        const compeletedButton = document.createElement("button");
        compeletedButton.innerHTML = '<i class="fa-solid fa-thumbtack"></i>'
        compeletedButton.classList.add("complete_btn")
        todoDiv.appendChild(compeletedButton);
        // trash button
        const trashButton = document.createElement("button");
        trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>'
        trashButton.classList.add("trash_btn")
        todoDiv.appendChild(trashButton);
        // append to do list
        todoList.appendChild(todoDiv);
        // input settings
        todoInput.value = "";
    }
}

function btnCheck(e){
    const item = e.target;
    //delete
    if(item.classList[0] === "trash_btn"){
        item.parentElement.remove();
    }
    if(item.classList[0] === "complete_btn"){
        item.parentElement.classList.toggle("complited")
    }

}

function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        if(e.target.value === "all"){
            todo.style.display = "flex";
        }
        else if(e.target.value === "completed"){
            if(todo.classList.contains("complited")){
                todo.style.display = "flex";
            }
            else{
                todo.style.display = "none";
            }
        
        }
        else if(e.target.value === "uncompleted"){
            if(todo.classList.contains("complited")){
                todo.style.display = "none";
            }
            else{
                todo.style.display = "flex";
            }
        }
    })
}

