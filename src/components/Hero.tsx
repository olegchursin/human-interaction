import React, { ReactNode } from 'react';

const styles = {
  wrapper: {
    fontSize: '1.5em',
    color: '#15acc2',
    lineHeight: '1.4em',
    fontWeight: 300,
    marginBottom: 40,
    maxWidth: 600
  }
};

interface IHero {
  readonly content: string;
}

const Hero: React.FC<IHero> = ({ content }) => {
  return <div style={styles.wrapper}>{content}</div>;
};

export default Hero;
