import React, { memo, forwardRef } from 'react';
import PlusIcon from '../../public/assets/icons/plus.svg';

const TodoForm = forwardRef(({ handleSubmit }, ref) => {
  console.log('Form render');
  return (
    <section>
      <form className="flex" onSubmit={handleSubmit}>
        <div>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="todoText" className="sr-only">
            todo
          </label>
          <input
            ref={ref}
            type="text"
            id="todoText"
            className="rounded-l-md w-full"
            placeholder="Todo..."
          />
        </div>
        <button type="submit" className="btn primary rounded-l-none w-max">
          <PlusIcon className="w-5 aspect-square" strokeWidth="2" />
          <span>Add Todo</span>
        </button>
      </form>
    </section>
  );
});

export default memo(TodoForm);
