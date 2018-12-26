import React from 'react';
import { connect } from 'react-redux';
import { TodoFetch, TodoList, TodoInput, TodoFilter } from '../../components';
import { RootState, Todo, Filter, Request } from '../../types';
import * as TodoAction from '../../actions/todo';
import * as FilterAction from '../../actions/filter';
import { getVisibleTodo } from '../../reducers/todo';

const styles = require('./TodoPage.scss');

/* Props type */
export interface TodoPageProps {
  todos: Todo[];
  addStatus: Request;
  fetchStatus: Request;
  message: string;
  filter: Filter;
  addTodo: typeof TodoAction.addTodo;
  toggleTodo: typeof TodoAction.toggleTodo;
  fetchTodo: typeof TodoAction.fetchTodo;
  setFilter: typeof FilterAction.setFilter;
}
const mapStateToProps = (state: RootState) => ({
  todos: getVisibleTodo(state),
  addStatus: state.todo.add.status,
  fetchStatus: state.todo.fetch.status,
  message: state.todo.message,
  filter: state.filter.filter,
});
const TodoPage: React.SFC<TodoPageProps> = ({
  todos,
  addStatus,
  fetchStatus,
  message,
  filter,
  addTodo,
  toggleTodo,
  fetchTodo,
  setFilter,
}) => (
  <div className={styles.container}>
    <TodoFetch fetchTodo={fetchTodo} status={fetchStatus} message={message} />
    <TodoInput addTodo={addTodo} />
    <TodoFilter currentFilter={filter} setFilter={setFilter} />
    <TodoList list={todos} toggleTodo={toggleTodo} loading={addStatus === 'FETCHING'} />
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
