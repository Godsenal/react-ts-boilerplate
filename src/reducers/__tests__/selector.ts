
/* For test selector */
import { getVisibleTodo, TodoState } from '../todo';
import { Filter } from '../../types';

describe('todo selector', () => {
  const todo: TodoState = {
    add: {
      status: 'INIT',
    },
    delete: {
      status: 'INIT',
    },
    fetch: {
      status: 'INIT',
    },
    todos: [{
      id: 0,
      description: 'completed todo',
      done: true,
    }, {
      id: 1,
      description: 'incompleted todo',
      done: false,
    }],
    message: '',
  };
  const filter = {
    filter: Filter.COMPLETED,
  };
  const rootState = {
    todo,
    filter,
  };
  it('should select visible todos', () => {
    // arrange
    const expected = [{
      id: 0,
      description: 'completed todo',
      done: true,
    }];
    // act
    const actual = getVisibleTodo(rootState);
    // assert
    expect(actual).toEqual(expected);
  });
})