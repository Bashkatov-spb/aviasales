import React from "react";
import App from "./components/app/App";
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import reducer from "./reducer";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        
      })
    : compose;

const loggerMiddleware = store => next => action => {
  const result = next(action)
  return result;
}

const store = createStore(reducer, composeEnhancers(applyMiddleware(loggerMiddleware, reduxThunk)));

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);