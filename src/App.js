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

function App() {
  return (
    <div className="App">
      <header id="header">
        <Container>
          <Row>
            <Navbar />
            <Logo />
          </Row>
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
    </div >

  );
}

export default App;
