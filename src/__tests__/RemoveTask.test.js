import RemoveTask from './RemoveTask.js';
describe('RemoveTask function', () => {
  let mockEllipsisBtn;
  let mockTrashBtn;
  const mockLocalStorage = {
    getItem: jest.fn(),
    setItem: jest.fn(),
  };
  beforeEach(() => {
    // Create mock HTML elements
    mockEllipsisBtn = {
      classList: {
        add: jest.fn(),
      },
      closest: jest.fn(() => ({
        classList: {
          add: jest.fn(),
        },
        nextElementSibling: mockTrashBtn,
      })),
    };
    mockTrashBtn = {
      classList: {
        remove: jest.fn(),
      },
      dataset: { index: '1' }, // added dataset property to fix the error
    };
    // Set up localStorage mock
    mockLocalStorage.getItem.mockReturnValueOnce(
      JSON.stringify([{ index: 1, text: 'Task 1' }, { index: 2, text: 'Task 2' }]),
    );
    global.localStorage = mockLocalStorage;
  });
  afterEach(() => {
    jest.resetAllMocks();
  });