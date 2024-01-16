import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';
import {
  deleteTodo,
  fetchTodos,
  toggleTodo,
} from '../lib/functions/todoFunctions';

function TodoList({ todo, dispatch }) {
  const { todoList, loading, hasError } = todo;

  const loadData = async () => {
    dispatch({ type: 'LOAD_TODO_REQUEST' });
    const todos = await fetchTodos();
    dispatch({ type: 'LOAD_TODO_SUCCESS', payload: todos });
    // dispatch({ type: 'LOAD_TODO_ERROR', payload: { error: 'Error' } });
  };

  const toggleComplete = async (todo) => {
    await dispatch({ type: 'UPDATE_TODO_REQUEST' });
    const updatedTodo = await toggleTodo(todo);
    await dispatch({ type: 'UPDATE_TODO_SUCCESS', payload: updatedTodo });
  };

  const deleteData = async (todo) => {
    await dispatch({ type: 'DELETE_TODO_REQUEST' });
    const deletedTodo = await deleteTodo(todo);
    console.log('deleted todo', deletedTodo);
    await dispatch({ type: 'DELETE_TODO_SUCCESS', payload: deletedTodo });
  };

  useEffect(() => {
    loadData();
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (hasError) return <h1>{hasError.message}</h1>;

  return (
    <section className="relative flex-1 flex flex-col w-full overflow-hidden">
      <p className="flex gap-2 py-5">
        <span>filter value:</span>
        {/* <span>{filter}</span> */}
      </p>

      <h2 className="sticky top-0 left-0 text-slate-500 text-xl">Todo List</h2>
      <div className="border rounded-md border-slate-500 flex-1 flex flex-col gap-4 p-4 overflow-y-scroll">
        {todoList &&
          todoList.map((todo, index) => (
            <TodoListItem
              key={todo.id || index}
              todo={todo}
              deleteTodo={() => deleteData(todo)}
              toggleComplete={() => toggleComplete(todo)}
            />
          ))}
      </div>
    </section>
  );
}

function mapStateToProps(state) {
  const { todo } = state;
  return { todo };
}

export default connect(mapStateToProps)(TodoList);
