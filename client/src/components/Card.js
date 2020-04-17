import React from "react"
import { Card, CardDeck } from "react-bootstrap"
import neckPain from "../assets/womanBack.jpg"
import style from "../styles/card.css"
import officeStretch from "../assets/officeStretch.jpg"
import exerciseOffice from "../assets/peopleStretching Cropped.jpg"

export default (props) => {
  return (
    <CardDeck>
      <Card>
        <Card.Img variant="top" src={neckPain} />
        <Card.Body>
          <Card.Title>Effects of Prolonged Sitting</Card.Title>
          <Card.Text>
            Many adults sit for more than 7 hours. Some health experts warn that
            sedentary behavior can increase risk to people of all shapes and
            sizes.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="middle" src={officeStretch} />
        <Card.Body>
          <Card.Title>Start New Habits</Card.Title>
          <Card.Text>
            It's recommended to change posture or stretch, if possible to
            prevent help reduce those risks.{" "}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="right" src={exerciseOffice} />
        <Card.Body>
          <Card.Title>Create Big Changes</Card.Title>
          <Card.Text>
            OFF THE CHAIR provides exercises that can help with improving
            circulation to your body!
          </Card.Text>
        </Card.Body>
      </Card>
    </CardDeck>
  )
}
