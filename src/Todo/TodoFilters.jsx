import React, { memo } from 'react';
import FilterIcon from '../../public/assets/icons/filter.svg';
import FilterContext from '../context/filterContext';

function TodoFilter({ filterTodo }) {
  console.log('filters render');
  return (
    <section className="flex gap-2 justify-end">
      <FilterIcon className="w-6 aspect-square" />
      <FilterContext.Consumer>
        {({ changeValue }) => (
          <select
            name="filter"
            id="filter"
            onChange={(e) => changeValue(e.target.value)}
            className="bg-transparent"
          >
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        )}
      </FilterContext.Consumer>
      {/* <select name="filter" id="filter" onChange={filterTodo}>
        <option value="all">All</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select> */}
    </section>
  );
}

export default memo(TodoFilter);
