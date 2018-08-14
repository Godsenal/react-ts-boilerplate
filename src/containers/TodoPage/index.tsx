import React from 'react';
import { connect } from 'react-redux';
import { TodoFetch, TodoList, TodoInput, TodoFilter } from '../../components';
import { RootState, Todo, Filter } from '../../types';
import * as TodoAction from '../../actions/todo';
import * as FilterAction from '../../actions/filter';
import { getVisibleTodo } from '../../reducers/todo';

const styles = require('./TodoPage.scss');

/* Props type */
export interface TodoPageProps {
  todos: Todo[];
  status: string;
  message: string;
  filter: Filter;
  addTodo: (id: number, description: string) => void;
  toggleTodo: (id: number) => void;
  fetchTodo: (length: number) => void;
  setFilter: (filter: Filter) => void;
}
const mapStateToProps = (state: RootState) => ({
  todos: getVisibleTodo(state),
  status: state.todo.status,
  message: state.todo.message,
  filter: state.filter.filter,
});
const TodoPage: React.SFC<TodoPageProps> = ({
  todos,
  status,
  message,
  filter,
  addTodo,
  toggleTodo,
  fetchTodo,
  setFilter,
}) => (
  <div className={styles.container}>
    <TodoFetch fetchTodo={fetchTodo} status={status} message={message} />
    <TodoInput addTodo={addTodo} />
    <TodoFilter currentFilter={filter} setFilter={setFilter} />
    <TodoList list={todos} toggleTodo={toggleTodo} />
  </div>
);
// see https://github.com/piotrwitek/react-redux-typescript-guide#redux-connected-components
export default connect(
  mapStateToProps,
  {
    addTodo: TodoAction.addTodo,
    toggleTodo: TodoAction.toggleTodo,
    fetchTodo: TodoAction.fetchTodo,
    setFilter: FilterAction.setFilter,
  },
)(TodoPage);
