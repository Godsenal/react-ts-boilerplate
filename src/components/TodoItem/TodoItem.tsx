import React from 'react';

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
    <div onClick={handleClick}>{description}</div>
  );
}

export default TodoItem;
