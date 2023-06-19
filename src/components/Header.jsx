import { Component } from 'react';
import styles from './header.module.css';

class Header extends Component {
    render() {
        return (
            <>
                <h1 className={styles.header}>ToDo React App</h1>
            </>
        );
    }
}

export default Header;
