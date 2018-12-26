import React, { createRef } from 'react';
import * as TodoActions from '../../actions/todo';
const styles = require('./TodoFetch.scss');

export interface TodoFetchProps {
  fetchTodo: typeof TodoActions.fetchTodo;
  status: string;
  message: string;
}
const TodoFetch: React.SFC<TodoFetchProps> = ({
  fetchTodo,
  status,
  message,
}) => {
  const lengthRef: React.RefObject<HTMLInputElement> = createRef();
  const handleFetch = () => {
    if (lengthRef.current) {
      const length = parseInt(lengthRef.current.value, 10);
      fetchTodo(length);
    }
  };
  return (
    <div className={styles.container}>
      Number to fetch: <input ref={lengthRef} type="number" defaultValue="3" />
      <button onClick={handleFetch}>Fetch!</button>
      <div className={styles.status}>
        <span>Fetching status: {status}</span>
        {message && <p className={styles.message}>{message}</p>}
      </div>
    </div>
  );
};

export default TodoFetch;
