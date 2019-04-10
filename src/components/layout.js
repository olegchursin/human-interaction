import React from "react"

import Header from "./Header"
import "../css/layout.css"
import Footer from "./footer"

const styles = {
  main: {
    margin: `0 auto`,
    maxWidth: 1280,
    padding: `0px 1em 1em`,
    paddingTop: 0,
  },
  wrapper: {
    minHeight: "100vh",
    display: "grid",
    gridTemplateRows: "1fr auto",
  },
  footer: {
    gridRowStart: 2,
    gridRowEnd: 3,
  },
}

const Layout = ({ children }) => (
  <div style={styles.wrapper}>
    <div>
      <Header />
      <main style={styles.main}>{children}</main>
    </div>
    <div style={styles.footer}>
      <Footer />
    </div>
  </div>
)

export default Layout

// {
//   /* <body>
//   <div class="content">
//     content
//   </div>
//   <footer class="footer"></footer>
// </body> */
// }

// html {
//   height: 100%;
// }
// body {
//   min-height: 100%;
//   display: grid;
//   grid-template-rows: 1fr auto;
// }
// .footer {
//   grid-row-start: 2;
//   grid-row-end: 3;
// }
