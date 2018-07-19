import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { App } from './';
import configureStore from '../store/configureStore';

const store = configureStore();

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route path="/" component={App} />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Root;
