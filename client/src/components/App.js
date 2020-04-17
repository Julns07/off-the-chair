import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import ContactUs from "./ContactUs"
import User from "./User"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Countdown from "./Countdown"

export default (props) => {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contactUs" component={ContactUs} />
        <Route path="/countdown" component={Countdown} />
        <Route path="/user" component={User} />
        <Route path="/user" component={User} />
        <Footer />
      </div>
    </Router>
  )
}
