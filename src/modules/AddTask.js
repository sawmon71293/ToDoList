import LoadTask from './LoadTask.js';

const AddTask = () => {
  const add = document.getElementById('add').value;
  const tasks = JSON.parse(localStorage.getItem('tasks') || JSON.stringify([]));
  const newTask = {
    description: add,
    completed: false,
    index: tasks.length + 1,
  };

  tasks.push(newTask);
  LoadTask(tasks);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export default AddTask;