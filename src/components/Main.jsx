import React from 'react';
import ContactInfo from './ContactInfo';
import Services from './Services';
import Hero from './Hero';
import { content } from '../content/content';

const Main = () => {
  return (
    <>
      <Hero content={content.titles.hero} />
      <Services />
      <ContactInfo />
    </>
  );
};

export default Main;
