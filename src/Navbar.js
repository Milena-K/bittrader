import Button from 'react-bootstrap/Button';
import './styles/Navbar.css';

const Navbar = () => {

  return (
    <div className='navbar'>
      <Button variant="outline-dark">SIGN IN</Button>
      <Button variant="outline-dark" active>REGISTER</Button>
      <Button variant="outline-dark">TRADING</Button>
      <Button variant="outline-dark">ABOUT US</Button>
    </div>
  )
}

export default Navbar;
