import React from "react"

const styles = {
  title: {
    fontWeight: 600,
    color: "#ff2668",
    marginBottom: "10px",
  },
  content: {},
  wrapper: {
    background: '#fff',
    fontFamily: 'Lato',
    fontWeight: 300,
    lineHeight: '20px',
    height: "150px",
    width: "350px",
    borderRadius: "5px",
    margin: `12px 24px 12px 0`,
    padding: "20px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  },
}

const ServiceCard = ({ title, content }) => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.title}>{title}</div>
      <div style={styles.content}>{content}</div>
    </div>
  )
}

export default ServiceCard
