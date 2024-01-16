import React from 'react';
import { connect } from 'react-redux';
import FilterIcon from '../../public/assets/icons/filter.svg';

function TodoFilter({ dispatch }) {
  console.log('filters render');

  const filterTodo = (e) => {
    dispatch({ type: 'FILTER_TODO_SUCCESS', payload: e.target.value });
  };

  return (
    <section className="flex gap-2 justify-end">
      <FilterIcon className="w-6 aspect-square" />
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
    </section>
  );
}

export default connect()(TodoFilter);
