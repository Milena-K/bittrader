import { Container } from 'react-bootstrap';
import './styles/Logo.css';
// import LogoSVG from './img/logo.svg';
const Logo = () => {

  return (
    <div className='logo'>
      <div className='img-container'>
        <div className='logo-img' />
      </div>
      <div className='logo-text'>
        <div className='text'>
          <p className="logo-title">BIT TRADING</p>
          <p className='logo-subtitle'>SECURE, CONVINIENT AND FAST</p>
          <p className='logo-subtitle'>WAY OF EARNING AND TRADING CRYPTO</p>
        </div>
      </div>
    </div>

  )
}

export default Logo;
