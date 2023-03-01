import './index.css';

const tasks = [
  {
    description: 'to cook',
    completed: true,
    index: 0,
  },
  {
    description: 'to make coffee',
    completed: false,
    index: 1,
  },
];

const loadList = (tasks) => {
  tasks.sort((a, b) => a.index - b.index);
  const toDoList = document.getElementById('todolist');
  toDoList.innerHTML = '';
  tasks.forEach((task) => {
    const template = ` <li class= "border-bottom border-opacity-10 p-3 d-flex justify-content-between">
                          <div>
                          <input type="checkbox" class="me-2 mt-2" />
                          ${task.description}
                          </div>
                          <div><div class="ellipsis"><button class="btn"><i class="fa-solid fa-ellipsis-vertical"></i></button></div>
                          <div class="trash"></i><i class="fa-solid fa-trash-can"></i></div>
                          </div>
                       </li>`;
    toDoList.innerHTML += template;
  });
};

loadList(tasks);
