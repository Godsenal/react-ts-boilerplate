import { Todo } from '../types';
import { TodoAction } from '../actions/todo';
import { 
  ADD_TODO,
  TOGGLE_TODO,
} from '../constants';

// Redux State must be immutable.
// Add 'readonly' property.
// This is not guarantee immutablity on nested object.
export interface TodoState {
  readonly todos: Todo[],
}

const initialState: TodoState = {
  todos: []
}
export default function todo(state: TodoState = initialState, action: TodoAction): TodoState  {
  switch (action.type) {
    case ADD_TODO: {
      const { todo } = action;
      return {
        ...state,
        todos: [...state.todos, todo],
      }
    }
    case TOGGLE_TODO: {
      const { id } = action;
      return {
        ...state,
        todos: state.todos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo),
      };
    }
    default:
      return state;
  }
}
