import React from "react"
import { Carousel, Item, Caption } from "react-bootstrap"
import womanImage from "../assets/woman-watching-sports-training-online-on-laptop-royalty-free-image-1584717965 Cropped.jpg"
import womanFlexing from "../assets/womanFlexing Cropped.jpg"
import manStretching from "../assets/manStretching Cropped.jpg"

export default (props) => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={womanImage} alt="First slide" />
        <Carousel.Caption>
          <h3>Workout from the comfort of your Home or Office</h3>
          <p>Available on demand from your computer</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={womanFlexing} alt="Third slide" />

        <Carousel.Caption>
          <h3>Exercising can improve circulation</h3>
          <p>Exercises that help your body feel refreshed</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={manStretching} alt="Third slide" />

        <Carousel.Caption>
          <h3>Feel More Energetic</h3>
          <p>Interrupt the sluggish feeling from prolonged sitting</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
