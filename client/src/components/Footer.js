import React from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/home.css"

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/*column1*/}
          <div className="col">
            <h4>OFF THE CHAIR INC</h4>
            <ul className="list-unstyled">
              <li>702 420 6969</li>
              <li>401 S 4th Street</li>
              <li>Las Vegas, NV</li>
            </ul>
          </div>
          {/*column2*/}
          <div className="col">
            <h4>Site</h4>
            <ul className="list-unstyled">
              <Link className="link-one" to="/">
                <li>OFF THE CHAIR</li>
              </Link>
              <Link className="link-two" to="/aboutUs">
                <li>ABOUT US</li>
              </Link>
              <Link className="link-three" to="/contactUs">
                <li>CONTACT US</li>
              </Link>
            </ul>
          </div>
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} OFF THE CHAIR INC | All Rights
              Reserved |
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
