import './index.css';
import CheckBoxes from './Checkbox.js';
import LoadTask from './LoadTask.js';
import AddTask from './AddTask.js';
import RemoveTask from './RemoveTask.js';

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
toDoList.addEventListener('keyup', (event) => {
  if (event.target.classList.contains('task-description')) {
    const index = parseInt(event.target.closest('input').dataset.index, 10);
    const task = tasks.find((task) => task.index === index);
    task.description = event.target.value;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
});

// clear all completed tasks
const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const filtered = tasks.filter((task) => !task.completed);
  filtered.forEach((task, i) => { task.index = i + 1; });
  localStorage.setItem('tasks', JSON.stringify(filtered));
  LoadTask(filtered);
});