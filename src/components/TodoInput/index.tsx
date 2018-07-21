import React, { ReactEventHandler } from 'react';
import { Todo } from '../../types';
const styles = require('./TodoInput.scss');

export interface TodoInputProps {
  handleAdd: (id: number, description: string) => void,
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
    if (e.key === 'Enter' && this.state.value) {
      this.handleAdd(this.state.value);
    }
  }
  handleAdd = (description: string) => {
    const id = this.currentId++;
    this.setState({
      value: '',
    });
    this.props.handleAdd(id, description);
  }
  render() {
    const { value } = this.state;
    return (
      <div className={styles.container}>
        <input
          placeholder="What needs to be done?"
          className={styles.input}
          value={value}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
      </div>
    )
  }
}