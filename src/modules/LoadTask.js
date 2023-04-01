const LoadTask = (tasks) => {
  const toDoList = document.getElementById('todolist');
  tasks.sort((a, b) => a.index - b.index);
  toDoList.innerHTML = '';
  tasks.forEach((task) => {
    const template = ` <li class= "border-bottom border-opacity-10 p-3 d-flex justify-content-between">
                            <div class="inputs">
                              <input type="checkbox" data-index="${
  task.index
}" ${
  task.completed ? 'checked' : ''
} class="me-2 mt-2" />
                              <input type="text" class="task-description" data-index="${
  task.index
}" value ="${task.description}" />
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

export default LoadTask;
