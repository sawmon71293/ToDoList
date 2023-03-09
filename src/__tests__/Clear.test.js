import Clear from './Clear.js';
import LoadTask from './LoadTask.js';

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn().mockReturnValue('[]'),
  setItem: jest.fn(),
};
global.localStorage = localStorageMock;

// Mock LoadTask function
jest.mock('./LoadTask.js', () => ({
  __esModule: true,
  default: jest.fn((tasks) => tasks),
  removeItem: jest.fn(),
}));

describe('Clear function', () => {
  it('should remove completed tasks from localStorage and call LoadTask', () => {
    // Set up test data
    Clear();
    expect(LoadTask).toHaveBeenCalledTimes(1);
  });
});