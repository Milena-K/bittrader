import './styles/Navbar.css';
import Button from 'react-bootstrap/Button';
import { useState, useMemo, createContext } from 'react';
import SignIn from './SignIn';
import Register from './Register';
import { LinkContainer } from 'react-router-bootstrap';

export const SignInContext = createContext();
export const RegisterContext = createContext();

const Navbar = () => {
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const openSignInModal = () => {
    setOpenSignIn(true);
  }
  const openRegisterModal = () => {
    setOpenRegister(true);
  }

  const contextValueSignIn = useMemo(() => ({
    openSignIn,
    setOpenSignIn,
  }), [openSignIn, setOpenSignIn]);

  const contextValueRegister = useMemo(() => ({
    openRegister,
    setOpenRegister
  }), [openRegister, setOpenRegister]);

  return (
    <div className='navbar'>
      <SignInContext.Provider value={contextValueSignIn}>
        <Button size="sm" variant="outline-light" onClick={openSignInModal} className="navBtn">SIGN IN</Button>
        <SignIn />
      </SignInContext.Provider>
      <RegisterContext.Provider value={contextValueRegister}>
        <Button size="sm" variant="outline-light" onClick={openRegisterModal} active className="navBtn">REGISTER</Button>
        <Register />
      </RegisterContext.Provider>
      <Button size="sm" variant="outline-light" className="navBtn">TRADING</Button>
      <Button size="sm" variant="outline-light" className="navBtn">ABOUT US</Button>
      <LinkContainer to='/profile'>
        <Button size="sm" variant="outline-light" className="navBtn">PROFILE</Button>
      </LinkContainer>
    </div >
  )
}

export default Navbar;
