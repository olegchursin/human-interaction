import logo from '../images/human-interaction-logo.svg';
import { Link } from 'gatsby';
import React from 'react';

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

const Header: React.FC = () => (
  <header style={styles.wrapper}>
    <div style={styles.logoWrapper}>
      <Link to="/">
        <img src={logo} style={styles.logo} alt="Human Interaction" />
      </Link>
    </div>
  </header>
);

export default Header;
