import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ConnectedApp } from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
  ));

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
