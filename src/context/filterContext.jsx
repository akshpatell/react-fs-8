import React, { PureComponent, createContext } from 'react';

const FilterContext = createContext();

class FilterProvider extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      filter: 'all',
    };
  }

  changeValue = (newValue) => {
    this.setState({ filter: newValue });
  };

  render() {
    const { filter } = this.state;
    const { children } = this.props;
    return (
      <FilterContext.Provider value={{ filter, changeValue: this.changeValue }}>
        {children}
      </FilterContext.Provider>
    );
  }
}

export { FilterProvider };

export default FilterContext;
