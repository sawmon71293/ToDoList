import LoadTask from './LoadTask.js';

const RemoveTask = (e) => {
  if (e.target.closest('.btn-ellipsis')) {
    const ellipsisBtn = e.target.closest('.btn-ellipsis');
    const trashBtn = ellipsisBtn.closest('.ellipsis').nextElementSibling;
    ellipsisBtn.classList.add('hidden');
    trashBtn.classList.remove('hidden');
  } else if (e.target.closest('.btn-trash')) {
    const trashBtn = e.target.closest('.btn-trash');
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const filtered = tasks.filter((task) => task.index !== parseInt(trashBtn.dataset.index, 10));
    filtered.forEach((task, i) => {
      task.index = i + 1;
    });
    localStorage.setItem('tasks', JSON.stringify(filtered));
    LoadTask(filtered);
  }
};
export default RemoveTask;