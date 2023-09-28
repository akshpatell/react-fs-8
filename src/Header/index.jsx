import React, { memo } from 'react';
import ThemeContext from '../context/themeContext';
import LightIcon from '../../public/assets/icons/sun.svg';
import DarkIcon from '../../public/assets/icons/moon.svg';
import clsx from 'clsx';

function Header() {
  return (
    <header className="px-8 py-4 bg-blue-600 text-white flex gap-4 items-center justify-between">
      <h1>TODO APP</h1>
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
          <button
            type="button"
            className={clsx('btn round', {
              'bg-white text-black': theme === 'light',
              'bg-[#111] text-white': theme === 'dark',
            })}
            onClick={() => toggleTheme()}
          >
            {theme === 'dark' ? (
              <LightIcon className="w-6 h-6" />
            ) : (
              <DarkIcon className="w-6 h-6" />
            )}
          </button>
        )}
      </ThemeContext.Consumer>
    </header>
  );
}

export default memo(Header);
