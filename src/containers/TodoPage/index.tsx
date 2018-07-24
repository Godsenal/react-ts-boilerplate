import React from 'react';
import { connect } from 'react-redux';
import { TodoList, TodoInput, TodoFilter } from '../../components';
import { RootState, Todo, Filter } from '../../types';
import * as TodoAction from '../../actions/todo';
import * as FilterAction from '../../actions/filter';
import { getVisibleTodo } from '../../reducers/todo';

const styles = require('./TodoPage.scss');

/* Props type */
export interface TodoPageProps {
  todos: Todo[],
  filter: Filter,
  addTodo: (id: number, description: string) => any;
  toggleTodo: (id: number) => any;
  setFilter: (filter: string) => any;
}
const mapStateToProps = (state: RootState) => ({
  todos: getVisibleTodo(state),
  filter: state.filter.filter,
});
class TodoPage extends React.Component<TodoPageProps> {
  handleFilter = (filter: string) => {
    this.props.setFilter(filter);
  }
  handleAdd = (id: number, description: string) => {
    this.props.addTodo(id, description);
  }
  handleToggle = (id: number) => {
    this.props.toggleTodo(id);
  }
  render() {
    const { todos, filter } = this.props;
    return (
      <div className={styles.container}>
        <TodoInput handleAdd={this.handleAdd} />
        <TodoFilter currentFilter={filter} handleFilter={this.handleFilter} filterTypes={Object.keys(Filter)} />
        <TodoList list={todos} handleToggle={this.handleToggle} />
      </div>
    )
  }
}
// see https://github.com/piotrwitek/react-redux-typescript-guide#redux-connected-components
export default connect(mapStateToProps, {
  addTodo: TodoAction.addTodo,
  toggleTodo: TodoAction.toggleTodo,
  setFilter: FilterAction.setFilter,
})(TodoPage);