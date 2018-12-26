import React from 'react';
import * as TodoActions from '../../actions/todo';
const styles = require('./TodoItem.scss');

export interface TodoItemProps {
  id: number;
  description: string;
  done: boolean;
  toggleTodo: typeof TodoActions.toggleTodo;
}
const TodoItem: React.SFC<TodoItemProps> = ({
  id,
  description,
  done,
  toggleTodo,
}) => {
  const handleClick = () => {
    toggleTodo(id);
  };
  return (
    <ul>
      <li
        className={`${styles.item} ${done && styles.checked}`}
        onClick={handleClick}
      >
        {description}
      </li>
    </ul>
  );
};

export default TodoItem;
