import React, { Component } from 'react';

export default class Test2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      greet: `Mr ${props.name}`,
    };
  }

  render() {
    return <div>Test2</div>;
  }
}
