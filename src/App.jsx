import React, { memo } from 'react';
import { Provider } from 'react-redux';
import Todo from './Todo';
import store from './lib/redux/store';

function App() {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
}

export default memo(App);
