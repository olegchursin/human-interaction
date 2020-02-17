import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import logo from '../images/human-interaction-logo.svg';

const styles = {
  logo: {
    width: `200px`
  },
  logoWrapper: {
    margin: `0 auto`,
    maxWidth: 1280,
    padding: `1em 0 1em 1em`
  },
  wrapper: {
    background: `#fff`,
    marginBottom: `40px`
  }
};

const Header = () => (
  <header style={styles.wrapper}>
    <div style={styles.logoWrapper}>
      <Link to="/">
        <img src={logo} style={styles.logo} alt="Human Interaction" />
      </Link>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
