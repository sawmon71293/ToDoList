import './index.css';
import CheckBoxes from './Checkbox.js';
import LoadTask from './LoadTask.js';
import AddTask from './AddTask.js';
import RemoveTask from './RemoveTask.js';
import Editing from './Editing';
import Clear from './Clear';

const toDoList = document.getElementById('todolist');

// calling addTask() when user enters
const input = document.getElementById('add');
input.addEventListener('keyup', (event) => {
  event.preventDefault();
  if (event.key === 'Enter') {
    AddTask();
  }
});

// loading Tasks when page loads
const tasks = JSON.parse(localStorage.getItem('tasks'));
if (tasks) LoadTask(tasks);

// removing tasks
toDoList.addEventListener('click', RemoveTask);

// check the boxes
toDoList.addEventListener('change', CheckBoxes);

// editing the todos
toDoList.addEventListener('keyup', Editing);

// clear all completed tasks
const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', Clear);