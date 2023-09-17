import React, { memo } from 'react';
import FilterIcon from '../../public/assets/icons/filter.svg';

function TodoFilter({ filterTodo }) {
  console.log('filters render');
  return (
    <section className="flex gap-8 justify-end">
      <FilterIcon className="w-6 aspect-square" />
      <select name="filter" id="filter" onChange={filterTodo}>
        <option value="all">All</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
    </section>
  );
}

export default memo(TodoFilter);
