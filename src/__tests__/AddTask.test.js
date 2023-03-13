import { JSDOM } from 'jsdom';
import AddTask from './AddTask.js';
import LoadTask from './LoadTask.js';

jest.mock('./LoadTask.js');

// create the mocked document object

afterEach(() => {
  // remove the mocked document object from the global scope
  delete global.document;
});
describe('AddTask', () => {
  let dom;

  beforeEach(() => {
    dom = new JSDOM('<!DOCTYPE html><html><body><div id="add"></div></body></html>');
    global.document = dom.window.document;
  });

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
