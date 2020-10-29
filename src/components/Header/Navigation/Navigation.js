import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

const Navigation = () => (
  <div className={styles.navigation}>
    <ul className={styles.navigationList}>
      <li className={styles.navigationListItem}>
        <NavLink
          to="#"
          exact
          className={styles.navLink}
          //   activeClassName={styles.navLinkActive}
        >
          Home
        </NavLink>
      </li>
      <li className={styles.navigationListItem}>
        <NavLink
          to="#"
          className={styles.navLink}
          //   activeClassName={styles.navLinkActive}
        >
          Supplier
        </NavLink>
      </li>
      <li className={styles.navigationListItem}>
        <NavLink
          to="#"
          className={styles.navLink}
          //   activeClassName={styles.navLinkActive}
        >
          Aboute
        </NavLink>
      </li>
      <li className={styles.navigationListItem}>
        <NavLink
          to="#"
          className={styles.navLink}
          //   activeClassName={styles.navLinkActive}
        >
          Contact
        </NavLink>
      </li>
    </ul>
    <button className={styles.btn}>Get Started</button>
  </div>
);

export default Navigation;
