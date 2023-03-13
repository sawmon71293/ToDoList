import Clear from './Clear.js';
import LoadTask from './LoadTask.js';

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn().mockReturnValue(JSON.stringify([{ task: 'Task 1', completed: true, index: 1 }, { task: 'Task 2', completed: false, index: 2 }])),
  setItem: jest.fn(),
};
global.localStorage = localStorageMock;

// Mock LoadTask function
jest.mock('./LoadTask.js', () => jest.fn());

describe('Clear function', () => {
  it('should remove completed tasks from localStorage and call LoadTask', () => {
    Clear();
    expect(localStorageMock.setItem).toHaveBeenCalledTimes(1);
    expect(LoadTask).toHaveBeenCalledTimes(1);
  });

  it('should remove completed tasks from localStorage', () => {
    Clear();
    expect(localStorageMock.setItem).toHaveBeenCalledTimes(1);
    expect(localStorageMock.setItem).toHaveBeenCalledWith('tasks', JSON.stringify([{ task: 'Task 2', completed: false, index: 1 }]));
  });
});
