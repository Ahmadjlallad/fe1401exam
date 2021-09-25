import React, { Component } from "react";
import { Form, Button, Modal } from "react-bootstrap";
export class FormAndModal extends Component {
  state = {
    show: false,
  };

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  render() {
    const { digimon } = this.props;
    return (
      <div>
        <>
          <Button variant="primary" onClick={this.handleShow}>
            Update
          </Button>

          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  this.props.onUpdate(digimon._id, {
                    ...digimon,
                    name: e.target.name.value,
                    level: e.target.level.value,
                  });
                  this.handleClose();
                }}
              >
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>name</Form.Label>
                  <Form.Control type="text" defaultValue={digimon.name} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="level">
                  <Form.Label>level</Form.Label>
                  <Form.Control type="text" defaultValue={digimon.level} />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        </>
      </div>
    );
  }
}

export default FormAndModal;
