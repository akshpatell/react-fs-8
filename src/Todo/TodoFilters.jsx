import React, { memo } from 'react';
import FilterIcon from '../../public/assets/icons/filter.svg';
import FilterContext from '../context/filterContext';
import { TodoContext } from '../context/todoContext';

function TodoFilter() {
  console.log('filters render');
  return (
    <section className="flex gap-2 justify-end">
      <FilterIcon className="w-6 aspect-square" />
      <TodoContext.Consumer>
        {({ filterTodo }) => (
          <label htmlFor="filter">
            <span className="sr-only">Filter select</span>
            <select
              name="filter"
              id="filter"
              className="bg-transparent"
              onChange={filterTodo}
            >
              <option value="all">All</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </label>
        )}
      </TodoContext.Consumer>
    </section>
  );
}

export default memo(TodoFilter);
