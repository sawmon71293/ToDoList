import RemoveTask from '../src/modules/RemoveTask.js';

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
  test('should hide the ellipsis button and show the trash button when a task is removed', () => {
    const mockEvent = {
      target: {
        closest: jest.fn(() => mockEllipsisBtn),
      },
    };
    // Call the function with the mock event
    RemoveTask(mockEvent);
    // Check that the ellipsis button is hidden and the trash button is shown
    expect(mockEllipsisBtn.classList.add).toHaveBeenCalledWith('hidden');
    expect(mockTrashBtn.classList.remove).toHaveBeenCalledWith('hidden');
  });
});
