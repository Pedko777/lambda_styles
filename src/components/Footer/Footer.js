import React from 'react';
import Media from 'react-media';
import styles from './Footer.module.scss';

import logo from '../../ui/footer/logo.png';
import linkedin from '../../ui/footer/linkedin.png';
import instagram from '../../ui/footer/instagram.png';
import googleStore from '../../ui/footer/googleStore.png';
import appleStore from '../../ui/footer/AppleStore.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrp}>
        <div className={styles.content}>
          <a href="#">
            <img src={logo} alt="logo" className={styles.logo} />
          </a>

          <nav className={styles.footerNav}>
            <Media query={{ maxWidth: 1023 }}>
              {matches =>
                matches ? (
                  <ul className={styles.navList}>
                    <li className={styles.navListItem}>
                      <a href="#" className={styles.link}>
                        Home
                      </a>
                    </li>
                    <li className={styles.navListItem}>
                      <a href="#" className={styles.link}>
                        About
                      </a>
                    </li>
                    <li className={styles.navListItem}>
                      <a href="#" className={styles.link}>
                        Contact
                      </a>
                    </li>
                    <li className={styles.navListItem}>
                      <a href="#" className={styles.link}>
                        FAQ
                      </a>
                    </li>
                    <li className={styles.navListItem}>
                      <a href="#" className={styles.link}>
                        Blog
                      </a>
                    </li>
                    <li className={styles.navListItem}>
                      <a href="#" className={styles.link}>
                        Legal
                      </a>
                    </li>
                  </ul>
                ) : (
                  <ul className={styles.navList}>
                    <li className={styles.navListItem}>
                      <a href="#" className={styles.link}>
                        Home
                      </a>
                    </li>
                    <li className={styles.navListItem}>
                      <a href="#" className={styles.link}>
                        Supplier
                      </a>
                    </li>
                    <li className={styles.navListItem}>
                      <a href="#" className={styles.link}>
                        About
                      </a>
                    </li>
                    <li className={styles.navListItem}>
                      <a href="#" className={styles.link}>
                        Contact
                      </a>
                    </li>
                    <li className={styles.navListItem}>
                      <a href="#" className={styles.link}>
                        FAQ
                      </a>
                    </li>
                    <li className={styles.navListItem}>
                      <a href="#" className={styles.link}>
                        Legal
                      </a>
                    </li>
                  </ul>
                )
              }
            </Media>
          </nav>
          <ul className={styles.socialsList}>
            <li>
              <a href="#">
                <img src={instagram} alt="instagram icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={linkedin} alt="linkedin icon" />
              </a>
            </li>
          </ul>
          <ul className={styles.storeList}>
            <li className={styles.storeListItem}>
              <a href="#">
                <img src={appleStore} alt="appleStore icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={googleStore} alt="googleStore icon" />
              </a>
            </li>
          </ul>
          <div className={styles.footerLinkWrapper}>
            <a className={styles.footerLink} href="#">
              © Tinvio™ 2019. All Rights Reserved
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
