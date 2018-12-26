import React, { createRef } from 'react';
import * as TodoActions from '../../actions/todo';
import { generateId } from '../../utils/id';
const styles = require('./TodoInput.scss');

export interface TodoInputProps {
  addTodo: typeof TodoActions.addTodo;
}

const TodoInput: React.SFC<TodoInputProps> = ({ addTodo }) => {
  const inputRef: React.RefObject<HTMLInputElement> = createRef();
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputRef.current) {
      handleAdd(inputRef.current.value);
      inputRef.current.value = '';
    }
  };
  const handleAdd = (description: string) => {
    if (description.trim().length > 0) {
      const id = generateId();
      addTodo({id, description, done: false});
    }
  };
  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        placeholder="What needs to be done?"
        className={styles.input}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default TodoInput;
