import React from 'react';
import { ReactComponent as Burger } from '../../../ui/header/Burger.svg';
import styles from './BurgerNavigation.module.scss';
const BurgerNavigation = () => {
  return (
    <div className={styles.burgerBox}>
      <Burger />
    </div>
  );
};

export default BurgerNavigation;
