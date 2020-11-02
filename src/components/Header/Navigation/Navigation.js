import React from 'react';
import styles from './Navigation.module.scss';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <ul className={styles.navigationList}>
        <li className={styles.navigationListItem}>
          <NavLink
            to="/"
            exact
            className={styles.navLink}
            activeClassName={styles.active}
          >
            Home
          </NavLink>
        </li>
        <li className={styles.navigationListItem}>
          <NavLink
            to="/supplier"
            className={styles.navLink}
            activeClassName={styles.active}
          >
            Supplier
          </NavLink>
        </li>
        <li className={styles.navigationListItem}>
          <NavLink
            to="/aboute"
            className={styles.navLink}
            activeClassName={styles.active}
          >
            Aboute
          </NavLink>
        </li>
        <li className={styles.navigationListItem}>
          <NavLink
            to="/contact"
            className={styles.navLink}
            activeClassName={styles.active}
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <button className={styles.btn}>Get Started</button>
    </div>
  );
};

export default Navigation;
