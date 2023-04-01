import Clear from '../src/modules/Clear.js';
import LoadTask from '../src/modules/LoadTask.js';

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn().mockReturnValue('[]'),
  setItem: jest.fn(),
};
global.localStorage = localStorageMock;

// Mock LoadTask function
jest.mock('../src/modules/LoadTask.js', () => ({
  __esModule: true,
  default: jest.fn((tasks) => tasks),
  removeItem: jest.fn(),
}));

describe('Clear function', () => {
  it('should remove completed tasks from localStorage and call LoadTask', () => {
    // Set up test data
    const e = { preventDefault: jest.fn() };
    Clear(e);
    expect(LoadTask).toHaveBeenCalledTimes(1);
  });
});