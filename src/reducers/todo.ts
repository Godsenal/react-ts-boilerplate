import { createSelector } from 'reselect';
import { RootState, Todo, Filter, Request } from '../types';
import { TodoAction } from '../actions/todo';
import * as ActionTypes from '../constants';

// Redux State must be immutable.
// Add 'readonly' property.
// This is not guarantee immutablity on nested object.

/* Type Definition */
export interface TodoState {
  add: {
    status: Request;
  },
  delete: {
    status: Request;
  },
  fetch: {
    status: Request;
  },
  todos: Todo[];
  message: string;
}

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

/* Selector Definition */
const todoSelector = (state: RootState) => state.todo.todos;
const filterSelector = (state: RootState) => state.filter.filter;

export const getVisibleTodo = createSelector(
  [todoSelector, filterSelector],
  (todos, filter) => {
    switch (filter) {
      case Filter.ALL: {
        return todos;
      }
      case Filter.COMPLETED: {
        return todos.filter(item => item.done);
      }
      case Filter.INCOMPLETED: {
        return todos.filter(item => !item.done);
      }
      default: {
        return todos;
      }
    }
  },
);

/* Reducer Definition */
export default function todo(
  state: TodoState = initialState,
  action: TodoAction,
): TodoState {
  switch (action.type) {
    case ActionTypes.ADD_TODO_FETCHING: {
      return {
        ...state,
        add: {
          status: 'FETCHING'
        }
      };
    }
    case ActionTypes.ADD_TODO_SUCCESS: {
      return {
        ...state,
        add: {
          status: 'SUCCESS'
        },
        todos: action.todos,
      }
    }
    case ActionTypes.ADD_TODO_FAILURE: {
      return {
        ...state,
        add: {
          status: 'FAILURE',
        }
      };
    }
    case ActionTypes.TOGGLE_TODO: {
      const { id } = action;
      return {
        ...state,
        todos: state.todos.map(
          todo => (todo.id === id ? { ...todo, done: !todo.done } : todo),
        ),
      };
    }
    case ActionTypes.FETCH_TODO_FETCHING: {
      return {
        ...state,
        fetch: {
          status: 'FETCHING',
        }
      };
    }
    case ActionTypes.FETCH_TODO_SUCCESS: {
      return {
        ...state,
        fetch: {
          status: 'SUCCESS',
        },
        todos: action.todos,
      };
    }
    case ActionTypes.FETCH_TODO_FAILURE: {
      return {
        ...state,
        fetch: {
          status: 'FAILURE',
        },
        message: action.message,
      };
    }
    default:
      return state;
  }
}
