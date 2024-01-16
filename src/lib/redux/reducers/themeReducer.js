const initTheme = {
  theme: 'dark',
};

const themeReducer = (state = initTheme, { type, payload }) => {
  switch (type) {
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'dark' ? 'light' : 'dark' };
    case 'TOGGLE_DARK_THEME':
      return { ...state, theme: 'dark' };
    case 'TOGGLE_LIGHT_THEME':
      return { ...state, theme: 'light' };
    default:
      return { ...state };
  }
};

export default themeReducer;
