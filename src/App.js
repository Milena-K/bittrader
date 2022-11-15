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

function App() {
  return (
    <div className="App">
      <div className="background-group">
        <div className="center-nav">
          <Navbar />
          <Logo />
        </div>
      </div>
      <div className='till-cards'>
        <Stats />
        <Widget />
        <GetStarted />
        <Cards />
      </div>
      <Qualities />
      <Footer />
    </div>
  );
}

export default App;
