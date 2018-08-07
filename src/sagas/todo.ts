import { all, fork, put, take, call } from "redux-saga/effects";
import { FetchTodo, fetchTodoSuccess, fetchTodoFailure } from "../actions/todo";
import { FETCH_TODO } from "../constants";
import { Todo } from "../types";
import { generateId } from "../utils/id";

function fakeFetch(length: number, ms: number) {
  return new Promise(resolve => {
    setTimeout(() => {
      const fakeTodos: Todo[] = Array.apply(null, Array(length)).map(() => ({
        id: generateId(),
        description: "fake Fetched Todo!",
        done: false
      }));
      resolve(fakeTodos);
    }, ms);
  });
}
function* fetchTodo(actions: FetchTodo) {
  try {
    const { length } = actions;
    if (length <= 0 || length > 100) {
      throw new Error("You can fetch only from 1 to 100 todos!");
    }
	const todos = yield call(fakeFetch, length, 1000);
	// you can just yield normal function.
	// however, it makes much more difficult to test.
    yield put(fetchTodoSuccess(todos));
  } catch (e) {
    yield put(fetchTodoFailure(e.message));
  }
}
function* watchFetchTodo() {
  while (true) {
	const actions: FetchTodo = yield take(FETCH_TODO);
	yield fork(fetchTodo, actions);
  }
}
export default function*() {
  yield all([fork(watchFetchTodo)]);
}
