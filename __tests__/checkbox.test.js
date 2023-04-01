import CheckBoxes from '../src/modules/checkbox.js';

const LocalStorageMock = {
  getItem: jest.fn().mockReturnValue(JSON.stringify([
    { index: 1, description: 'Task 1', completed: false },
    { index: 2, description: 'Task 2', completed: false },
    { index: 3, description: 'Task 3', completed: false },
  ])),
  setItem: jest.fn(),
};

describe('CheckBoxes', () => {
  beforeEach(() => {
    global.localStorage = LocalStorageMock;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('updates the completed status of a task in localStorage', () => {
    const event = { target: { type: 'checkbox', dataset: { index: '2' }, checked: true } };
    CheckBoxes(event);
    const updatedTasks = JSON.parse(localStorage.setItem.mock.calls[0][1]);
    expect(updatedTasks[1].completed).toBe(true);
  });

  test('does not update localStorage for non-checkbox events', () => {
    const event = { target: { type: 'button' } };
    CheckBoxes(event);
    expect(localStorage.setItem).not.toHaveBeenCalled();
  });
});
