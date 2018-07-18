import { combineReducers } from 'redux';
import test, { TestState } from './test';

interface RootState {
  test: TestState,
}
const rootReducer = combineReducers<RootState>({
  test,
});

export default rootReducer;
