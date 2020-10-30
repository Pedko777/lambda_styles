import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

const Navigation = () => (
  <div className={styles.navigation}>
    <ul className={styles.navigationList}>
      <li className={styles.navigationListItem}>
        <a
          to="#"
          exact
          className={styles.navLink}
          //   activeClassName={styles.navLinkActive}
        >
          Home
        </a>
      </li>
      <li className={styles.navigationListItem}>
        <a
          to="#"
          className={styles.navLink}
          //   activeClassName={styles.navLinkActive}
        >
          Supplier
        </a>
      </li>
      <li className={styles.navigationListItem}>
        <a
          to="#"
          className={styles.navLink}
          //   activeClassName={styles.navLinkActive}
        >
          Aboute
        </a>
      </li>
      <li className={styles.navigationListItem}>
        <a
          to="#"
          className={styles.navLink}
          //   activeClassName={styles.navLinkActive}
        >
          Contact
        </a>
      </li>
    </ul>
    <button className={styles.btn}>Get Started</button>
  </div>
);

export default Navigation;
