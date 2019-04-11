// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';
import messageListReducer from './reducers/message_list_reducer';


const initialState = {
  messages: [],
  channels: ['general', 'react', 'paris'],
  currentUser: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  selectedChannel: 'general'
};
// State and reducers
const reducers = combineReducers({
  messages: messageListReducer,
  message: (state = null, action) => state,
  channels: (state = initialState.channels, action) => state,
  selectedChannel: (state = initialState.selectedChannel, action) => state,
  currentUser: (state = initialState.currentUser, action) => state
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
