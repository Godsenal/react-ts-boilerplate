import { TodoState } from '../reducers/todo';
import { FilterState } from '../reducers/filter';

// RootState type === Combine All reducer's type
export default interface RootState {
  todo: TodoState;
  filter: FilterState;
}
