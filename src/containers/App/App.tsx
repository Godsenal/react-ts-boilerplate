import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import { Home, TodoPage } from '../';
import styles from './App.scss';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className={styles.container}>
          <Route exact path="/" component={Home} />
          <Route path="/todo" component={TodoPage} />
        </div>
      </Router>
    );
  }
}

export default App;

