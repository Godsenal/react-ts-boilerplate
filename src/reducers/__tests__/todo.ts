import {
  toggleTodo,
  addTodoActions,
  fetchTodoActions,
} from '../../actions/todo';
import todo, { TodoState } from '../todo';

describe('todo reducer', () => {
  const initialState: TodoState = {
    add: {
      status: 'INIT',
    },
    delete: {
      status: 'INIT',
    },
    fetch: {
      status: 'INIT',
    },
    todos: [],
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
    const expected = { ...initialState, add: { status: 'FETCHING' }};
    // act
    const actual = todo(initialState, addTodoActions.fetching({newTodo}));
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
    const expected = { ...initialState, fetch: { status: 'FETCHING' } };
    // act
    const actual = todo(undefined, fetchTodoActions.fetching(3));
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
      fetch: {
        status: 'SUCCESS',
      },
    };
    // act
    const actual = todo(undefined, fetchTodoActions.success({ todos }));
    // assert
    expect(actual).toEqual(expected);
  });
  it('should handle fetchTodoFailure', () => {
    // arrange
    const message = 'error';
    const expected = {
      ...initialState,
      fetch: {
        status: 'FAILURE',
      },
      message,
    };
    // act
    const actual = todo(undefined, fetchTodoActions.failure({ message }));
    // assert
    expect(actual).toEqual(expected);
  });
});