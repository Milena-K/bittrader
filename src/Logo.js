import './styles/Logo.css';
import LogoSVG from './img/logo.svg';
const Logo = () => {

  return (
    <div className='logo'>
      <img src={LogoSVG} />
      <div className='text'>
        <h1>BIT TRADING</h1>
        <h3>SECURE, CONVINIENT AND FAST</h3>
        <h3>WAY OF EARNING AND TRADING CRYPTO</h3>
      </div>
    </div>

  )
}

export default Logo;
