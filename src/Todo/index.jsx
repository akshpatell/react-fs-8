import React, { forwardRef, memo } from 'react';
import TodoForm from './TodoForm';
import TodoFilters from './TodoFilters';
import TodoList from './TodoList';
import Footer from '../Footer';
import Header from '../Header';
import TodoHOC from '../HOC/TodoHOC';
import ThemeContext from '../context/themeContext';

const Todo = forwardRef(
  (
    { handleSubmit, filterTodo, deleteTodo, toggleComplete, todoList, filter },
    ref,
  ) => (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <div
          className={`flex flex-col gap-4 h-screen overflow-hidden ${
            theme === 'dark' && 'bg-[#111] text-gray-300'
          }`}
        >
          <Header />
          <main className="flex-1 flex flex-col gap-8 px-2 sm:px-8 items-center w-full overflow-scroll">
            <div className="flex flex-col sm:flex-row justify-between gap-4 w-full py-2">
              <TodoForm handleSubmit={handleSubmit} ref={ref} />
              <TodoFilters filterTodo={filterTodo} />
            </div>
            <TodoList
              todoList={todoList}
              filter={filter}
              deleteTodo={deleteTodo}
              toggleComplete={toggleComplete}
            />
          </main>
          <Footer />
        </div>
      )}
    </ThemeContext.Consumer>
  ),
);

export default TodoHOC(memo(Todo));
