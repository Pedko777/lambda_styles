import React from 'react';
import styles from './Navigation.module.scss';

const Navigation = () => (
  <div className={styles.navigation}>
    <ul className={styles.navigationList}>
      <li className={styles.navigationListItem}>
        <a to="/" exact className={styles.navLink}>
          Home
        </a>
      </li>
      <li className={styles.navigationListItem}>
        <a to="/supplier" className={styles.navLink}>
          Supplier
        </a>
      </li>
      <li className={styles.navigationListItem}>
        <a to="/about" className={styles.navLink}>
          Aboute
        </a>
      </li>
      <li className={styles.navigationListItem}>
        <a to="/contact" className={styles.navLink}>
          Contact
        </a>
      </li>
    </ul>
    <button className={styles.btn}>Get Started</button>
  </div>
);

export default Navigation;
