import React from 'react';
import { Link } from 'react-router-dom';

const styles = require('./Header.scss');

const Header: React.SFC = () => {
    return (
        <div className={styles.container}>
            <span className={styles.link}>
                <Link to="/">Go to Main</Link>
            </span>
        </div>
    )
}

export default Header;
