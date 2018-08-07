import {
  addTodo,
  toggleTodo,
  fetchTodo,
  fetchTodoSuccess,
  fetchTodoFailure,
} from '../../actions/todo';
import todo from '../todo';

describe('todo reducer', () => {
  const initialState = {
    todos: [],
    status: 'INIT',
    message: '',
  };
  it('should have initial value', () => {
    // arrange
    const expected = initialState;
    // act
    const actual = todo(undefined, {} as any); // any action for test.
    // assert
    expect(actual).toEqual(expected);
  });
  it('should handle addTodo', () => {
    // arrange
    const newTodo = { id: 0, description: 'todo', done: false };
    const expected = { ...initialState, todos: [newTodo]};
    // act
    const actual = todo(initialState, addTodo(newTodo.id, newTodo.description));
    // assert
    expect(actual).toEqual(expected);
  });
  it('should handle toggleTodo', () => {
    // arrange
    const addedTodo = { id: 0, description: 'todo', done: false };
    const toggleId = addedTodo.id;
    const expected = { ...initialState, todos: [{ id: 0, description: 'todo', done: true }]} // added from above.
    // act
    const actual = todo({ ...initialState, todos: [addedTodo]}, toggleTodo(toggleId));
    // asssert
    expect(actual).toEqual(expected);
  });
  it('should handle fetchTodo', () => {
    // arrange
    const expected = { ...initialState, status: 'WAITING' };
    // act
    const actual = todo(undefined, fetchTodo(3));
    // assert
    expect(actual).toEqual(expected);
  });
  it('should handle fetchTodoSuccess', () => {
    // arrange
    const todos = [
      { id: 0, description: 'todo', done: false },
      { id: 1, description: 'todo', done: false }
    ];
    const expected = {
      ...initialState,
      todos,
      status: 'SUCCESS',
    };
    // act
    const actual = todo(undefined, fetchTodoSuccess(todos));
    // assert
    expect(actual).toEqual(expected);
  });
  it('should handle fetchTodoFailure', () => {
    // arrange
    const message = 'error';
    const expected = {
      ...initialState,
      message,
      status: 'FAILURE',
    };
    // act
    const actual = todo(undefined, fetchTodoFailure(message));
    // assert
    expect(actual).toEqual(expected);
  });
});