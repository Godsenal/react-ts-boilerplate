import { all, fork, put, take, call } from 'redux-saga/effects';
import * as TodoActions from '../actions/todo';
import * as apis from '../apis';
import * as ActionTypes from '../constants';

function* baseFetch(entity: TodoActions.BaseActions, api: () => Promise<any>, payload: TodoActions.TodoAction)  {
  yield put(entity.fetching());
  try {
    const response = yield call(api, payload);
    yield put(entity.success(response));
  }
  catch (err) {
    yield put(entity.failure(err));
  }
}
const addTodo = baseFetch.bind(null, TodoActions.addTodoActions);
const deleteTodo = baseFetch.bind(null, TodoActions.deleteTodoActions);
const fetchTodo = baseFetch.bind(null, TodoActions.fetchTodoActions);

function* watchAddTodo() {
  while(true) {
    const payload: TodoActions.AddTodo = yield take(ActionTypes.ADD_TODO);
    yield fork(addTodo, apis.addTodo, payload);
  }
}
function* watchDeleteTodo() {
  while(true) {
    const payload: TodoActions.DeleteTodo = yield take(ActionTypes.DELETE_TODO);
    yield fork(deleteTodo, apis.deleteTodo, payload);
  }
}
function* watchFetchTodo() {
  while(true) {
    const payload: TodoActions.FetchTodo = yield take(ActionTypes.FETCH_TODO);
    yield fork(fetchTodo, apis.fetchTodo, payload);
  }
}

export default function* () {
  yield all([fork(watchAddTodo), fork(watchDeleteTodo), fork(watchFetchTodo)]);
}
