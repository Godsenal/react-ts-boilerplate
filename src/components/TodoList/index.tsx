import React from 'react';
import * as TodoAction from '../../actions/todo';
import { Todo } from '../../types';
import { TodoItem } from '..';
const styles = require('./TodoList.scss');

export interface TodoListProps {
  loading: boolean;
  list: Todo[];
  toggleTodo: typeof TodoAction.toggleTodo;
}
const TodoList: React.SFC<TodoListProps> = ({ list, toggleTodo, loading }) => (
  <div className={styles.container}>
    {list.map((item: Todo) => {
      const { ...itemProps } = item;
      return <TodoItem key={item.id} toggleTodo={toggleTodo} {...itemProps} />;
    })}
    { loading && <div className={styles.loading}>loading...</div> }
  </div>
);

export default TodoList;
