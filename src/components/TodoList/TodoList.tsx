import React from 'react';
import { Todo } from '../../containers/TodoPage/TodoPage';
import { TodoItem } from '../';

export interface TodoListProps {
  list: Todo[],
  handleRemove: (id: number) => void,
}
export interface Todo {
  id: number,
  description: string,
}
export default class TodoList extends React.Component<TodoListProps> {
  render() {
    const { list, handleRemove } = this.props;
    return(
      <div>
        {
          list.map((item: Todo) => {
            const { ...itemProps } = item;
            return (
              <TodoItem
                key={item.id}
                handleRemove={handleRemove}
                {...itemProps}
              />
            )
          })
        }
      </div>
    )
  }
}