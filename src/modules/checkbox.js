const CheckBoxes = (event) => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  if (event.target.type === 'checkbox') {
    const index = parseInt(event.target.dataset.index, 10);
    const task = tasks.find((task) => task.index === index);
    task.completed = event.target.checked;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
};

export default CheckBoxes;