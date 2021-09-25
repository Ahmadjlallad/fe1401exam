import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import UserDigimon from "./UserDigimon";
import PleaseLogin from "./PleaseLogin";
import { Col, Card, Row } from "react-bootstrap";
const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return isAuthenticated ? (
    <>
      <Row xs={1} style={{ flexDirection: "column", alignContent: "center" }}>
        <Col xs={1}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={user.picture} alt={user.name} />
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>{user.email}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <UserDigimon />
    </>
  ) : (
    <PleaseLogin />
  );
};

export default Profile;
