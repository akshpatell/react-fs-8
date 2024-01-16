import React from 'react';
import { connect } from 'react-redux';
import Footer from '../Footer';
import Header from '../Header';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function Todo({ theme }) {
  return (
    <div
      className={`flex flex-col gap-4 h-screen overflow-hidden ${
        theme === 'dark' && 'bg-[#111] text-gray-300'
      }`}
    >
      <Header />
      <main className="flex-1 flex flex-col gap-8 px-2 sm:px-8 items-center w-full overflow-y-scroll">
        <div className="flex flex-col sm:flex-row justify-between gap-4 w-full py-2">
          <TodoForm />
          {/* <TodoFilters /> */}
        </div>
        <TodoList />
      </main>
      <Footer />
    </div>
  );
}

function mapStateToProps(state) {
  return state.theme;
}

export default connect(mapStateToProps)(Todo);
