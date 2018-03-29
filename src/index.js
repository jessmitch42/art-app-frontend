import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ConnectedApp } from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


const store = createStore(rootReducer, applyMiddleware(thunk));

console.log(store);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
