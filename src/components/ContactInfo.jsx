import React from 'react';

const styles = {
  title: {
    color: '#767676',
    marginTop: 40
  }
};

const ContactInfo = () => {
  return (
    <>
      <h3 style={styles.title}>Contact</h3>
      <p>
        <a href="mailto:hi@hinteraction.com">hi@hinteraction.com</a>
      </p>
    </>
  );
};

export default ContactInfo;
