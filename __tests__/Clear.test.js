import Clear from '../src/modules/Clear.js';
import LoadTask from '../src/modules/LoadTask.js';

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn().mockReturnValue(
    JSON.stringify([
      { task: 'Task 1', completed: true, index: 1 },
      { task: 'Task 2', completed: false, index: 2 },
    ])
  ),
  setItem: jest.fn(),
};
global.localStorage = localStorageMock;

// Mock LoadTask function
jest.mock('../src/modules/LoadTask.js', () => jest.fn());

describe('Clear function', () => {
  it('should remove completed tasks from localStorage and call LoadTask', () => {
    const e = { preventDefault: jest.fn() };
    Clear(e);
    expect(localStorageMock.setItem).toHaveBeenCalledTimes(1);
    expect(LoadTask).toHaveBeenCalledTimes(1);
  });
});
