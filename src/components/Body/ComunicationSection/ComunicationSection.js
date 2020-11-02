import React, { useState, createRef, useEffect } from 'react';
import styles from './ComunicationSection.module.scss';
import lottie from 'lottie-web';
import animation from '../../../ui/comunication/animation/animation.json';
import beforeImg from '../../../ui/comunication/Before.png';
import Media from 'react-media';
const ComunicationSection = () => {
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
    <section className={styles.comunicationSection}>
      <div className={`container `}>
        <div className={styles.content}>
          <div className={styles.imgWrapper}>
            {before ? (
              <img
                src={beforeImg}
                alt={beforeImg.name}
                className={styles.img}
              />
            ) : (
              <div
                ref={animationContainer}
                className={styles.animationWrapper}
              ></div>
            )}
          </div>
          <Media queries={{ large: { minWidth: 1024 } }}>
            {matches =>
              matches.large ? (
                <div className={styles.desktopWrapp}>
                  <div className={styles.title}>
                    <h3 className={styles.sectionTitle}>Comunication</h3>
                    <div
                      className={
                        before ? styles.btnWrapper : styles.btnWrapperNew
                      }
                    >
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
                  <div className={styles.desc}>
                    {before ? (
                      <>
                        <h4 className={styles.descTitle}>Old-School Chaos</h4>
                        <p className={styles.descText}>
                          Unstructured orders across multiple apps and inboxes.
                          New message notifications and alerts every few minutes
                        </p>
                      </>
                    ) : (
                      <>
                        <h4 className={styles.descTitle}>New-School Chaos</h4>
                        <p className={styles.descText}>
                          Unstructured orders across multiple apps and inboxes.
                          New message notifications and alerts every few minutes
                        </p>
                      </>
                    )}
                  </div>
                </div>
              ) : (
                <>
                  <div className={styles.title}>
                    <h3 className={styles.sectionTitle}>Communication</h3>
                    <div
                      className={
                        before ? styles.btnWrapper : styles.btnWrapperNew
                      }
                    >
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
                  <div className={styles.desc}>
                    {before ? (
                      <>
                        <h4 className={styles.descTitle}>Old-School Chaos</h4>
                        <p className={styles.descText}>
                          Unstructured orders across multiple apps and inboxes.
                          New message notifications and alerts every few minutes
                        </p>
                      </>
                    ) : (
                      <>
                        <h4 className={styles.descTitle}>New-School Chaos</h4>
                        <p className={styles.descText}>
                          Unstructured orders across multiple apps and inboxes.
                          New message notifications and alerts every few minutes
                        </p>
                      </>
                    )}
                  </div>
                </>
              )
            }
          </Media>
        </div>
      </div>
    </section>
  );
};

export default ComunicationSection;
