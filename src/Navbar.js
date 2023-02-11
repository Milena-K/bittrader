import './styles/Navbar.css';
import Button from 'react-bootstrap/Button';
import SignIn from './SignIn';
import Register from './Register';
import {useContext, useMemo, useState} from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import ContextRegisterProvider, {ContextRegister} from './ContextRegister';
import SignInContextProvider, {SignInContext} from "./SignInContext";
import {useNavigate} from "react-router";
import {isLoggedIn} from "./session";

const Navbar = () => {
    const {openSignIn, setOpenSignIn} = useContext(SignInContext);
    const {isOpenRegister, setIsOpenRegister} = useContext(ContextRegister);
    const navigator = useNavigate();
    const openSignInModal = () => {
        if (isLoggedIn()) navigator("/profile");
        else setOpenSignIn(true);
    }
    const openRegisterModal = () => {
        if (isLoggedIn()) navigator("/profile");
        else setIsOpenRegister(true)
    }

    // const contextValueSignIn = useMemo(() => ({
    //   openSignIn,
    //   setOpenSignIn,
    // }), [openSignIn, setOpenSignIn]);
    //
    // const contextValueRegister = useMemo(() => ({
    //   openRegister,
    //   setIsOpenRegister,
    // }), [openRegister, setIsOpenRegister]);

    return (
        <div className='navbar-home'>
            {(!isLoggedIn() &&
                <>
                    <Button size="sm" variant="outline-light" onClick={openSignInModal} className="navBtn">SIGN
                        IN</Button>
                    <SignIn/>
                    <Button size="sm" variant="outline-light" onClick={openRegisterModal} active
                            className="navBtn">REGISTER</Button>
                    <Register/>
                </>)}
            <LinkContainer to='/trading'>
                <Button size="sm" variant="outline-light" className="navBtn">TRADING</Button>
            </LinkContainer>
            <LinkContainer to='/about-us'>
                <Button size="sm" variant="outline-light" className="navBtn">ABOUT US</Button>
            </LinkContainer>
            {(isLoggedIn() &&
                <LinkContainer to='/profile'>
                    <Button size="sm" variant="outline-light" className="navBtn" active>MY PROFILE</Button>
                </LinkContainer>
            )}
        </div>
    )
}

export default Navbar;
