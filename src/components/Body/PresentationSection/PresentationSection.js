import React, { useState, createRef, useEffect } from 'react';
import lottie from 'lottie-web';

import Media from 'react-media';
import styles from './PresentationSection.module.scss';
import animation from '../../../ui/comunication/animation/animation.json';
import beforeImg from '../../../ui/comunication/Before.png';
const PresentationSection = () => {
  const [before, setBefore] = useState(true);
  const [after, setAfter] = useState(false);
  const handleChangeBefore = () => {
    if (before !== true) {
      setAfter(!after);
      setBefore(!before);
    } else {
      return;
    }
  };
  const handleChangeAfter = () => {
    if (after !== true) {
      setAfter(!after);
      setBefore(!before);
    } else {
      return;
    }
  };
  let animationContainer = createRef();
  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,

      animationData: animation,
    });
    anim.setSpeed(1);
  }, [animationContainer]);
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <div className={styles.contentImg}>
            {before ? (
              <img src={beforeImg} alt="before img" className={styles.img} />
            ) : (
              <div
                ref={animationContainer}
                className={styles.animationWrapper}
              ></div>
            )}
          </div>
          <div className={styles.contentTitleBox}>
            <div className={styles.line}>
              <h3 className={styles.contentTitle}>Communication</h3>
              <div className={styles.contentButtons}>
                <button
                  className={before ? styles.btnActive : styles.btn}
                  onClick={handleChangeBefore}
                >
                  Before
                </button>
                <button
                  className={after ? styles.btnActive : styles.btn}
                  onClick={handleChangeAfter}
                >
                  After
                </button>
              </div>
            </div>
          </div>
          <div className={styles.contentText}>
            {before ? (
              <>
                <h4 className={styles.descTitle}>Old-School Chaos</h4>
                <p className={styles.descText}>
                  Unstructured orders across multiple apps and inboxes. New
                  message notifications and alerts every few minutes
                </p>
              </>
            ) : (
              <>
                <h4 className={styles.descTitle}>New-School Chaos</h4>
                <p className={styles.descText}>
                  Unstructured orders across multiple apps and inboxes. New
                  message notifications and alerts every few minutes
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresentationSection;
