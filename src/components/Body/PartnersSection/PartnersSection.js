import React from 'react';
import styles from './PartnersSection.module.scss';

import Media from 'react-media';
import SwiperPhone from './Swiper/SwiperPhone';
import SwiperDesktop from './Swiper/SwiperDesktop';

const PartnersSection = () => {
  return (
    <section className={styles.partnersSection}>
      <div className={styles.contentWrap}>
        <div className={styles.titleWrapper}>
          <h3 className={styles.sectionTitle}>
            Trusted by 1000+ partners across APAC
          </h3>
        </div>
        <div className={styles.swiper}>
          <div className={styles.swiperWrapper}>
            <Media queries={{ small: { maxWidth: 767 } }}>
              {matches => (matches.small ? <SwiperPhone /> : <SwiperDesktop />)}
            </Media>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PartnersSection;
