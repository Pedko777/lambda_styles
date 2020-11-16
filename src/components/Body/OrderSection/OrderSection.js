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
      <div className={styles.container}>
        <div className={styles.orderHead}>
          <div className={styles.orderHeadTitle}>
            <h3 className={styles.sectionTitle}>
              Seamless Ordering Experience
            </h3>
          </div>
          <div className={styles.orderHeadDesc}>
            <Media queries={{ large: { minWidth: 1280 } }}>
              {matches =>
                matches.large ? (
                  <p className={styles.descriprionText}>
                    Increase your sales by 30% with a better checkout
                    experience. Your customers can place orders <br /> easily
                    with a few taps on the item list
                  </p>
                ) : (
                  <p className={styles.descriprionText}>
                    Increase your sales by 30% with a better checkout
                    experience. Your customers can place orders easily with a
                    few taps on the item list
                  </p>
                )
              }
            </Media>
          </div>
        </div>
        <ul className={styles.orderList}>
          <li className={styles.orderListItem}>
            <img src={screen3} className={styles.orderListItemImg} />
            <div className={styles.orderListItemTextWrap}>
              <p className={styles.orderListItemText}>Send Order</p>
              <Arrow className={styles.listItemDescImg} />
            </div>
          </li>
          <li className={styles.orderListItem}>
            <img src={screen2} className={styles.orderListItemImg} />
            <div className={styles.orderListItemTextWrap}>
              <p className={styles.orderListItemText}>Review Order</p>
              <Arrow className={styles.listItemDescImg} />
            </div>
          </li>
          <li className={styles.orderListItem}>
            <img src={screen1} className={styles.orderListItemImg} />
            <div className={styles.orderListItemTextWrap}>
              <p className={styles.orderListItemText}>Select Items</p>
              <Ok />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default OrderSection;
