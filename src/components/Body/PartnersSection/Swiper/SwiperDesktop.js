import React from 'react';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

import styles from './SwiperDesktop.module.scss';

import { ReactComponent as Bens } from '../../../../ui/partners/Bens.svg';
import { ReactComponent as Jolliebean } from '../../../../ui/partners/Jolliebean.svg';
import goCheken from '../../../../ui/partners/GoCheken.png';
import Italian from '../../../../ui/partners/Italian.png';
import SimplyWrapps from '../../../../ui/partners/SimplyWrapps.png';

const SwiperDesktop = () => {
  SwiperCore.use([Autoplay]);
  return (
    <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      spaceBetween={0}
      slidesPerView={5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={swiper => console.log(swiper)}
    >
      <SwiperSlide>
        <div className={styles.imgWrp}>
          <img src={goCheken} alt={goCheken.alt} className={styles.img} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.imgWrp}>
          <Bens className={styles.img} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.imgWrp}>
          <Jolliebean className={styles.img} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.imgWrp}>
          <img
            src={SimplyWrapps}
            alt={SimplyWrapps.alt}
            className={styles.img}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.imgWrp}>
          <img src={Italian} alt={Italian.alt} className={styles.img} />{' '}
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperDesktop;
