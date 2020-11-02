import React, { useState } from 'react';
import styles from './SliderSection.module.scss';

import { ReactComponent as Left } from '../../../ui/carousel/left.svg';
import { ReactComponent as Right } from '../../../ui/carousel/right.svg';

import Orders from '../../../ui/carousel/Orders.png';
import OperationalCosts from '../../../ui/carousel/OperationalCosts.png';
import Analytics from '../../../ui/carousel/Analytics.png';

const SliderSection = () => {
  const [images] = useState([Orders, OperationalCosts, Analytics]);
  const [descriptions] = useState([
    {
      title: 'All your orders in one place',
      text:
        'Say no more to chunky emails and messy WhatsApp messages. Receive and manage your orders in one platform',
    },
    {
      title: 'Some text',
      text:
        'Say no more to chunky emails and messy WhatsApp messages. Receive and manage your orders in one platform',
    },
    {
      title: 'Bla bla bla',
      text:
        'Say no more to chunky emails and messy WhatsApp messages. Receive and manage your orders in one platform',
    },
  ]);
  const [index, setIndex] = useState(0);
  const [canGoNext, setCanGoNext] = useState(true);
  const [canGoPrev, setCanGoPrev] = useState(false);

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
      setCanGoNext(true);
    }
    if (index === 0) {
      setCanGoPrev(false);
    }
  };

  const next = () => {
    if (index < images.length - 1) {
      setIndex(index + 1);
      setCanGoPrev(true);
    }
    if (index === images.length - 1) {
      setCanGoNext(false);
    }
  };

  return (
    <section className={styles.sliderSection}>
      <div className={`container `}>
        <div className={styles.contentWrp}>
          <div className={styles.descriptions}>
            <ul className={styles.btnWrapper}>
              <li>
                <button
                  className={styles.btn}
                  disabled={!canGoPrev}
                  onClick={prev}
                >
                  <Left
                    className={canGoPrev ? styles.img : styles.imgDisabled}
                  />
                </button>
              </li>
              <li>
                <ul className={styles.paginationList}>
                  <li>
                    <button
                      className={
                        index === 0
                          ? styles.paginationBtnActive
                          : styles.paginationBtn
                      }
                      onClick={() => {
                        setIndex(0);
                      }}
                    ></button>
                  </li>
                  <li>
                    <button
                      className={
                        index === 1
                          ? styles.paginationBtnActive
                          : styles.paginationBtn
                      }
                      onClick={() => {
                        setIndex(1);
                      }}
                    ></button>
                  </li>
                  <li>
                    <button
                      className={
                        index === 2
                          ? styles.paginationBtnActive
                          : styles.paginationBtn
                      }
                      onClick={() => {
                        setIndex(2);
                      }}
                    ></button>
                  </li>
                </ul>
              </li>
              <li>
                <button
                  className={styles.btn}
                  disabled={!canGoNext}
                  onClick={next}
                >
                  <Right
                    className={canGoNext ? styles.img : styles.imgDisabled}
                  />
                </button>
              </li>
            </ul>

            <div className={styles.descriptionsWrapper}>
              <h3 className={styles.sectionTitle}>
                {descriptions[index].title}
              </h3>
              <p className={styles.descriprionText}>
                {descriptions[index].text}
              </p>
            </div>
          </div>
          <div className={styles.imgWrapper}>
            <img
              src={images[index]}
              alt={images[index].name}
              className={styles.contentImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderSection;
