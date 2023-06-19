import { Component } from 'react';
import styles from '../style.module.css';

class Header extends Component {
    render() {
        return <h1 className={styles.header}>Todo React App</h1>;
    }
}

export default Header;
