import React from 'react';
const styles = require('./TodoFilter.scss');

export interface TodoFilterProps {
    currentFilter: string;
    handleFilter: (filter: string) => void;
    filterTypes: string[]; 
}

const TodoFilter: React.SFC<TodoFilterProps> = ({ currentFilter, handleFilter, filterTypes }) => {
    const handleFilterClick = (filter: string) => () => {
        handleFilter(filter);
    };
    return (
        <div>
            <ul>
                {
                    filterTypes.map((filter, i) => (
                        <li
                            key={i}
                            className={`${styles.tab} ${currentFilter === filter && styles.tab_active}`}
                            onClick={handleFilterClick(filter)}
                        >
                            {filter}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
};

export default TodoFilter;
