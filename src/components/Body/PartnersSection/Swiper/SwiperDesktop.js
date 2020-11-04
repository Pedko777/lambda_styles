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
    >
      <SwiperSlide>
        <div className={styles.imgWrpCheken}>
          <img src={goCheken} alt={goCheken.alt} className={styles.imgCheken} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.imgWrpJolliebean}>
          <Jolliebean className={styles.imgJoollibean} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.imgWrpBens}>
          <Bens className={styles.bensImg} />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className={styles.imgWrpSimply}>
          <img
            src={SimplyWrapps}
            alt={SimplyWrapps.alt}
            className={styles.simplyImg}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.imgWrpItalian}>
          <img src={Italian} alt={Italian.alt} className={styles.imgItalian} />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperDesktop;
