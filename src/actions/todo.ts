import {
  ADD_TODO,
  TOGGLE_TODO,
  FETCH_TODO,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_FAILURE,
} from '../constants';
import { Todo } from '../types';
import todo from '../sagas/todo';

// action's return type.
export interface AddTodo {
  type: typeof ADD_TODO;
  todo: Todo;
}
export interface ToggleTodo {
  type: typeof TOGGLE_TODO;
  id: number;
}
export interface FetchTodo {
  type: typeof FETCH_TODO;
  length: number;
}
export interface FetchTodoSuccess {
  type: typeof FETCH_TODO_SUCCESS;
  todos: Todo[];
}
export interface FetchTodoFailure {
  type: typeof FETCH_TODO_FAILURE;
  message: string;
}
/*
    below code can be written like,
    export enum TodoActionTypes {
        ADD_TODO: 'ADD_TODO',
        TOGGLE_TODO: 'TOGGLE_TODO',
    }
*/
export type TodoAction =
  | AddTodo
  | ToggleTodo
  | FetchTodo
  | FetchTodoSuccess
  | FetchTodoFailure;
// union type of Typescript.
// used as paramter in reducer function. reducers/todo.ts

export function addTodo(id: number, description: string): AddTodo {
  return {
    type: ADD_TODO,
    todo: {
      id,
      description,
      done: false,
    },
  };
}
export function toggleTodo(id: number): ToggleTodo {
  return {
    type: TOGGLE_TODO,
    id,
  };
}
export function fetchTodo(length: number): FetchTodo {
  return {
    type: FETCH_TODO,
    length,
  };
}
export function fetchTodoSuccess(todos: Todo[]): FetchTodoSuccess {
  return {
    type: FETCH_TODO_SUCCESS,
    todos,
  };
}
export function fetchTodoFailure(message: string): FetchTodoFailure {
  return {
    type: FETCH_TODO_FAILURE,
    message,
  };
}
