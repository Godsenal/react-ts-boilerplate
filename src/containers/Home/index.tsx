import React from 'react';
import { Link } from 'react-router-dom';
const Icon = require('../../images/react-icon.png');
const styles = require('./Home.scss');

// React.SFC : Type for stateless(functional) component
const Home: React.SFC = () => (
  <div className={styles.container}>
    <h1 className={styles.header}>Welcome!</h1>
    <img className={styles.icon} src={Icon} />
    <div className={styles.sub_container}>
      <h2>Welcome to simple react typescript boilerplate.</h2>
      <a className={styles.link} href="https://github.com/Godsenal/react-ts-boilerplate">Github</a>
      <h2>Example</h2>
      <Link className={styles.link} to="/todo">Todo</Link>
    </div>
  </div>
);

export default Home;
