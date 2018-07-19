import React, { ReactEventHandler } from 'react';
import { Todo } from '../../containers/TodoPage/TodoPage';

export interface TodoInputProps {
  handleAdd: (todo: Todo) => void,
}
interface State {
  readonly value: string,
}

export default class TodoInput extends React.Component<TodoInputProps, State> {
  currentId: number = 0;
  readonly state: State = {
    value: '',
  }
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      value: e.target.value,
    });
  }
  handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      this.handleAdd(this.state.value);
    }
  }
  handleAdd = (description: string) => {
    const todo = {
      id: this.currentId++,
      description,
    };
    this.setState({
      value: '',
    });
    this.props.handleAdd(todo);
  }
  render() {
    const { value } = this.state;
    return (
      <div>
        <input value={value} onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
      </div>
    )
  }
}