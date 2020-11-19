import React from 'react';
import styles from './FirstSection.module.scss';
import Media from 'react-media';

const FirstSection = () => (
  <section className={styles.firstSection}>
    <div className={styles.bgImg}>
      <div className={`container`}>
        <div className={styles.sectionDscr}>
          <div className={styles.titleWrapper}>
            <h2 className={styles.firstTitle}>FOR A SMARTER SUPPLY CHAIN</h2>
          </div>
          <Media queries={{ small: { maxWidth: 767 } }}>
            {matches =>
              matches.small ? (
                <h1 className={styles.secondTitle}>
                  Take your business to the next level with Tinvio's Supplier
                  Platform
                </h1>
              ) : (
                <h1 className={styles.secondTitle}>
                  Take your business to the next level <br />
                  with Tinvio's Supplier Platform
                </h1>
              )
            }
          </Media>
          <button className={styles.sectionBtn}>Get Started Now</button>
          <p className={styles.sectionBtnDesc}>Yes, it’s free 🎉</p>
        </div>
      </div>
    </div>
  </section>
);
export default FirstSection;
