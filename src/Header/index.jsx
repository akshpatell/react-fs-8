import React from 'react';
import { connect } from 'react-redux';
import clsx from 'clsx';
import LightIcon from '../../public/assets/icons/sun.svg';
import DarkIcon from '../../public/assets/icons/moon.svg';

function Header({ theme, dispatch }) {
  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <header className="px-8 py-4 bg-blue-600 text-white flex gap-4 items-center justify-between">
      <h1>TODO APP</h1>
      <button
        type="button"
        className={clsx('btn round', {
          'bg-white text-black': theme === 'light',
          'bg-[#111] text-white': theme === 'dark',
        })}
        onClick={toggleTheme}
      >
        {theme === 'dark' ? (
          <LightIcon className="w-6 h-6" />
        ) : (
          <DarkIcon className="w-6 h-6" />
        )}
      </button>
    </header>
  );
}

function mapStateToProps(state) {
  return state.theme;
}

export default connect(mapStateToProps)(Header);
