import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import todoReducer from './reducers/todoReducer';
import themeReducer from './reducers/themeReducer';

const reducers = combineReducers({
  todo: todoReducer,
  theme: themeReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware()));

export default store;
