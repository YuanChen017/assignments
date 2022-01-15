import { todoApi } from './todoApis.js';

/*
Given an Api, implement a todo app(features includes Add a todo, Change a todo Status, Delete Todo) in Vanilla JavaScript. 
FYI: You can add some css styles you want.
*/

//implement your app here
const inputtext = document.createElement('input');
inputtext.name = 'input';
inputtext.type = Text;
inputtext.placeholder = 'add todo';
document.body.appendChild(inputtext);
const submit = document.createElement('button');
submit.textContent = "Add Todo";
document.body.appendChild(submit);
const linebreak = document.createElement('br')
const horizontalline = document.createElement('hr')
document.body.appendChild(linebreak);
document.body.appendChild(horizontalline);
const listoftodo = document.createElement('ul');
listoftodo.id = 'listtodos';
document.body.appendChild(listoftodo);
inputtext.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        if (inputtext.value !== '') {
            const exists = todoApi.todos.some(
                (ele) => ele.content === inputtext.value
            );
            if (!exists) {
                todoApi.addTodo({ content: inputtext.value, isCompleted: false });
                const todoitem = document.createElement('li');
                todoitem.textContent = inputtext.value;
                listoftodo.appendChild(todoitem);
                const text = todoitem.textContent;
                todoitem.addEventListener('dblclick', function() {
                    const index = todoApi.todos.findIndex((ele) => ele.content === text);
                    if (todoApi.todos[index].isCompleted === false) {
                        todoitem.style.textDecorationLine = "line-through";
                        todoApi.modTodo(index);
                    } else if (todoApi.todos[index].isCompleted === true) {
                        todoitem.style.textDecorationLine = "none";
                        todoApi.modTodo(index);
                    }
                    todoApi.getAllTodos().then(res => console.log(res));
                })
                const removetodo = document.createElement('button');
                removetodo.textContent = 'Delete Todo';
                todoitem.appendChild(removetodo);
                removetodo.addEventListener('click', function() {
                    const index = todoApi.todos.findIndex((ele) => ele.content === text);
                    console.log(index);
                    if (todoApi.todos[index].isCompleted === true) {
                        todoitem.parentNode.removeChild(todoitem);
                        todoApi.delTodo(index);
                    }
                    todoApi.getAllTodos().then(res => console.log(res));
                })
            } else {
                alert('todo event existed');
            }
        }
    }
});
submit.addEventListener('click', function() {
    if (inputtext.value !== '') {
        todoApi.getAllTodos().then((res) => {
            const exists = todoApi.todos.some(
                (ele) => ele.content === inputtext.value
            );
            if (!exists) {
                todoApi.addTodo({ content: inputtext.value, isCompleted: false });
                const todoitem = document.createElement('li');
                todoitem.textContent = inputtext.value;
                listoftodo.appendChild(todoitem);
                const text = todoitem.textContent;
                todoitem.addEventListener('dblclick', function() {
                    const index = todoApi.todos.findIndex((ele) => ele.content === text);
                    if (todoApi.todos[index].isCompleted === false) {
                        todoitem.style.textDecorationLine = "line-through";
                        todoApi.modTodo(index);
                    } else if (todoApi.todos[index].isCompleted === true) {
                        todoitem.style.textDecorationLine = "none";
                        todoApi.modTodo(index);
                    }
                    todoApi.getAllTodos().then(res => console.log(res));
                })
                const removetodo = document.createElement('button');
                removetodo.textContent = 'Delete Todo';
                todoitem.appendChild(removetodo);
                removetodo.addEventListener('click', function() {
                    const index = todoApi.todos.findIndex((ele) => ele.content === text);
                    console.log(index);
                    if (todoApi.todos[index].isCompleted === true) {
                        todoitem.parentNode.removeChild(todoitem);
                        todoApi.delTodo(index);
                    }
                    todoApi.getAllTodos().then(res => console.log(res));
                })
            } else {
                alert('todo event existed');
            }

        })
    }
});