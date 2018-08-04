import React from 'react';
const styles = require('./TodoItem.scss');

export interface TodoItemProps {
  id: number,
  description: string,
  done: boolean,
  toggleTodo: (id: number) => void,
}
const TodoItem: React.SFC<TodoItemProps> = ({ id, description, done, toggleTodo }) => {
  const handleClick = () => {
    toggleTodo(id);
  }
  return (
    <ul>
      <li className={`${styles.item} ${done && styles.checked}`} onClick={handleClick}>
        {description}
      </li>
    </ul>
  );
}

export default TodoItem;
