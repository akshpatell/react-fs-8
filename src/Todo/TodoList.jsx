import React, { memo } from 'react';
import TodoListItem from './TodoListItem';

function TodoList({ todoList, filter, deleteTodo, toggleComplete, editTodo }) {
  console.log('list render');
  return (
    <section className="relative flex-1 flex flex-col w-full overflow-hidden">
      <h2 className="sticky top-0 left-0 bg-white text-slate-500 text-xl">
        Todo List
      </h2>
      <div className="border rounded-md border-slate-500 flex-1 flex flex-col gap-4 p-4 overflow-scroll">
        {todoList &&
          todoList.map((todo) => (
            <TodoListItem
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              toggleComplete={toggleComplete}
              editTodo={editTodo}
            />
          ))}
      </div>
    </section>
  );
}

export default memo(TodoList);
