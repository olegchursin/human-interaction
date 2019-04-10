import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from "../components/Main"

const styles = {
  main: {
    marginTop: `8vh`,
  },
}

const IndexPage = () => (
  <Layout>
    <SEO
      title="Human Interaction"
      keywords={[`Human Interaction`, `UI/UX`, `web development`, `web design`]}
    />
    <div style={styles.main}>
      <Main />
    </div>
  </Layout>
)

export default IndexPage
