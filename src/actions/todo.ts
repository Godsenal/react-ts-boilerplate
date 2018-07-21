import {
    ADD_TODO,
    TOGGLE_TODO,
} from '../constants';
import { Todo } from '../types';

// action's return type.
export interface AddTodo {
    type: typeof ADD_TODO;
    todo: Todo,
}
export interface ToggleTodo {
    type: typeof TOGGLE_TODO,
    id: number,
}

/*
    below code can be written,
    export enum TodoActionTypes {
        ADD_TODO: 'ADD_TODO',
        TOGGLE_TODO: 'TOGGLE_TODO',
    }
*/
export type TodoAction = AddTodo | ToggleTodo;
// union type of Typescript.
// used as paramter in reducer function. reducers/todo.ts

export function addTodo(id: number, description: string): AddTodo {
    return {
        type: ADD_TODO,
        todo: {
            id,
            description,
            done: false,
        }
    };
}
export function toggleTodo(id: number): ToggleTodo {
    return {
        type: TOGGLE_TODO,
        id,
    };
}
