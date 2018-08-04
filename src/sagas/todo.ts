import { all, fork, call, put, takeLatest } from 'redux-saga/effects';
import {
    FetchTodo,
    fetchTodoSuccess,
    fetchTodoFailure,
} from '../actions/todo';
import {
    FETCH_TODO,
} from '../constants';
import { Todo } from '../types';
import { generateId } from '../utils/id';

function fakeFetch(length: number, ms: number) {
    return new Promise(resolve => {
        setTimeout(() => {
            const fakeTodos: Todo[] = Array.apply(null, Array(length)).map(() => ({
                id: generateId(),
                description: 'fake Fetched Todo!',
                done: false,
            }));
            resolve(fakeTodos);
        }, ms);
    })
}
function* fetchTodo(actions: FetchTodo) {
    try {
        const { length } = actions;
        if (length <= 0 || length > 100) {
            throw new Error('You can fetch only from 1 to 100 todos!');
        }
        const todos = yield fakeFetch(length, 1000);
        yield put(fetchTodoSuccess(todos));
    }
    catch (e) {
        yield put(fetchTodoFailure(e.message));
    }
}
function* watchFetchTodo() {
    yield takeLatest(FETCH_TODO, fetchTodo);
}
export default function * () {
    yield all([
        fork(watchFetchTodo),
    ]);
}