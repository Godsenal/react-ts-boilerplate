import React from 'react';
import { Todo } from '../../modules';
import { TodoItem } from '../';
const styles = require('./TodoList.scss');

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
      <div className={styles.container}>
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