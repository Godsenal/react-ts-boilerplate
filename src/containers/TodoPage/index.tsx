import React from 'react';
import { connect } from 'react-redux';
import { TodoList, TodoInput, TodoFilter } from '../../components';
import { RootState, Todo, Filter } from '../../types';
import * as TodoAction from '../../actions/todo';
import * as FilterAction from '../../actions/filter';

const styles = require('./TodoPage.scss');

/* Use State */
interface State {
  readonly todos: Todo[];
  readonly mode: string;
}
/* Use Redux State */
export interface TodoPageProps {
  todos: Todo[],
  filter: Filter,
  addTodo: (id: number, description: string) => any;
  toggleTodo: (id: number) => any;
  setFilter: (filter: string) => any;
}
const mapStateToProps = (state: RootState) => ({
  todos: state.todo.todos,
  filter: state.filter.filter,
});
class TodoPage extends React.Component<TodoPageProps, State> {
  readonly state = {
    mode: 'state',
    todos: [],
  }
  handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      mode: e.target.value,
    });
  }
  handleFilter = (filter: string) => {
    this.props.setFilter(filter);
  }
  handleAdd = (id: number, description: string) => {
    /* Component State */
    if (this.state.mode === 'state') {
      this.setState((prevState: State): State => ({
        ...prevState,
        todos: [...prevState.todos, { id, description, done: false }],
      }));
    }
    /* Redux State */
    else {
      this.props.addTodo(id, description);
    }
    
  }
  handleToggle = (id: number) => {
    /* Component State */
    if (this.state.mode === 'state') {
      this.setState((prevState: State): State => ({
        ...prevState,
        todos: prevState.todos.map(item => {
          if (item.id === id) {
            item.done = !item.done;
          }
          return item;
        }),
      }));
    }
    /* Redux State */
    else {
      this.props.toggleTodo(id);
    }
  }
  getFilteredTodos = (todos: Todo[]) => {
    const { filter } = this.props;
    switch (filter) {
      case 'ALL': {
        return todos;
      }
      case 'COMPLETED': {
        return todos.filter(item => item.done);
      }
      case 'INCOMPLETED': {
        return todos.filter(item => !item.done)
      }
      default: {
        return todos;
      }
    }
  }
  render() {
    const { todos, mode } = this.state;
    const { todos: todosProp, filter } = this.props;
    const list = mode === 'state' ? todos : todosProp;
    return (
      <div className={styles.container}>
        <h3>This doesn't change ui. Please see how code changed</h3>
        <select onChange={this.handleSelect}>
          <option value="state">Use Component State</option>
          <option value="redux">Use Redux State</option>
        </select>
        <TodoInput handleAdd={this.handleAdd} />
        <TodoFilter currentFilter={filter} handleFilter={this.handleFilter} filterTypes={Object.keys(Filter)} />
        <TodoList list={this.getFilteredTodos(list)} handleToggle={this.handleToggle} />
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