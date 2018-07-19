import React from 'react';
import { TodoList, TodoInput } from '../../components';

export interface Todo {
  id: number,
  description: string,
}
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
      <div>
        <TodoInput handleAdd={this.handleAdd} />
        <TodoList list={list} handleRemove={this.handleRemove} />
      </div>
    )
  }
}