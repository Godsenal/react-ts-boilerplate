
import { Todo } from '../types';
import * as ActionTypes from '../constants';

// action's return type.


export interface AddTodo {
  type: typeof ActionTypes.ADD_TODO;
  todo: Todo;
}
export interface DeleteTodo {
  type: typeof ActionTypes.DELETE_TODO;
  payload: {
    id: number;
  }
}

export interface AddTodoFetching {
  type: typeof ActionTypes.ADD_TODO_FETCHING;
}
export interface AddTodoSuccess {
  type: typeof ActionTypes.ADD_TODO_SUCCESS
  todos: Todo[];
}
export interface AddTodoFailure {
  type: typeof ActionTypes.ADD_TODO_FAILURE;
}
export interface DeleteTodoFetching {
  type: typeof ActionTypes.DELETE_TODO_FETCHING;
  id: string;
}
export interface DeleteTodoSuccess {
  type: typeof ActionTypes.DELETE_TODO_SUCCESS;
}
export interface DeleteTodoFailure {
  type: typeof ActionTypes.DELETE_TODO_FAILURE;
}
export interface FetchTodo {
  type: typeof ActionTypes.FETCH_TODO;
}
export interface FetchTodoFetching {
  type: typeof ActionTypes.FETCH_TODO_FETCHING;
  length: number;
}
export interface FetchTodoSuccess {
  type: typeof ActionTypes.FETCH_TODO_SUCCESS;
  todos: Todo[];
}
export interface FetchTodoFailure {
  type: typeof ActionTypes.FETCH_TODO_FAILURE;
  message: string;
}
export interface ToggleTodo {
  type: typeof ActionTypes.TOGGLE_TODO;
  id: number;
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
  | AddTodoFetching
  | AddTodoSuccess
  | AddTodoFailure
  | DeleteTodo
  | DeleteTodoFetching
  | DeleteTodoSuccess
  | DeleteTodoFailure
  | ToggleTodo
  | FetchTodo
  | FetchTodoFetching
  | FetchTodoSuccess
  | FetchTodoFailure;
// union type of Typescript.
// used as paramter in reducer function. reducers/todo.ts

const action = (type: any, payload: any = {}): TodoAction => {
  return {
    type,
    ...payload,
  } as TodoAction;
}

/* hadnled by Saga */
type BaseRequest = 'fetching' | 'success' | 'failure';
export type BaseActions = Record<BaseRequest, (payload?: any) => TodoAction>;
export const addTodoActions: BaseActions = {
  fetching: (payload?: any) => action(ActionTypes.ADD_TODO_FETCHING, payload),
  success: (payload?: any) => action(ActionTypes.ADD_TODO_SUCCESS, payload),
  failure: (payload?: any) => action(ActionTypes.ADD_TODO_FAILURE, payload),
};

export const deleteTodoActions: BaseActions = {
  fetching: (payload?: any) => action(ActionTypes.DELETE_TODO_FETCHING, payload),
  success: (payload?: any) => action(ActionTypes.DELETE_TODO_SUCCESS, payload),
  failure: (payload?: any) => action(ActionTypes.DELETE_TODO_FAILURE, payload),
}
export const fetchTodoActions: BaseActions = {
  fetching: (payload?: any) => action(ActionTypes.FETCH_TODO_FETCHING, payload),
  success: (payload?: any) => action(ActionTypes.FETCH_TODO_SUCCESS, payload),
  failure: (payload?: any) => action(ActionTypes.FETCH_TODO_FAILURE, payload),
}

/* called in components */
export const addTodo = (todo: Todo) => action(ActionTypes.ADD_TODO, { todo });
export const deleteTodo = (id: number) => action(ActionTypes.DELETE_TODO, { id });
export const fetchTodo = (length: number) => action(ActionTypes.FETCH_TODO, { length });
export const toggleTodo = (id: number) => action(ActionTypes.TOGGLE_TODO, { id });