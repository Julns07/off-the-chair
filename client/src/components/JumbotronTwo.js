import React from "react"
import { Jumbotron, Button } from "react-bootstrap"
import "../styles/about.css"
export default (props) => {
  function handleClick() {
    props.props.history.push("/countdown")
  }
  return (
    <Jumbotron className="jumbotron2">
      <h2></h2>
      <p>Small habits can turn into big changes. </p>
      <p>Take a break, get your body in motion and have fun!</p>
      <p>
        <Button onClick={handleClick} variant="primary">
          Let's get Started
        </Button>
      </p>
    </Jumbotron>
  )
}
