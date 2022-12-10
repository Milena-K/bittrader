import { Navbar, Container, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './styles/Profile.css';
import Footer from './Footer';
import Balance from './Balance';

const Profile = () => {

  return (
    <div class="profile">
      <Container>
        <Navbar variant="light">
          <Navbar.Brand href="/">
            <div className='cex-logo' />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#features">TRADING</Nav.Link>
            <Nav.Link href="#pricing">ABOUT US</Nav.Link>
          </Nav>
        </Navbar >
      </Container>
      <Balance />
      <Footer />
    </div>
  )
}

export default Profile;
