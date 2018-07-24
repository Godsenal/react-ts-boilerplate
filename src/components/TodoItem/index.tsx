import React from 'react';
const styles = require('./TodoItem.scss');

export interface TodoItemProps {
  id: number,
  description: string,
  done: boolean,
  handleToggle: (id: number) => void,
}
const TodoItem: React.SFC<TodoItemProps> = (props) => {
  const { id, description, done, handleToggle } = props;
  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    handleToggle(id);
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
