import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ConnectedApp } from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index';


const store = createStore(rootReducer);

console.log(store);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
