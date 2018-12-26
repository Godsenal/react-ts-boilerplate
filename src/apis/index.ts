/* mock api */
import { store } from '../containers/Root';
import Todo from '../types/Todo';
import delay from '../utils/delay';
import { generateId } from '../utils/id';

const withDelay = (fn: Function) => async (payload: any) => {
  await delay();
  return fn(payload);
}
export const addTodo = withDelay(({ todo }: { todo: Todo}) => {
  const state = store.getState();
  return {
    todos: [...state.todo.todos, todo],
  }
});

export const deleteTodo = withDelay(({ id }: { id: number }) => {
  const state = store.getState();
  return {
    todos: state.todo.todos.filter(todo => todo.id !== id),
  }
});

export const fetchTodo = withDelay(({ length }: { length: number }) => {
  const state = store.getState();
  const randomTodos = [...Array(length)].map(() => ({
    id: generateId(),
    description: 'fetched!',
    done: false,
  }))
  return {
    todos: [...state.todo.todos, ...randomTodos],
  }
})
