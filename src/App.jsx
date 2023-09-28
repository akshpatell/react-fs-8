import React from 'react';
import Todo from './Todo';
import { FilterProvider } from './context/filterContext';
import { ThemeProvider } from './context/themeContext';
import { TodoProvider } from './context/todoContext';

function App() {
  return (
    <ThemeProvider>
      <FilterProvider>
        <TodoProvider>
          <Todo />
        </TodoProvider>
      </FilterProvider>
    </ThemeProvider>
  );
}

export default App;
