import './styles/Navbar.css';
import Button from 'react-bootstrap/Button';
import { useState, useMemo, createContext } from 'react';
import SignIn from './SignIn';

export const SignInContext = createContext();

const Navbar = () => {
  const [openSignIn, setOpenSignIn] = useState(false);
  const openModal = () => {
    setOpenSignIn(true);
  }

  const contextValue = useMemo(() => ({
    openSignIn,
    setOpenSignIn,
  }), [openSignIn, setOpenSignIn]);

  return (
    <div className='navbar'>
      <SignInContext.Provider value={contextValue}>
        <Button size="sm" variant="outline-light" onClick={openModal}>SIGN IN</Button>
        <SignIn />
      </SignInContext.Provider>
      <Button size="sm" variant="outline-light" active>REGISTER</Button>
      <Button size="sm" variant="outline-light">TRADING</Button>
      <Button size="sm" variant="outline-light">ABOUT US</Button>
    </div>
  )
}

export default Navbar;
