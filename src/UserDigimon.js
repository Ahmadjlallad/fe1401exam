import axios from "axios";
import React, { Component } from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";
import FormAndModal from "./FormAndModal";
export class UserDigimon extends Component {
  state = { userDigimon: [] };
  getUserDigimon = () => {
    const {
      user: { email },
      isAuthenticated,
    } = this.props.auth0;
    if (isAuthenticated) {
      axios
        .get(`https://mytestok.herokuapp.com/did?email=${email}`)
        .then((res) => this.setState({ userDigimon: res.data }))
        .catch((err) => {
          console.log(err);
        });
    }
  };
  componentDidMount() {
    this.getUserDigimon();
  }
  deleteDigimon = (id) => {
    axios
      .delete(`https://mytestok.herokuapp.com/did/${id}`)
      .then(() => this.getUserDigimon());
  };
  onUpdate = (id, updateObj) => {
    axios
      .put(`https://mytestok.herokuapp.com/did/${id}`, updateObj)
      .then(() => {
        this.getUserDigimon();
      })
      .catch((err) => console.log(err));
  };
  renderUserDigimon = () => {
    return this.state.userDigimon?.map((digimon) => {
      return (
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={digimon.img} />
            <Card.Body>
              <Card.Title>{digimon.name}</Card.Title>
              <Card.Text>level: {digimon.level}</Card.Text>
              <Button
                onClick={() => {
                  this.deleteDigimon(digimon._id);
                }}
                variant="danger"
              >
                Delete Digimon
              </Button>
              <FormAndModal onUpdate={this.onUpdate} digimon={digimon} />
            </Card.Body>
          </Card>
        </Col>
      );
    });
  };
  render() {
    return (
      <Container>
        <Row xs={3}>{this.renderUserDigimon()}</Row>
      </Container>
    );
  }
}

export default withAuth0(UserDigimon);
