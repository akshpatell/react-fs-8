import React, { PureComponent, createContext } from 'react';

const ThemeContext = createContext();

class ThemeProvider extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      theme: 'light',
    };
  }

  toggleTheme = () => {
    this.setState(({ theme }) => ({
      theme: theme === 'light' ? 'dark' : 'light',
    }));
  };

  render() {
    const { theme } = this.state;
    const { children } = this.props;
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme: this.toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  }
}

export { ThemeProvider };

export default ThemeContext;
