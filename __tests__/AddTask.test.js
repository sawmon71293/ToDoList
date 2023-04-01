import AddTask from '../src/modules/AddTask.js';
import LoadTask from '../src/modules/LoadTask.js';

jest.mock('../src/modules/LoadTask.js');
let mockDocument;

beforeEach(() => {
  // create the mocked document object
  mockDocument = {
    getElementById: jest.fn(),
    addEventListener: jest.fn(),
    // other properties and methods as needed
  };

  // assign the mocked document object to the global scope
  global.document = mockDocument;
});

afterEach(() => {
  // remove the mocked document object from the global scope
  delete global.document;
});
describe('AddTask', () => {
  it('should add a new task to the list and update local storage', () => {
    // arrange
    const addInput = { value: 'New task' };
    document.getElementById = jest.fn().mockReturnValue(addInput);
    const localStorageMock = {
      getItem: jest.fn().mockReturnValue('[]'),
      setItem: jest.fn(),
    };
    global.localStorage = localStorageMock;

    // act
    AddTask();

    // assert
    expect(localStorageMock.setItem).toHaveBeenCalledTimes(1);
    expect(localStorageMock.setItem).toHaveBeenCalledWith('tasks', JSON.stringify([{ description: 'New task', completed: false, index: 1 }]));
    expect(LoadTask).toHaveBeenCalledTimes(1);
    expect(LoadTask).toHaveBeenCalledWith([{ description: 'New task', completed: false, index: 1 }]);
  });
});
