import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Login from "./Login";
export class PleaseLogin extends Component {
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Please Login</Card.Title>
          <Card.Text>
            <Login />
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default PleaseLogin;
