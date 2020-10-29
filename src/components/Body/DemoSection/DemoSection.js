import React from 'react';
import styles from './DemoSection.module.scss';
import demo from '../../../ui/demo/desktop.png';

const DemoSection = () => (
  <section className={styles.demoSection}>
    <div className={`container sectionWrapper`}>
      <img src={demo} alt="demo page" className={styles.img} />
    </div>
  </section>
);

export default DemoSection;
