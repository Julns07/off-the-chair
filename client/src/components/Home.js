import React from "react"
import Navbar from "./Navbar"
import Carousel from "./Carousel"
import Card from "./Card"
import Jumbotron from "./JumbotronTwo"

export default (props) => {
  return (
    <div>
      <Carousel />
      <Card />
      <Jumbotron props={props} />
    </div>
  )
}
