import React from 'react';
import Navigation from './Navigation/Navigation';
import Media from 'react-media';

import { ReactComponent as Logo } from '../../ui/header/Logo.svg';
import styles from './Header.module.scss';
import BurgerNavigation from './Navigation/BurgerNavigation';
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={`container ${styles.headerWrp}`}>
        <nav className={styles.navBar}>
          <div className={styles.logoBox} href="#">
            <a className={styles.logoLink} href="#">
              <Logo className={styles.logo} />
            </a>
          </div>
          <Media query={{ maxWidth: 767 }}>
            {matches => (matches ? <BurgerNavigation /> : <Navigation />)}
          </Media>
        </nav>
      </div>
    </div>
  );
};

export default Header;
