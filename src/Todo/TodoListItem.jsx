import React, { memo } from 'react';
import DeleteIcon from '../../public/assets/icons/delete.svg';

function TodoListItem({ todo, deleteTodo, toggleComplete }) {
  console.log('item render', todo.id);
  return (
    <div className="flex gap-4 justify-between items-center">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className="flex gap-2 items-center">
        <input
          className="appearance-none checked:bg-blue-500 indeterminate:bg-gray-300"
          type="checkbox"
          name="isCompleted"
          checked={todo.isCompleted}
          onChange={() => toggleComplete(todo)}
        />
        <span className="sr-only">is completed</span>
        <p
          className={`flex-1 line-clamp-1 ${
            todo.isCompleted && 'line-through text-slate-500'
          }`}
          title={todo.title}
        >
          {todo.title}
        </p>
      </label>

      <button
        type="button"
        className="btn error aspect-square"
        aria-label="delete button"
        onClick={() => deleteTodo(todo)}
      >
        <DeleteIcon className="w-4 aspect-square text-white" />
      </button>
    </div>
  );
}

export default memo(TodoListItem);
