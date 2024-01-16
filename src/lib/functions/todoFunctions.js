import { BACKEND_URL } from '../redux/lib';

export const fetchTodos = async () => {
  try {
    const res = await fetch(`${BACKEND_URL}/todoList`);
    const todos = await res.json();

    return todos;
  } catch (error) {
    console.error('fetch error');
    throw new Error(error);
  }
};

// newTodo: { title: string, isCompleted: boolean}

export const addTodo = async (todoData) => {
  try {
    const res = await fetch(`${BACKEND_URL}/todoList`, {
      method: 'POST',
      body: JSON.stringify({
        title: todoData.title,
        isCompleted: false,
      }),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    const newTodo = await res.json();

    return newTodo;
  } catch (error) {
    console.error('add error', error);
    throw new Error(error);
  }
};

export const toggleTodo = async (todo) => {
  try {
    const res = await fetch(`${BACKEND_URL}/todoList/${todo.id}`, {
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

    return updatedTodo;
  } catch (error) {
    console.error('toogle error', error);
    throw new Error(error);
  }
};

export const deleteTodo = async (todo) => {
  try {
    await fetch(`${BACKEND_URL}/todoList/${todo.id}`, {
      method: 'DELETE',
    });
    return todo;
  } catch (error) {
    console.error('delete error', error);
    throw new Error(error);
  }
};
