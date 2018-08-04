import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import { hot } from 'react-hot-loader';

import { Home, TodoPage } from '..';
import { Header } from '../../components';
const styles = require('./App.scss');
// Type script can't handle file other than 'ts, tsx'.
// When use require(~), webpack handle this.

class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route>
            <div>
              <Header />
              <Route path="/todo" component={TodoPage} />
            </div>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default hot(module)(App);

