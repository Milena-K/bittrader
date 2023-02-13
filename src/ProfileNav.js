import './styles/Profile.css';
import {Navbar, Nav, Button, Row} from 'react-bootstrap';
import {logout} from "./firebaseConfig";
import {useContext, useEffect, useState} from "react";
import {endSession, getSession, isLoggedIn} from "./session";
import {useLocation, useNavigate} from "react-router";
import SignInContextProvider, {SignInContext} from "./SignInContext";
import ContextRegisterProvider, {ContextRegister} from "./ContextRegister";
import SignIn from "./SignIn";
import Register from "./Register";

function ProfileNav() {
    const [loggedIn, setLoggedIn] = useState('');
    const {openSignIn, setOpenSignIn} = useContext(SignInContext);
    const {openRegister, setIsOpenRegister} = useContext(ContextRegister);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (isLoggedIn())
            setLoggedIn('logged-in')
        else setLoggedIn('');
    }, [])

    const onLogout = () => {
        logout();
        endSession();
        setLoggedIn('');
        navigate("/");
    }

    const openSignInModal = () => {
        setOpenSignIn(true);
    }
    const openRegisterModal = () => {
        setIsOpenRegister(true);
    }

    return (
        <div className={"profile-navbar " + loggedIn}>
            <Navbar collapseOnSelect expand="sm" variant="light">
                <Navbar.Brand href="/">
                    <div className='cex-logo'/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {(!isLoggedIn() &&
                            <>
                                <Nav.Link href="/trading">TRADING</Nav.Link>
                                <Nav.Link href="/about-us">ABOUT US</Nav.Link>
                            </>
                        )}
                        {(isLoggedIn() &&
                            location.pathname != "/trading" && <Nav.Link href="/trading">TRADING</Nav.Link>)}
                        {(isLoggedIn() &&
                            location.pathname != "/about-us" && <Nav.Link href="/about-us">ABOUT US</Nav.Link>)}
                        {(isLoggedIn() &&
                            location.pathname != "/profile" && <Nav.Link href="/profile">PROFILE</Nav.Link>)}
                        {(!isLoggedIn() &&
                            <>
                                <Nav.Link size="sm" variant="outline-light" onClick={openSignInModal}
                                          className="navBtn">SIGN IN</Nav.Link>
                                <SignIn/>
                                <Nav.Link size="sm" variant="outline-light" onClick={openRegisterModal}
                                          className="navBtn">REGISTER</Nav.Link>
                                <Register/>
                            </>
                        )}
                    </Nav>
                    {(isLoggedIn() &&
                        <Nav>
                            <Nav.Link href="/">
                                <Button onClick={onLogout} className="btn-exit-profile" variant="dark">EXIT</Button>
                            </Nav.Link>
                        </Nav>)}
                    </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default ProfileNav;
