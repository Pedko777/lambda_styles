import React from 'react';

import styles from './App.module.scss';

import Header from './Header/Header';
import DemoSection from './Body/DemoSection/DemoSection';
import PartnersSection from './Body/PartnersSection/PartnersSection';
import FirstSection from './Body/FirstSection/FirstSection';
import SliderSection from './Body/SliderSection/SliderSection';
import ComunicationSection from './Body/ComunicationSection/ComunicationSection';
import OrderSection from './Body/OrderSection/OrderSection';
import StepSection from './Body/StepSection/StepSection';
import FormSection from './Body/FormSection/FormSection';
import Footer from './Footer/Footer';

const App = () => {
  return (
    <div className={styles.root}>
      <div className={styles.dotsBg}></div>
      <Header />
      <main className={styles.main}>
        <FirstSection />
        <DemoSection />
        <PartnersSection />
        <SliderSection />
        <ComunicationSection />
        <OrderSection />
        <StepSection />
        <FormSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
