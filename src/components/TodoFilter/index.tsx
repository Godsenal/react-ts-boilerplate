import React from "react";
import { Filter } from '../../types';
const styles = require("./TodoFilter.scss");

export interface TodoFilterProps {
  currentFilter: Filter;
  setFilter: (filter: Filter) => void;
}

const TodoFilter: React.SFC<TodoFilterProps> = ({
  currentFilter,
  setFilter,
}) => {
  const handleFilterClick = (filter: Filter) => () => {
    setFilter(filter);
  };
  return (
    <div>
      <ul>
        {Object.keys(Filter).map((_, i) => (
          <li
            key={i}
            className={`${styles.tab} ${currentFilter === i &&
              styles.tab_active}`}
            onClick={handleFilterClick(i)}
          >
            {Filter[i]}
          </li> 
        ))}
      </ul>
    </div>
  );
};

export default TodoFilter;
