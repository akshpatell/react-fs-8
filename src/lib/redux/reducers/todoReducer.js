const initTodo = {
  todoList: [],
  loading: false,
  hasError: null,
  filter: 'all',
};

const todoReducer = (state = initTodo, { type, payload }) => {
  switch (type) {
    case 'LOAD_TODO_REQUEST':
    case 'ADD_TODO_REQUEST':
    case 'UPDATE_TODO_REQUEST':
    case 'DELETE_TODO_REQUEST':
    case 'FILTER_TODO_REQUEST':
      return { ...state, loading: true, hasError: null };
    case 'LOAD_TODO_SUCCESS': {
      return {
        ...state,
        todoList: [...payload],
        loading: false,
        hasError: null,
      };
    }
    case 'ADD_TODO_SUCCESS': {
      return {
        ...state,
        todoList: [...state.todoList, payload],
        loading: false,
        hasError: null,
      };
    }
    case 'UPDATE_TODO_SUCCESS': {
      const idx = state.todoList.findIndex((x) => x.id === payload.id);
      return {
        ...state,
        todoList: [
          ...state.todoList.slice(0, idx),
          payload,
          ...state.todoList.slice(idx + 1),
        ],
        loading: false,
        hasError: null,
      };
    }
    case 'DELETE_TODO_SUCCESS': {
      const idx = state.todoList.findIndex((x) => x.id === payload.id);
      return {
        ...state,
        todoList: [
          ...state.todoList.slice(0, idx),
          ...state.todoList.slice(idx + 1),
        ],
        loading: false,
        hasError: null,
      };
    }
    case 'FILTER_TODO_SUCCESS': {
      return { ...state, filter: payload };
    }
    case 'LOAD_TODO_ERROR':
      return { ...state, loading: false, hasError: { message: payload.error } };
    default:
      return { ...state };
  }
};

export default todoReducer;
