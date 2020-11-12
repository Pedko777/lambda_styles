import React, { useState } from 'react';
import styles from './NewSliderSection.module.scss';

import { ReactComponent as Left } from '../../../ui/carousel/left.svg';
import { ReactComponent as Right } from '../../../ui/carousel/right.svg';
import Orders from '../../../ui/carousel/Orders.png';
import OperationalCosts from '../../../ui/carousel/OperationalCosts.png';
import Analytics from '../../../ui/carousel/Analytics.png';

const NewSliderSection = () => {
  let sliderArr = [Orders, OperationalCosts, Analytics];

  const [x, setX] = useState(0);
  const prev = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };

  const next = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.content}>
        <div className={styles.carousel}>
          <div className={styles.slider}>
            <div
              className={styles.slide}
              style={{ transform: `translateX(${x}%` }}
            >
              <img src={Orders} alt="slideImg" className={styles.slideImg} />
            </div>
            <div
              className={styles.slide}
              style={{ transform: `translateX(${x}%` }}
            >
              <img
                src={OperationalCosts}
                alt="slideImg"
                className={styles.slideImg}
              />
            </div>
            <div
              className={styles.slide}
              style={{ transform: `translateX(${x}%` }}
            >
              <img
                src={Analytics}
                alt="slideImg"
                className={styles.slideImgLast}
              />
            </div>
          </div>
        </div>
        <div className={styles.descriptions}>
          <ul className={styles.btnWrapper}>
            <li>
              <button className={styles.btn} onClick={prev}>
                <Left className={styles.img} />
              </button>
            </li>
            <li>
              <ul className={styles.paginationList}>
                <li>
                  <button
                    className={
                      x === 0
                        ? styles.paginationBtnActive
                        : styles.paginationBtn
                    }
                    onClick={() => {
                      setX(0);
                    }}
                  ></button>
                </li>
                <li>
                  <button
                    className={
                      x === -100
                        ? styles.paginationBtnActive
                        : styles.paginationBtn
                    }
                    onClick={() => {
                      setX(-100);
                    }}
                  ></button>
                </li>
                <li>
                  <button
                    className={
                      x === -200
                        ? styles.paginationBtnActive
                        : styles.paginationBtn
                    }
                    onClick={() => {
                      setX(-200);
                    }}
                  ></button>
                </li>
              </ul>
            </li>
            <li>
              <button className={styles.btn} onClick={next}>
                <Right className={styles.img} />
              </button>
            </li>
          </ul>
          <div className={styles.textCarousel}>
            <div className={styles.slider}>
              <div
                className={styles.slide}
                style={{ transform: `translateX(${x}%` }}
              >
                <h3 className={styles.sectionTitle}>
                  All your orders in one place
                </h3>
                <p className={styles.descriprionText}>
                  Say no more to chunky emails and messy WhatsApp messages.
                  Receive and manage your orders in one platform
                </p>
              </div>
              <div
                className={styles.slide}
                style={{ transform: `translateX(${x}%` }}
              >
                <h3 className={styles.sectionTitle}>Some text</h3>
                <p className={styles.descriprionText}>
                  Say no more to chunky emails and messy WhatsApp messages.
                  Receive and manage your orders in one platform
                </p>
              </div>
              <div
                className={styles.slide}
                style={{ transform: `translateX(${x}%` }}
              >
                <h3 className={styles.sectionTitle}>Bla bla bla</h3>
                <p className={styles.descriprionText}>
                  Say no more to chunky emails and messy WhatsApp messages.
                  Receive and manage your orders in one platform
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewSliderSection;
