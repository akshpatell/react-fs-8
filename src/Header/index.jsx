import React, { memo } from 'react';
import ThemeContext from '../context/themeContext';

function Header() {
  return (
    <header className="px-8 py-4 bg-blue-600 text-white flex gap-4 items-center justify-between">
      <h1>TODO APP</h1>
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
          <button
            type="button"
            className="btn error"
            onClick={() => toggleTheme()}
          >
            theme: {theme}
          </button>
        )}
      </ThemeContext.Consumer>
    </header>
  );
}

export default memo(Header);
