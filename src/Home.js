import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import React, { Component } from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import PleaseLogin from "./PleaseLogin";

export class Home extends Component {
  state = { allDigimon: [] };

  componentDidMount() {
    axios
      .get(`https://mytestok.herokuapp.com/didapi`)
      .then((res) => {
        this.setState({ allDigimon: res.data });
      })
      .catch((err) => console.log(err));
  }
  addToFavorite = (digimon) => {
    axios.post(`https://mytestok.herokuapp.com/did`, digimon);
  };
  renderAllDigimon = () => {
    return this.state.allDigimon.length > 0 ? (
      this.state.allDigimon.map((digimon) => {
        return (
          <Col xs={4} key={digimon.name}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={digimon.img} />
              <Card.Body>
                <Card.Title>name: {digimon.name}</Card.Title>
                <Card.Text>level: {digimon.level}</Card.Text>
                <Button
                  onClick={(e) =>
                    this.addToFavorite({
                      ...digimon,
                      email: this.props.auth0.user.email,
                    })
                  }
                  variant="success"
                >
                  Add to favourer
                </Button>
              </Card.Body>
            </Card>
          </Col>
        );
      })
    ) : (
      <h1>Loading</h1>
    );
  };

  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <Container>
        <Row xs={3}>
          {" "}
          {isAuthenticated ? this.renderAllDigimon() : <PleaseLogin />}
        </Row>
      </Container>
    );
  }
}

export default withAuth0(Home);
