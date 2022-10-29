import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";

import { Provider } from 'react-redux';
import {createStore, compose, applyMiddleware} from "redux";
import posts from './reducers/posts';
import thunk from "redux-thunk";

const store = createStore(posts, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
