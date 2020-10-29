import React from 'react';
import styles from './SliderSection.module.scss';

import Analytics from '../../../ui/carousel/Analytics.png';
import OperationalCosts from '../../../ui/carousel/OperationalCosts.png';
import Orders from '../../../ui/carousel/Orders.png';

const SliderSection = () => {
  return (
    <section className={styles.sliderSection}>
      <div className={`container`}>
        <div className={styles.descriptions}></div>
        <div className={styles.img}></div>
      </div>
    </section>
  );
};

export default SliderSection;
