import React from 'react';
import styles from './FormSection.module.scss';
import Media from 'react-media';

import arrow from '../../../ui/form/arrow.png';
import arrow2 from '../../../ui/form/arrow2.png';
import { ReactComponent as Sg } from '../../../ui/form/countries/sg.svg';
import { ReactComponent as Ind } from '../../../ui/form/countries/Ind.svg';
import { ReactComponent as Aus } from '../../../ui/form/countries/aus.svg';
import { ReactComponent as Tw } from '../../../ui/form/countries/tw.svg';
import { ReactComponent as Hk } from '../../../ui/form/countries/hk.svg';
import { ReactComponent as Th } from '../../../ui/form/countries/th.svg';
import { ReactComponent as In } from '../../../ui/form/countries/in.svg';
import { ReactComponent as Vn } from '../../../ui/form/countries/vn.svg';

const FormSection = () => {
  return (
    <section className={styles.formSection}>
      <div className={styles.bgOval}></div>
      <div>
        <div className={styles.content}>
          <div className={styles.formTop}>
            <p className={styles.sectionText}>let’s do this</p>
            <Media query={{ maxWidth: 1279 }}>
              {matches =>
                matches ? (
                  <h3 className={styles.sectionTitle}>
                    Fill up the form and we’ll get in touch within a few hours
                  </h3>
                ) : (
                  <h3 className={styles.sectionTitle}>
                    Fill up the form and we’ll get in touch within
                    <br />a few hours
                  </h3>
                )
              }
            </Media>
          </div>
          <div className={styles.meetUs}>
            <div className={styles.arrowBox}>
              <img src={arrow} alt="arrow" className={styles.imgArrow} />
              <p className={styles.arrowBoxText}>Or meet us in</p>
            </div>
            <ul className={styles.countryList}>
              <li className={styles.countryListItem}>
                <Sg className={styles.countryListItemImg} />
                <div className={styles.countryListItemName}>
                  <p>Singapore</p>
                </div>
              </li>
              <li className={styles.countryListItem}>
                <Ind className={styles.countryListItemImg} />
                <div className={styles.countryListItemName}>
                  <p>Indonesia</p>
                </div>
              </li>
              <li className={styles.countryListItem}>
                <Aus className={styles.countryListItemImg} />
                <div className={styles.countryListItemName}>
                  <p>Australia</p>
                </div>
              </li>
              <li className={styles.countryListItem}>
                <Tw className={styles.countryListItemImg} />
                <div className={styles.countryListItemName}>
                  <p>Taiwan</p>
                </div>
              </li>
              <li className={styles.countryListItem}>
                <Hk className={styles.countryListItemImg} />
                <div className={styles.countryListItemName}>
                  <p>Hong Kong</p>
                </div>
              </li>
              <li className={styles.countryListItem}>
                <Th className={styles.countryListItemImg} />
                <div className={styles.countryListItemName}>
                  <p>Thailand</p>
                </div>
              </li>
              <li className={styles.countryListItem}>
                <In className={styles.countryListItemImg} />
                <div className={styles.countryListItemName}>
                  <p>India</p>
                </div>
              </li>
              <li className={styles.countryListItem}>
                <Vn className={styles.countryListItemImg} />
                <div className={styles.countryListItemName}>
                  <p>Vietnam</p>
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.formWrap}>
            <div className={styles.formBg}></div>
            <form className={styles.contactForm}>
              <div className={styles.arrowBox}>
                <img src={arrow2} className={styles.arrowBoxImg} alt="arrow" />
                <p className={styles.arrowBoxImgText}>
                  Let’s get to know each other
                </p>
              </div>
              <div className={styles.formTitleBox}>
                <h4 className={styles.formTitle}>
                  Hi, we are Tinvio! And you?
                </h4>
              </div>
              <div className={styles.inputWrapper}>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className={styles.contactFormInput}
                />
              </div>
              <div className={styles.inputWrapper}>
                <input
                  name="businessName"
                  type="text"
                  placeholder="Business Name"
                  className={styles.contactFormInput}
                />
              </div>
              <div className={styles.inputWrapperPhone}>
                <input
                  name="code"
                  type="number"
                  placeholder="+65"
                  className={styles.contactFormInputCode}
                />
                <input
                  name="phone"
                  type="number"
                  className={styles.contactFormInputPhone}
                />
              </div>
              <div className={styles.btnWrapper}>
                <button className={styles.btn}> Get Started</button>
                <p className={styles.btnWrapperText}>No spam, promise 🙌</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FormSection;
