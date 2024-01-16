import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PlusIcon from '../../public/assets/icons/plus.svg';
import { addTodo } from '../lib/functions/todoFunctions';

function TodoForm({ dispatch }) {
  console.log('Form render');
  const ref = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (ref && ref.current) {
      const title = ref.current.value;
      dispatch({ type: 'ADD_TODO_REQUEST' });
      const newTodo = await addTodo({ title });
      console.log(newTodo);
      dispatch({ type: 'ADD_TODO_SUCCESS', payload: newTodo });
    }
  };

  return (
    <section>
      <form className="flex" onSubmit={handleSubmit}>
        <label htmlFor="todoText">
          <span className="sr-only">todo inputbox</span>
          <input
            ref={ref}
            type="text"
            id="todoText"
            className="rounded-l-md w-full bg-transparent"
            placeholder="Todo..."
          />
        </label>

        <button type="submit" className="btn primary rounded-l-none w-max">
          <PlusIcon className="w-5 aspect-square" strokeWidth="2" />
          <span>Add Todo</span>
        </button>
      </form>
    </section>
  );
}

export default connect()(TodoForm);
