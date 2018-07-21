import React from 'react';
import { Todo } from '../../types';
import { TodoItem } from '../';
const styles = require('./TodoList.scss');

export interface TodoListProps {
  list: Todo[],
  handleToggle: (id: number) => void,
}
export default class TodoList extends React.Component<TodoListProps> {
  render() {
    const { list, handleToggle } = this.props;
    return(
      <div className={styles.container}>
        {
          list.map((item: Todo) => {
            const { ...itemProps } = item;
            return (
              <TodoItem
                key={item.id}
                handleToggle={handleToggle}
                {...itemProps}
              />
            )
          })
        }
      </div>
    )
  }
}