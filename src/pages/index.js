import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Main from '../components/Main';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Human Interaction"
      keywords={[`Human Interaction`, `UI/UX`, `web development`, `web design`]}
    />
    <Main />
  </Layout>
);

export default IndexPage;
