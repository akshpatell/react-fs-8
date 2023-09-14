import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      data: null,
    };

    this.decrement = this.decrement.bind(this);
  }

  // eslint-disable-next-line no-unused-vars
  static getDerivedStateFromProps(props, state) {
    return {
      // eslint-disable-next-line react/prop-types
      greet: `Mr. ${props.name}`,
    };
  }

  componentDidMount() {
    try {
      setTimeout(() => {
        this.setState({ data: { title: 'hello' } });
      }, 2000);
    } catch (error) {
      console.error('error', error);
    }
  }

  increment = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };

  // method binding required for normal functions
  decrement() {
    this.setState(({ count }) => ({ count: count - 1 }));
  }

  render() {
    const { count, data, greet } = this.state;
    const { name } = this.props;

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

/**
 * Mounting
 * - constructor
 * - getDerivedStateFromProps
 * - render
 * - componentDidMount
 *
 * updating
 * - getDerivedStateFromProps
 * - shouldComponentUpdate
 * - render
 * - getSnapshotBeforeUpdate
 * - componentDidUpdate
 *
 * unmounting
 * - componentWillUnmount
 *
 *
 * error
 * - getDerivedStateFromError
 * - componentDidCatch // error with info
 */

/**
 * constructor
 * - calls only once
 * - api in some case
 * - analytics
 * - setting state only once using props value
 * - method binding
 *
 * getDerivedStateFromProps
 * - setting state using props value
 * - static method use anyware by importing component and then calling it
 * - only define new variable don't update existing state it rerenders infinite
 * - based on enw props and new state
 * - calls everytime when state or props change
 *
 * render
 * - render html
 *
 * componentDidMount
 * - calls only once after render method
 * - fetching api after rendering html
 * - registering eventlistener
 * - dom manipalation
 *
 * shouldComponentUpdate(nextProps, nextState) {
 *    return true(renders) or false(no render) //
 * } // or extend component from PureComponent
 * - when to update compont
 * - restrict render
 * - alternative extends PureComponent
 *
 * componentWillUnmount
 * - cancel api request
 * - remove event listener
 * - clear all async calls (callback, promises, generator)
 *
 * getDerivedStateFromError(error){
 *  return {
 *    error
 *  }
 * }
 * - static method
 * - now state has error
 * - {error ? '<div>{error.message}</div>' : '<MyComponent/>'}
 *
 * componentDidCatch(error, info) {}
 * - gives error with info
 */
