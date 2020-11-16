import React, { useState, useEffect } from 'react';
import Navigation from './Navigation/Navigation';
import ModalNavigation from './Navigation/ModalNavigation';

import Media from 'react-media';

import { ReactComponent as Burger } from '../../ui/header/Burger.svg';
import { ReactComponent as Logo } from '../../ui/header/Logo.svg';
import styles from './Header.module.scss';
const Header = () => {
  const [modalActive, setModalActive] = useState(false);

  const updateBodyStyles = () => {
    if (modalActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  };
  useEffect(() => {
    updateBodyStyles();
  }, [modalActive]);
  return (
    <>
      <div className={styles.header}>
        <div className={`${styles.headerWrp}`}>
          <nav className={styles.navBar}>
            <div className={styles.logoBox} href="#">
              <a className={styles.logoLink} href="#">
                <Logo className={styles.logo} />
              </a>
            </div>
            <Media query={{ maxWidth: 767 }}>
              {matches =>
                matches ? (
                  <div className={styles.burgerBox}>
                    {!modalActive ? (
                      <Burger onClick={() => setModalActive(true)} />
                    ) : (
                      <div className={styles.closeBtn}>
                        <button
                          className={styles.btnModal}
                          type="button"
                          onClick={() => setModalActive(false)}
                        ></button>
                      </div>
                    )}
                  </div>
                ) : (
                  <Navigation />
                )
              }
            </Media>
          </nav>
        </div>
        {modalActive && <ModalNavigation closeModal={setModalActive} />}
      </div>
    </>
  );
};

export default Header;
