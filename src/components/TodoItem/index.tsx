import React from 'react';
const styles = require('./TodoItem.scss');

export interface TodoItemProps {
  id: number,
  description: string,
  handleRemove: Function,
}
const TodoItem: React.SFC<TodoItemProps> = (props) => {
  const { id, description, handleRemove } = props;
  const handleClick: React.ReactEventHandler<HTMLDivElement> = e => {
    handleRemove(id);
  }
  return (
    <div className={styles.container} onClick={handleClick}>
      <input type="checkbox" />{description}
    </div>
  );
}

export default TodoItem;
