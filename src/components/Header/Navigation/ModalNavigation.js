import React, { createRef, useEffect } from 'react';
import styles from './ModalNavigation.module.scss';
import { NavLink } from 'react-router-dom';

const ModalNavigation = ({ closeModal }) => {
  const handleKeydown = e => {
    if (e.code === 'Escape') {
      closeModal(false);
    }
  };

  const handleClickModal = e => {
    if (e.target === modalRef.current || e.target.nodeName === 'BUTTON') {
      closeModal(false);
    }
  };

  const modalRef = createRef();

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    modalRef.current.addEventListener('click', handleClickModal);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
      modalRef.current.removeEventListener('click', handleClickModal);
    };
  }, [handleClickModal, handleKeydown, modalRef]);
  return (
    <div ref={modalRef} className={styles.overlay}>
      <div className={styles.modalWindow}>
        <nav className={styles.navigation}>
          <ul className={styles.navigationList}>
            <li className={styles.navigationListItem}>
              <NavLink to="/" exact className={styles.navLink}>
                Home
              </NavLink>
            </li>
            <li className={styles.navigationListItem}>
              <NavLink to="/supplier" className={styles.navLink}>
                Supplier
              </NavLink>
            </li>
            <li className={styles.navigationListItem}>
              <NavLink to="/aboute" className={styles.navLink}>
                About
              </NavLink>
            </li>
            <li className={styles.navigationListItem}>
              <NavLink to="/contact" className={styles.navLink}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <button className={styles.sectionBtn}>Get Started Now</button>
      </div>
    </div>
  );
};

export default ModalNavigation;
