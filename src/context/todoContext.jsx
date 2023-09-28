import React, { PureComponent, createContext, createRef } from 'react';

export const TodoContext = createContext();

export class TodoProvider extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      filter: 'all',
    };
    this.inputRef = createRef();
    this.url = 'http://localhost:3004';
  }

  async componentDidMount() {
    try {
      const res = await fetch(`${this.url}/todoList`);
      const todos = await res.json();
      this.setState({ todoList: todos });
    } catch (error) {
      console.error('fetch error');
    }
  }

  findTodoIndex = (todo) => {
    const { todoList } = this.state;
    const index = todoList.findIndex((x) => x.id === todo.id);
    return index;
  };

  filterTodo = async (e) => {
    try {
      const query = e.target.value.toLowerCase();
      let newUrl = `${this.url}/todoList`;

      if (query === 'pending') {
        newUrl = `${newUrl}?isCompleted=false`;
      } else if (query === 'completed') {
        newUrl = `${newUrl}?isCompleted=true`;
      }

      const res = await fetch(newUrl);
      const todos = await res.json();

      this.setState({ todoList: todos });
    } catch (error) {
      console.error('error filter', error);
    }
    this.setState({ filter: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    if (!this.inputRef.current.value) return;
    try {
      const res = await fetch(`${this.url}/todoList`, {
        method: 'POST',
        body: JSON.stringify({
          title: this.inputRef.current.value,
          isCompleted: false,
        }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      const newTodo = await res.json();
      this.setState(
        ({ todoList }) => ({
          todoList: [...todoList, newTodo],
        }),
        () => {
          this.inputRef.current.value = '';
        },
      );
    } catch (error) {
      console.error('add error', error);
    }
  };

  toggleComplete = async (todo) => {
    try {
      const res = await fetch(`${this.url}/todoList/${todo.id}`, {
        method: 'PUT',
        body: JSON.stringify({
          ...todo,
          isCompleted: !todo.isCompleted,
        }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      const updatedTodo = await res.json();
      const idx = this.findTodoIndex(todo);
      this.setState(({ todoList: oldTodoList }) => ({
        todoList: [
          ...oldTodoList.slice(0, idx),
          updatedTodo,
          ...oldTodoList.slice(idx + 1),
        ],
      }));
    } catch (error) {
      console.error('toogle error', error);
    }
  };

  deleteTodo = async (todo) => {
    try {
      await fetch(`${this.url}/todoList/${todo.id}`, {
        method: 'DELETE',
      });

      const idx = this.findTodoIndex(todo);
      this.setState(({ todoList: oldTodoList }) => ({
        todoList: [...oldTodoList.slice(0, idx), ...oldTodoList.slice(idx + 1)],
      }));
    } catch (error) {
      console.error('delete error', error);
    }
  };

  render() {
    const { children } = this.props;
    return (
      <TodoContext.Provider
        value={{
          handleSubmit: this.handleSubmit,
          toggleComplete: this.toggleComplete,
          deleteTodo: this.deleteTodo,
          filterTodo: this.filterTodo,
          ref: this.inputRef,
          todoList: this.state.todoList,
          filter: this.state.filter,
        }}
      >
        {children}
      </TodoContext.Provider>
    );
  }
}
