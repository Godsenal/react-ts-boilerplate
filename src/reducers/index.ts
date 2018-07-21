import { combineReducers } from 'redux';
import todo from './todo';
import filter from './filter';
import { RootState } from '../types';

const rootReducer = combineReducers<RootState>({
  todo,
  filter,
});

export default rootReducer;
