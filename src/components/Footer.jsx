import React from "react"

const styles = {
  footerWrapper: {
    height: 54,
    background: "#15acc2",
  },
  footerContent: {
    fontSize: "0.8em",
    color: "#fff",
    maxWidth: 1280,
    margin: `0 auto`,
    padding: `1em`,
  },
}

const Footer = () => {
  return (
    <footer style={styles.footerWrapper}>
      <div style={styles.footerContent}>
        © {new Date().getFullYear()} | Human Interaction
      </div>
    </footer>
  )
}

export default Footer
