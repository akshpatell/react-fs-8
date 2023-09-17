import React, { PureComponent, createRef } from 'react';
import TodoForm from './TodoForm';
import TodoFilters from './TodoFilters';
import TodoList from './TodoList';
import Footer from '../Footer';
import Header from '../Header';

export default class Todo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      filter: 'all',
    };
    this.inputRef = createRef();
  }

  findTodoIndex = (todo) => {
    const { todoList } = this.state;
    const index = todoList.findIndex((x) => x.id === todo.id);
    return index;
  };

  toggleComplete = (todo) => {
    const idx = this.findTodoIndex(todo);
    this.setState(({ todoList: oldTodoList }) => ({
      todoList: [
        ...oldTodoList.slice(0, idx),
        { ...oldTodoList[idx], isCompleted: !oldTodoList[idx].isCompleted },
        ...oldTodoList.slice(idx + 1),
      ],
    }));
  };

  deleteTodo = (todo) => {
    const idx = this.findTodoIndex(todo);
    this.setState(({ todoList: oldTodoList }) => ({
      todoList: [...oldTodoList.slice(0, idx), ...oldTodoList.slice(idx + 1)],
    }));
  };

  editTodo = (todo, newTitle) => {
    const idx = this.findTodoIndex(todo);
    this.setState(({ todoList: oldTodoList }) => ({
      todoList: [
        ...oldTodoList.slice(0, idx),
        { ...oldTodoList[idx], title: newTitle },
        ...oldTodoList.slice(idx + 1),
      ],
    }));
  };

  filterTodo = (e) => {
    const filterValue = e.target.value.toLowerCase();
    this.setState({ filter: filterValue });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.inputRef.current.value) return;
    this.setState(
      ({ todoList }) => ({
        todoList: [
          ...todoList,
          {
            id: new Date().getTime(),
            title: this.inputRef.current.value,
            isCompleted: false,
          },
        ],
      }),
      () => {
        this.inputRef.current.value = '';
      },
    );
  };

  render() {
    const { todoList, filter } = this.state;
    return (
      <div className="flex flex-col gap-4 h-screen overflow-hidden">
        <Header />
        <main className="flex-1 flex flex-col gap-8 px-2 sm:px-8 items-center w-full overflow-scroll">
          <div className="flex flex-col sm:flex-row justify-between gap-4 w-full py-2">
            <TodoForm handleSubmit={this.handleSubmit} ref={this.inputRef} />
            <TodoFilters filterTodo={this.filterTodo} />
          </div>
          <TodoList
            todoList={todoList}
            filter={filter}
            deleteTodo={this.deleteTodo}
            toggleComplete={this.toggleComplete}
            editTodo={this.editTodo}
          />
        </main>
        <Footer />
      </div>
    );
  }
}
