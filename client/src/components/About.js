import React from "react"
import { Jumbotron, Container } from "react-bootstrap"
import style from "../styles/about.css"

export default (props) => {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>Who We Are</h1>
        <h3>
          {" "}
          We are on a mission to create healthy habits, we are helping millions
          of desk workers to take controll of their personal fitness journeys
          and improve their well being.
          <br /> <br /> We aspire to encourage humans to strecth out and get OFF
          THE CHAIR.
        </h3>
      </Container>
    </Jumbotron>
  )
}
