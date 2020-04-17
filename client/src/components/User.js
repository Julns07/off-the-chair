import React from "react"
import { Form, Button } from "react-bootstrap"

export default (props) => {
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>username</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Keep me logged in" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

/* ;<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
  <Tab eventKey="home" title="Home">
    <SignIn />
  </Tab>
  <Tab eventKey="profile" title="Profile">
    <Sonnet />
  </Tab>
  <Tab eventKey="contact" title="Contact" disabled>
    <SignUp />
  </Tab>
</Tabs> */
