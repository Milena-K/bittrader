import './styles/SignIn.css';
import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { SignInContext } from './Navbar';
import { ContextRegister } from './ContextRegister';

function SignIn() {
  const { openSignIn, setOpenSignIn } = useContext(SignInContext);
  const { openRegister, setIsOpenRegister } = useContext(ContextRegister);

  const [validated, setValidated] = useState(false);

  const handleClose = () => {
    console.log('sign in closed.')
    setOpenSignIn(false)
  };
  const handleSignIn = () => {
    handleClose();
    setIsOpenRegister(true);
  }


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
      <Modal show={openSignIn} onHide={handleClose}>
        <Modal.Title>Login</Modal.Title>
        <Modal.Body>
          <p>Please fill in your credentials to log in.</p>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label style={{ fontWeight: "bold" }}>Username or email</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Incorrect username or email.
                </Form.Control.Feedback>
                <Form.Control.Feedback />
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label style={{ fontWeight: "bold" }}>Password</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="password"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Incorrect password.
                </Form.Control.Feedback>
                <Form.Control.Feedback />
              </InputGroup>
            </Form.Group>

            <Button variant="primary" type="submit">
              Log in
            </Button>

            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>

            <p className="validated">Logged in.</p>

          </Form>
        </Modal.Body>
        <Modal.Footer >
        </Modal.Footer >
      </Modal>
    </>
  );
}

export default SignIn;
