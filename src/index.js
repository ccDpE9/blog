import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';

import registerServiceWorker from "./registerServiceWorker";
import { store, history } from "./redux/store"; 
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";

ReactDOM.render((
  // wrapp App container in Redux Provider
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </ConnectedRouter>
    <App />
  </Provider>
), document.querySelector('.container'));
registerServiceWorker();
