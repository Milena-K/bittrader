import './styles/SignIn.css';
import React, {useState, useContext, createContext} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {ContextRegister} from './ContextRegister';
import {useNavigate} from "react-router";
import {registerWithEmailAndPassword} from './firebaseConfig';
import TOSModal from './TOSModal';

export const TOSContext = createContext();
function Register() {
    const navigate = useNavigate();
    const {openRegister, setIsOpenRegister} = useContext(ContextRegister);
    const [openTOS, setOpenTOS] = useState(false);
    const [email, setEmail] = useState('');
    const [pass1, setPass1] = useState('');
    const [pass2, setPass2] = useState('');
    const [password, setPassword] = useState('');
    const [validated, setValidated] = useState(false);
    const [error, setError] = useState({});
    const [agreed, setAgreed] = useState(false);
    const tosValue = {openTOS, setOpenTOS, agreed, setAgreed};
    const handleClose = () => {
        setError({});
        setValidated(false);
        setIsOpenRegister(false)
        setAgreed(false);
    };
    const checkPassword = (pass1, pass2) => {
        if (pass1 == pass2) {
            return pass1;
        }
        setValidated(false);
        return '';
    }
    const formatError = (error) => {
        if (error.code === 'auth/invalid-email') {
            error.code = 'email';
            error.message = 'Please enter a valid email';
        } else if (error.code === 'auth/internal-error') {
            error.code = 'password';
            error.message = 'Passwords are not matching';
        } else if (error.code === 'auth/email-already-in-use') {
            error.code = 'email';
            error.message = 'Please choose another email';
        } else {
            const errMessageEnd = error.message.indexOf('(');
            error.message = error.message.substring(9, errMessageEnd)
            error.code = 'password';
        }
        return error;
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const password = checkPassword(pass1, pass2);
        if (form.checkValidity() === false && password === '') {
            setValidated(false);
            event.stopPropagation();
            return;
        }
        await registerWithEmailAndPassword(email, password).then(() => {
            setError({});
            setValidated(true);
            setTimeout(handleClose, 3000);
        }).catch((err) => {
            setValidated(false);
            console.log(err);
            const error = formatError(err);
            setError(error);
        })
    }

    return (
        <>
            <TOSContext.Provider value={tosValue}>
            <Modal show={openRegister} onHide={handleClose}>
                <Modal.Title>Sign Up</Modal.Title>
                <Modal.Body>
                    <p>Please fill this form to create an account. </p>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label style={{fontWeight: "bold"}}>Email</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="text"
                                    required
                                    isInvalid={error.code == "email"}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {error.message}
                                </Form.Control.Feedback>
                                <Form.Control.Feedback type="valid">
                                    Registration completed.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label style={{fontWeight: "bold"}}>Password</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    onChange={(e) => setPass1(e.target.value)}
                                    type="password"
                                    isInvalid={error.code == "password"}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    {error.message}
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="ConfirmPassword">
                            <Form.Label style={{fontWeight: "bold"}}>Confirm Password</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="password"
                                    required
                                    onChange={(e) => setPass2(e.target.value)}
                                    isInvalid={error.code == 'password'}
                                />
                                <Form.Control.Feedback/>
                            </InputGroup>
                        </Form.Group>

                        <Form.Group className="tos">
                                <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(!agreed)}/>
                                <p>I Agree to the <Button onClick={()=>setOpenTOS(true)} className="bg-white border-1 border-blue text-primary btn-sm">Terms of Service</Button></p>
                        </Form.Group>

                        <Button disabled={!agreed} variant="primary" type="submit">
                            Submit
                        </Button>

                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    {/* <p>Already have an account? <a href='#'>Log in here.</a></p> */}
                </Modal.Footer>
            </Modal>
            <TOSModal />
        </TOSContext.Provider>
        </>
    );
}

export default Register;
