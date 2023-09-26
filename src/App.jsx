import React from 'react';
import Todo from './Todo';
import { FilterProvider } from './context/filterContext';
import { ThemeProvider } from './context/themeContext';

function App() {
  return (
    <ThemeProvider>
      <FilterProvider>
        <Todo />
      </FilterProvider>
    </ThemeProvider>
  );
}

export default App;
