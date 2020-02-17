import ContactInfo from './ContactInfo';
import Hero from './Hero';
import Services from './Services';
import { content } from '../content/content';
import React from 'react';

const Main: React.FC = () => {
  return (
    <>
      <Hero content={content.titles.hero} />
      <Services />
      <ContactInfo />
    </>
  );
};

export default Main;
