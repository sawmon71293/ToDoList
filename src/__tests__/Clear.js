import LoadTask from './LoadTask.js';

const Clear = () => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const filtered = tasks.filter((task) => !task.completed);
  filtered.forEach((task, i) => { task.index = i + 1; });
  localStorage.setItem('tasks', JSON.stringify(filtered));
  LoadTask(filtered);
};

export default Clear;