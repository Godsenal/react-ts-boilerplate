
/* For test selector */
import { getVisibleTodo } from '../todo';
import { Filter } from '../../types';

describe('todo selector', () => {
  const todo = {
    todos: [{
      id: 0,
      description: 'completed todo',
      done: true,
    }, {
      id: 1,
      description: 'incompleted todo',
      done: false,
    }],
    status: 'INIT',
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