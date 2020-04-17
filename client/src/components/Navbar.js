import React from "react"
import { NavigationBar, Navbar, Nav } from "react-bootstrap"
import otcLogo from "../assets/OTClogo.png"
import style from "../styles/navbar.css"

export default (props) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <img
        src={otcLogo}
        width="50"
        height="50"
        className="d-inline-block align-top"
        alt="otc logo"
      />
      <Navbar.Brand href="/">OFF THE CHAIR</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/countdown">Workout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
