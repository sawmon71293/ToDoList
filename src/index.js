import './index.css';

const toDoList = document.getElementById('todolist');

// load saved tasks
const loadTask = (tasks) => {
  tasks.sort((a, b) => a.index - b.index);

  toDoList.innerHTML = '';
  tasks.forEach((task) => {
    const template = ` <li class= "border-bottom border-opacity-10 p-3 d-flex justify-content-between">
                          <div class="inputs">
                            <input type="checkbox" data-index="${task.index}" ${
      task.completed ? 'checked' : ''
    } class="me-2 mt-2" />
                            <input type="text" class="task-description" data-index="${
                              task.index
                            }" value ="${
      task.description
    }" oninput="this.style.width = ((this.value.length + 1) * 8) + 'px';"/>
                          </div>
                          <div class="buttons">
                            <div class="ellipsis">
                              <button class="btn btn-ellipsis" data-index="${
                                task.index
                              }">
                                <i class="fa-solid fa-ellipsis-vertical"></i>
                              </button>
                            </div>
                            <div class="hidden">
                              <button class="btn btn-trash" data-index="${
                                task.index
                              }">
                                <i class="fa-solid fa-trash-can"></i>
                              </button>
                            </div>
                          </div>
                        </li>`;
    toDoList.innerHTML += template;
  });
};

// add new task
const addTask = () => {
  const add = document.getElementById('add').value;
  const tasks = JSON.parse(localStorage.getItem('tasks') || JSON.stringify([]));
  const newTask = {
    description: add,
    completed: false,
    index: tasks.length + 1,
  };

  tasks.push(newTask);
  loadTask(tasks);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

// remove a task
const removeTask = (value) => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const filtered = tasks.filter((task) => task.index !== parseInt(value, 10));
  filtered.forEach((task, i) => {
    task.index = i + 1;
  });
  localStorage.setItem('tasks', JSON.stringify(filtered));
  loadTask(filtered);
};

// calling addTask() when user enters
const input = document.getElementById('add');
input.addEventListener('keyup', (event) => {
  event.preventDefault();
  if (event.key === 'Enter') {
    addTask();
  }
});

// loading Tasks when page loads
const tasks = JSON.parse(localStorage.getItem('tasks'));
if (tasks) loadTask(tasks);

// removing tasks
toDoList.addEventListener('click', (e) => {
  if (e.target.closest('.btn-ellipsis')) {
    const ellipsisBtn = e.target.closest('.btn-ellipsis');
    const trashBtn = ellipsisBtn.closest('.ellipsis').nextElementSibling;
    ellipsisBtn.classList.add('hidden');
    trashBtn.classList.remove('hidden');
  } else if (e.target.closest('.btn-trash')) {
    const trashBtn = e.target.closest('.btn-trash');
    removeTask(trashBtn.dataset.index);
  }
});

// check the boxes
toDoList.addEventListener('change', (event) => {
  if (event.target.type === 'checkbox') {
    const index = parseInt(event.target.dataset.index, 10);
    const task = tasks.find((task) => task.index === index);
    task.completed = event.target.checked;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
});

// editing the todos
toDoList.addEventListener('keyup', (event) => {
  if (event.target.classList.contains('task-description')) {
    const index = parseInt(event.target.closest('input').dataset.index, 10);
    const task = tasks.find((task) => task.index === index);
    task.description = event.target.value;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
});
