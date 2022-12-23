import './styles/Navbar.css';
import Button from 'react-bootstrap/Button';
import { useState, useMemo, createContext, useContext } from 'react';
import SignIn from './SignIn';
import Register from './Register';
import { LinkContainer } from 'react-router-bootstrap';
import { ContextRegister } from './ContextRegister';

export const SignInContext = createContext();

const Navbar = () => {
  const [openSignIn, setOpenSignIn] = useState(false);
  const { openRegister, setIsOpenRegister } = useContext(ContextRegister);

  const openSignInModal = () => { setOpenSignIn(true) }
  const openRegisterModal = () => { setIsOpenRegister(true) }

  const contextValueSignIn = useMemo(() => ({
    openSignIn,
    setOpenSignIn,
  }), [openSignIn, setOpenSignIn]);

  const contextValueRegister = useMemo(() => ({
    openRegister,
    setIsOpenRegister,
  }), [openSignIn, setOpenSignIn]);

  return (
    <div className='navbar-home'>
      <SignInContext.Provider value={contextValueSignIn}>
        <Button size="sm" variant="outline-light" onClick={openSignInModal} className="navBtn">SIGN IN</Button>
        <SignIn />
      </SignInContext.Provider>
      <ContextRegister.Provider value={contextValueRegister}>
        <Button size="sm" variant="outline-light" onClick={openRegisterModal} active className="navBtn">REGISTER</Button>
        <Register />
      </ContextRegister.Provider>
      <Button size="sm" variant="outline-light" className="navBtn">TRADING</Button>
      <Button size="sm" variant="outline-light" className="navBtn">ABOUT US</Button>
      <LinkContainer to='/profile'>
        <Button size="sm" variant="outline-light" className="navBtn">PROFILE</Button>
      </LinkContainer>
    </div >
  )
}

export default Navbar;
