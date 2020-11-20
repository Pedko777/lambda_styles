import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styles from './App.module.scss';

import Header from './Header/Header';
import DemoSection from './Body/DemoSection/DemoSection';
import PartnersSection from './Body/PartnersSection/PartnersSection';
import FirstSection from './Body/FirstSection/FirstSection';
import OrderSection from './Body/OrderSection/OrderSection';
import StepSection from './Body/StepSection/StepSection';
import FormSection from './Body/FormSection/FormSection';
import Footer from './Footer/Footer';
import PresentationSection from './Body/PresentationSection/PresentationSection';
import NewSliderSection from './Body/NewSliderSection/NewSliderSection';

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.root}>
        <Header />
        <main className={styles.main}>
          <div className={styles.dotsBg}></div>
          <FirstSection />
          <DemoSection />
          <PartnersSection />
          <NewSliderSection />
          <PresentationSection />
          <OrderSection />
          <StepSection />
          <FormSection />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
