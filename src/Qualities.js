import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles/Qualities.css';
import CoinsSVG from './img/coins.svg';

const Qualities = () => {
  return (
    <div className="qualities">
      <h1>WHY MILLIONS CHOSE BITFAST TRADE</h1>
      <Container>
        <Row>
          <Col className="q-col">
            <img src={CoinsSVG} className="q-img" />
            <div className='q-body'>
              <h3>PAYMENT OPTIONS</h3>
              <p> Most popular methods: electronic wallets, blockchain, cryptocurrency</p>
            </div>
          </Col>
          <Col className="q-col">
            <img src={CoinsSVG} className="q-img" />
            <div className='q-body'>
              <h3>PAYMENT OPTIONS</h3>
              <p> Most popular methods: electronic wallets, blockchain, cryptocurrency</p>
            </div>
          </Col>
          <Col className="q-col">
            <img src={CoinsSVG} className="q-img" />
            <div className='q-body'>
              <h3>PAYMENT OPTIONS</h3>
              <p> Most popular methods: electronic wallets, blockchain, cryptocurrency</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="q-col">
            <img src={CoinsSVG} className="q-img" />
            <div className='q-body'>
              <h3>PAYMENT OPTIONS</h3>
              <p> Most popular methods: electronic wallets, blockchain, cryptocurrency</p>
            </div>
          </Col>
          <Col className="q-col">
            <img src={CoinsSVG} className="q-img" />
            <div className='q-body'>
              <h3>PAYMENT OPTIONS</h3>
              <p> Most popular methods: electronic wallets, blockchain, cryptocurrency</p>
            </div>
          </Col>
          <Col className="q-col">
            <img src={CoinsSVG} className="q-img" />
            <div className='q-body'>
              <h3>PAYMENT OPTIONS</h3>
              <p> Most popular methods: electronic wallets, blockchain, cryptocurrency</p>
            </div>
          </Col>
        </Row>
        <Row>

          <Col className="q-col">
            <img src={CoinsSVG} className="q-img" />
            <div className='q-body'>
              <h3>PAYMENT OPTIONS</h3>
              <p> Most popular methods: electronic wallets, blockchain, cryptocurrency</p>
            </div>
          </Col>
          <Col className="q-col">
            <img src={CoinsSVG} className="q-img" />
            <div className='q-body'>
              <h3>PAYMENT OPTIONS</h3>
              <p> Most popular methods: electronic wallets, blockchain, cryptocurrency</p>
            </div>
          </Col>
          <Col className="q-col">
            <img src={CoinsSVG} className="q-img" />
            <div className='q-body'>
              <h3>PAYMENT OPTIONS</h3>
              <p> Most popular methods: electronic wallets, blockchain, cryptocurrency</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Qualities;
