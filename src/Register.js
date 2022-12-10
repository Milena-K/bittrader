import './styles/SignIn.css';
import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { RegisterContext } from './Navbar';

function Register() {
  const { openRegister, setOpenRegister } = useContext(RegisterContext);
  const handleClose = () => { setOpenRegister(false); };

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    }
  }

  return (
    <>
      <Modal show={openRegister} onHide={handleClose}>
        <Modal.Title>Sign Up</Modal.Title>
        <Modal.Body>
          <p>Please fill this form to create an account. </p>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label style={{ fontWeight: "bold" }}>Email</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  required
                />
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label style={{ fontWeight: "bold" }}>Password</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="password"
                  required
                />
                <Form.Control.Feedback />
              </InputGroup>
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label style={{ fontWeight: "bold" }}>Confirm Password</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="password"
                  required
                />
                {/* <Form.Control.Feedback type="invalid"> Passwords don't match. </Form.Control.Feedback> */}
                <Form.Control.Feedback />
              </InputGroup>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>

            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer >
          <p>Already have an account? <a href='#'>Log in here.</a></p>
        </Modal.Footer >
      </Modal>
    </>
  );
}

export default Register;
