import React from 'react';
import { Todo } from '../../types';
import { TodoItem } from '..';
const styles = require('./TodoList.scss');

export interface TodoListProps {
  list: Todo[];
  toggleTodo: (id: number) => void;
}
const TodoList: React.SFC<TodoListProps> = ({ list, toggleTodo }) => (
  <div className={styles.container}>
    {list.map((item: Todo) => {
      const { ...itemProps } = item;
      return <TodoItem key={item.id} toggleTodo={toggleTodo} {...itemProps} />;
    })}
  </div>
);

export default TodoList;
