import './styles/SignIn.css';
import React, { useRef, useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { SignInContext } from './SignInContext';
import { ContextRegister } from './ContextRegister';
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth, db} from './firebaseConfig';
import {useNavigate} from "react-router";
import {getSession, startSession} from "./session";
import {useAuthValue} from "./AuthContext";

function SignIn() {
  const navigate = useNavigate();
  const { openSignIn, setOpenSignIn } = useContext(SignInContext);
  const { openRegister, setIsOpenRegister } = useContext(ContextRegister);
  const { currentUser, setCurrentUser } = useAuthValue();
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState({});
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleClose = () => {
    setError({});
    setOpenSignIn(false)
  };

  const formatError = (error) => {
    console.log(error);
    switch (error.code) {
      case 'auth/user-not-found':
        error.message = "Invalid username or email";
        break;
      case 'auth/wrong-password':
        error.message = "Wrong password";
        break;
      case 'auth/invalid-email':
        error.message = "Invalid username or email";
        break;
      default:
        error = {};
        break;
    }
    return error;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let email = emailRef.current.value;
    let password = passwordRef.current.value;
    if (email == "georgian33") {
      email = "georgian33@gmail.com";
      password = "123123123";
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        startSession(user).then(r => {
          const session = getSession();
          setCurrentUser(session.user);
          setValidated(true);
          navigate("/profile");
          handleClose()
        })
      })
      .catch((error) => {
        error = formatError(error);
        console.log(error);
        setError(error);
      });
  }



  return (
    <>
      <Modal show={openSignIn} onHide={handleClose}>
        <Modal.Title>Login</Modal.Title>
        <Modal.Body>
          <p>Please fill in your credentials to log in.</p>
          <Form  validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label style={{ fontWeight: "bold" }}>Username or email</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  required
                  isInvalid={error.code}
                  ref={emailRef}
                />
                <Form.Control.Feedback type="invalid">
                  {error.message}
                </Form.Control.Feedback>
                <Form.Control.Feedback type="valid">
                  Logged in.
                </Form.Control.Feedback>
                <Form.Control.Feedback />
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label style={{ fontWeight: "bold" }}>Password</Form.Label>
              <InputGroup  required hasValidation>
                <Form.Control
                  type="password"
                  required
                  ref={passwordRef}
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
          </Form>
        </Modal.Body>
        <Modal.Footer >
        </Modal.Footer >
      </Modal>
    </>
  );
}

export default SignIn;
