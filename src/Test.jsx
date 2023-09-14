import React, { Component } from 'react';

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      data: null,
    };
    this.decrement = this.decrement.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    return {
      greet: `Mr ${props.name}`,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ data: { title: 'hello' } });
    }, 2000);
  }

  increment = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };

  decrement() {
    this.setState(({ count }) => ({ count: count - 1 }));
  }

  render() {
    const { count, greet, data } = this.state;

    return (
      <div>
        <h1>{greet}</h1>
        {data && <h2>{data.title}</h2>}

        <button type="button" onClick={this.increment}>
          +
        </button>
        {count}
        <button type="button" onClick={this.decrement}>
          -
        </button>
      </div>
    );
  }
}
