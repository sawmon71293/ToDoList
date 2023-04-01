const Editing = (event) => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  if (event.target.classList.contains('task-description')) {
    const index = parseInt(event.target.closest('input').dataset.index, 10);
    const task = tasks.find((task) => task.index === index);
    task.description = event.target.value;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
};
export default Editing;