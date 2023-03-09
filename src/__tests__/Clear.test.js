import Clear from '../Clear';
import LoadTask from './LoadTask';
// Mock localStorage
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: (key) => store[key],
    setItem: (key, value) => { store[key] = value.toString(); },
    clear: () => { store = {}; },
  };
})();
global.localStorage = localStorageMock;
describe('Clear function', () => {
  it('should clear completed tasks from localStorage and call LoadTask', () => {
    // Setup
    const tasks = [
      { id: 1, description: 'Task 1', completed: true },
      { id: 2, description: 'Task 2', completed: false },
      { id: 3, description: 'Task 3', completed: true },
      { id: 4, description: 'Task 4', completed: false },
    ];
    localStorageMock.setItem('tasks', JSON.stringify(tasks));
    // Execute
    Clear({ preventDefault: () => { } });
    // Assert
    const updatedTasks = JSON.parse(localStorageMock.getItem('tasks'));
    const expectedTasks = [
      {
        id: 2, description: 'Task 2', completed: false, index: 1,
      },
      {
        id: 4, description: 'Task 4', completed: false, index: 2,
      },
    ];
    expect(updatedTasks).toEqual(expectedTasks);
    expect(LoadTask).toHaveBeenCalledWith(expectedTasks);
  });
});