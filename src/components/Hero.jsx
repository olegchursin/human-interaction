import React from 'react';

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

const Hero = ({ content }) => {
  return <div style={styles.wrapper}>{content}</div>;
};

export default Hero;
