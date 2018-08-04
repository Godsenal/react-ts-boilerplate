import React from 'react';
const styles = require('./TodoFilter.scss');

export interface TodoFilterProps {
    currentFilter: string;
    setFilter: (filter: string) => void;
    filterTypes: string[]; 
}

const TodoFilter: React.SFC<TodoFilterProps> = ({ currentFilter, setFilter, filterTypes }) => {
    const handleFilterClick = (filter: string) => () => {
        setFilter(filter);
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
