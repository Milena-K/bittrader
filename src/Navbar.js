import './styles/Navbar.css';
import Button from 'react-bootstrap/Button';
import { useState, useMemo, createContext, useContext } from 'react';
import SignIn from './SignIn';
import Register from './Register';
import { LinkContainer } from 'react-router-bootstrap';
import ContextRegisterProvider from './ContextRegister';
import { ContextRegister } from './ContextRegister';

export const SignInContext = createContext();

const Navbar = () => {
  const [openSignIn, setOpenSignIn] = useState(false);
  const { openRegister, setIsOpenRegister } = useContext(ContextRegister);

  const openSignInModal = () => { setOpenSignIn(true) }

  const contextValueSignIn = useMemo(() => ({
    openSignIn,
    setOpenSignIn,
  }), [openSignIn, setOpenSignIn]);


  return (
    <div className='navbar-home'>
      <SignInContext.Provider value={contextValueSignIn}>
        <Button size="sm" variant="outline-light" onClick={openSignInModal} className="navBtn">SIGN IN</Button>
        <SignIn />
      </SignInContext.Provider>
      <ContextRegisterProvider>
        <Button size="sm" variant="outline-light" onClick={() => setIsOpenRegister(true)} active className="navBtn">REGISTER</Button>
        <Register />
      </ContextRegisterProvider>
      <Button size="sm" variant="outline-light" className="navBtn">TRADING</Button>
      <Button size="sm" variant="outline-light" className="navBtn">ABOUT US</Button>
      <LinkContainer to='/profile'>
        <Button size="sm" variant="outline-light" className="navBtn">PROFILE</Button>
      </LinkContainer>
    </div >
  )
}

export default Navbar;
