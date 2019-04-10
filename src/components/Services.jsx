import React from "react"
import ServiceCard from "./ServiceCard"
import { content } from "../content/content"

const servicesContent = Object.values(content.services)

const styles = {
  title: {
    color: "#767676",
  },
  serviceCards: {
    display: "flex",
    flexWrap: "wrap",
  },
}

const Services = () => {
  return (
    <>
      <h3 style={styles.title}>{content.titles.services}</h3>
      <div style={styles.serviceCards}>
        {servicesContent.map(service => {
          return (
            <ServiceCard
              key={service.title}
              title={service.title}
              content={service.content}
            />
          )
        })}
      </div>
    </>
  )
}

export default Services
