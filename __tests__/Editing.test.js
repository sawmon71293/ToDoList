import Editing from '../src/modules/Editing.js';
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
describe('Editing function', () => {
  it('should update the description of a task in localStorage', () => {
    // Setup
    const tasks = [
      {
        id: 1, description: 'Task 1', completed: false, index: 1,
      },
      {
        id: 2, description: 'Task 2', completed: true, index: 2,
      },
      {
        id: 3, description: 'Task 3', completed: false, index: 3,
      },
    ];
    localStorageMock.setItem('tasks', JSON.stringify(tasks));
    const event = {
      target: {
        classList: { contains: jest.fn((className) => className === 'task-description') },
        value: 'New description',
        closest: jest.fn(() => ({ dataset: { index: '2' } })),
      },
    };
    // Execute
    Editing(event);
    // Assert
    const updatedTasks = JSON.parse(localStorageMock.getItem('tasks'));
    const expectedTasks = [
      {
        id: 1, description: 'Task 1', completed: false, index: 1,
      },
      {
        id: 2, description: 'New description', completed: true, index: 2,
      },
      {
        id: 3, description: 'Task 3', completed: false, index: 3,
      },
    ];
    expect(updatedTasks).toEqual(expectedTasks);
  });
  it('should not update localStorage if the event target is not a task description', () => {
    // Setup
    const tasks = [
      {
        id: 1, description: 'Task 1', completed: false, index: 1,
      },
      {
        id: 2, description: 'Task 2', completed: true, index: 2,
      },
      {
        id: 3, description: 'Task 3', completed: false, index: 3,
      },
    ];
    localStorageMock.setItem('tasks', JSON.stringify(tasks));
    const event = {
      target: {
        classList: { contains: jest.fn((className) => className !== 'task-description') },
      },
    };
    // Execute
    Editing(event);
    // Assert
    const updatedTasks = JSON.parse(localStorageMock.getItem('tasks'));
    expect(updatedTasks).toEqual(tasks);
  });
});