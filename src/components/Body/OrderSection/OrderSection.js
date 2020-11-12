import React from 'react';
import styles from './OrderSection.module.scss';
import Media from 'react-media';
import screen1 from '../../../ui/order/Screen1.png';
import screen2 from '../../../ui/order/Screen2.png';
import screen3 from '../../../ui/order/Screen3.png';
import { ReactComponent as Arrow } from '../../../ui/order/arrow.svg';
import { ReactComponent as Ok } from '../../../ui/order/ok.svg';

const OrderSection = () => {
  return (
    <section className={styles.orderSection}>
      <div className={`container sectionWrapper`}>
        <div className={styles.orderHead}>
          <Media queries={{ small: { maxWidth: 1023 } }}>
            {matches =>
              matches.small ? (
                <h3 className={styles.sectionTitle}>
                  Seamless Ordering Experience
                </h3>
              ) : (
                <h3 className={styles.sectionTitle}>
                  Seamless Ordering <br />
                  Experience
                </h3>
              )
            }
          </Media>
          <p className={styles.descriprionText}>
            Increase your sales by 30% with a better checkout experience. Your
            customers can place orders easily with a few taps on the item list
          </p>
        </div>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <img src={screen1} alt={screen3.name} className={styles.img} />
            <div className={styles.listItemDescWrp}>
              <p className={styles.listItemDesc}>Select Items</p>
              <Ok />
            </div>
          </li>
          <li className={styles.listItem}>
            <img src={screen2} alt={screen2.name} className={styles.img} />
            <div className={styles.listItemDescWrp}>
              <p className={styles.listItemDesc}>Review Order</p>
              <Arrow className={styles.listItemDescImg} />
            </div>
          </li>
          <li className={styles.listItem}>
            <img src={screen3} alt={screen1.name} className={styles.img} />
            <div className={styles.listItemDescWrp}>
              <p className={styles.listItemDesc}>Send Order</p>
              <Media queries={{ small: { maxWidth: 767 } }}>
                {matches =>
                  matches.small ? (
                    <Arrow className={styles.listItemDescImg} />
                  ) : (
                    <Ok />
                  )
                }
              </Media>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default OrderSection;
