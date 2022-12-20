import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Logo from './Logo';
import Stats from './Stats';
import Widget from './Widget';
import GetStarted from './GetStarted';
import Cards from './Cards';
import Qualities from './Qualities';
import Footer from './Footer';
import { Container, Row } from 'react-bootstrap';
import ContextRegisterProvider from './ContextRegister';

function Home() {
  return (
    <div className="Home">
      <ContextRegisterProvider>
        <header id="header">
          <Container>
            <Navbar />
            <Logo />
          </Container>
        </header>
        <div className='till-cards'>
          <Stats />
          <Widget />
          <GetStarted />
          <Cards />
        </div>
        <Qualities />
        <Footer />
      </ContextRegisterProvider>
    </div >

  );
}

export default Home;
