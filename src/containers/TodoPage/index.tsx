import React from 'react';
import { TodoList, TodoInput } from '../../components';
import { Todo } from '../../modules';
const styles = require('./TodoPage.scss');

interface State {
  readonly list: Todo[];
}

export default class TodoPage extends React.Component<{}, State> {
  readonly state = {
    list: [],
  }
  handleAdd = (todo: Todo) => {
    this.setState((prevState: State): State => ({
      list: [...prevState.list, todo],
    }));
  }
  handleRemove = (id: number) => {
    this.setState((prevState: State): State => ({
      list: prevState.list.filter(item => id !== item.id),
    }));
  }
  render() {
    const { list } = this.state;
    return (
      <div className={styles.container}>
        <TodoInput handleAdd={this.handleAdd} />
        <TodoList list={list} handleRemove={this.handleRemove} />
      </div>
    )
  }
}