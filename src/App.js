import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router';
import Home from './Home';
import Profile from './Profile';
import Trading from './Trading';
import AboutUs from './AboutUs';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/trading' element={<Trading />} />
        <Route path='/about-us' element={<AboutUs />} />
      </Routes>
    </div >

  );
}

export default App;
