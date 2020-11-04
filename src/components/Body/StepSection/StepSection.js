import React from 'react';
import styles from './StepSection.module.scss';
import Media from "react-media"
import question from '../../../ui/step/1.png';
import body from '../../../ui/step/2.png';
import heart from '../../../ui/step/3.png';

const StepSection = () => {
  return (
    <section className={styles.stepSection}>
      <div className={styles.stepSectionWrp}>
        <div className={styles.sectionTop}>
          <p className={styles.sectionText}>ARE YOU READY?</p>
          <h3 className={styles.sectionTitle}>3 Simple Steps to Get Started</h3>
        </div>
        <ul className={styles.stepList}>
          <li className={styles.stepListItem}>
            <img src={question} alt="question img" className={styles.img} />
            <h4 className={styles.stepListItemTitle}>Get in Touch With Us</h4>
            <p className={styles.stepListItemDesc}>
              Fill up the form and we’ll reach out to you
            </p>
          </li>
          <li className={styles.stepListItem}>
            <img src={body} alt="body img" className={styles.img} />
            <h4 className={styles.stepListItemTitle}>
              Connect to Your Clients
            </h4>
            <p className={styles.stepListItemDesc}>
              They’ll receive a fully guided <br /> tutorial on how to order
            </p>
          </li>
          <li className={styles.stepListItem}>
            <img src={heart} alt="heart img" className={styles.img} />
            <h4 className={styles.stepListItemTitle}>
              Onboarded In a Heartbeat
            </h4>
            <Media query={{ maxWidth: 1023 }}>
            {matches => (matches ? <p className={styles.stepListItemDesc}>
              Activated and live within a day
            </p> : <p className={styles.stepListItemDesc}>
              Activated and live <br/> within a day
            </p>)}
          </Media>
            
          </li>
        </ul>
      </div>
    </section>
  );
};

export default StepSection;
