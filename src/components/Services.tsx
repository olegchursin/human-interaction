import ServiceCard from './ServiceCard';
import { content } from '../content/content';
import { IStyleMap } from '../utils/types';
import React from 'react';

const servicesContent = Object.values(content.services);

const styles: IStyleMap = {
  title: {
    color: '#767676'
  },
  serviceCards: {
    display: 'flex',
    flexWrap: 'wrap'
  }
};

const Services = () => {
  return (
    <>
      <h3 style={styles.title}>{content.titles.services}</h3>
      <div style={styles.serviceCards}>
        {servicesContent.map(service => {
          return (
            <ServiceCard
              key={service.title}
              title={service.title}
              content={service.content}
            />
          );
        })}
      </div>
    </>
  );
};

export default Services;
