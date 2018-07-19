import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../images/react-icon.png';
import styles from './Home.scss';

const Home: React.SFC = () => (
  <div className={styles.container}>
    <h1 className={styles.header}>Welcome!</h1>
    <img className={styles.icon} src={Icon} />
    <p className={styles.paragraph}>Welcome to simple react boilerplate.</p>
    <a className={styles.link} href="https://github.com/Godsenal/react-boilerplate">Github</a>
    <h2>Example List</h2>
    <ul>
      <li>
        <Link to="/todo">Todo</Link>
      </li>
    </ul>
  </div>
);

export default Home;
