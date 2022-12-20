import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles/Qualities.css';
// import AISVG from './img/ai-pie.svg';
// import MarginSVG from './img/balance.svg';
// import SecuritySVG from './img/security.svg';
// import PaymentSVG from './img/coins.svg';
// import CrossSVG from './img/cross-platform.svg';
// import WorldSVG from './img/global.svg';
// import LegalSVG from './img/legal.svg';
// import LiquiditySVG from './img/liquidity.svg';
// import CompetetiveSVG from './img/percentage.svg';

const Qualities = () => {
  return (
    <div className="qualities">
      <h1>WHY MILLIONS CHOSE BITFAST TRADE</h1>
      <Container>
        <Row sm={1} md={1} xl={4} xxl={4}>
          <div className='q-card'>
            <Row sm={1} md={1} xl={4}>
              <Col lg={1} xl={4} className="icon">
                <div className="index-icon payment" />
              </Col>
              <Col lg={9} xl={8}>
                <div className='q-body'>
                  <h3>PAYMENT OPTIONS</h3>
                  <p>Most popular methods: electronic wallets, blockchain, cryptocurrency.</p>
                </div>
              </Col>
            </Row>
          </div>
          <div className='q-card'>
            <Row sm={1} md={1} xl={4}>
              <Col lg={1} xl={4} className="icon">
                <div className="index-icon security" />
              </Col>
              <Col lg={9} xl={8}>
                <div className='q-body'>
                  <h3>STRONG SECURITY</h3>
                  <p>Protection against DDoS attacks, full data encryption, compliant with PCI DSS standards.</p>
                </div>
              </Col>
            </Row>
          </div>
          <div className='q-card'>
            <Row sm={1} md={1} xl={4}>
              <Col lg={1} xl={4} className="icon">
                <div className="index-icon coverage" />
              </Col>
              <Col lg={9} xl={8}>
                <div className='q-body'>
                  <h3>WORLD COVERAGE</h3>
                  <p>Providing services in 100% countries around the globe.</p>
                </div>
              </Col>
            </Row>
          </div>
        </Row>
        <Row sm={1} md={1} xl={4} xxl={4}>
          <div className='q-card'>
            <Row sm={1} md={1} xl={4}>
              <Col lg={1} xl={4} className="icon">
                <div className="index-icon legal" />
              </Col>
              <Col lg={9} xl={8}>
                <div className='q-body'>
                  <h3>LEGAL COMPLIANCE</h3>
                  <p>Registration in Singapore, MSB status in FinCEN, essential licenses and strong relations with banks.</p>
                </div>
              </Col>
            </Row>
          </div>
          <div className='q-card'>
            <Row sm={1} md={1} xl={4}>
              <Col lg={1} xl={4} className="icon">
                <div className="index-icon margin" />
              </Col>
              <Col lg={9} xl={8}>
                <div className='q-body'>
                  <h3>MARGIN TRADING</h3>
                  <p>1:2 and 1:3 leverages, automatic funds borrowing, no extra accounts needed, negative balance protection.</p>
                </div>
              </Col>
            </Row>
          </div>
          <div className='q-card'>
            <Row sm={1} md={1} xl={4}>
              <Col lg={1} xl={4} className="icon">
                <div className="index-icon commissions" />
              </Col>
              <Col lg={9} xl={8}>
                <div className='q-body'>
                  <h3>COMPETITIVE COMMISSIONS</h3>
                  <p>Reasonable trading fees for takers and makers, special conditions for high volume traders, strong offers for market makers.</p>
                </div>
              </Col>
            </Row>
          </div>
        </Row>
        <Row sm={1} md={1} xl={4} xxl={4}>
          <div className='q-card'>
            <Row sm={1} md={1} xl={4}>
              <Col lg={1} xl={4} className="icon">
                <div className="index-icon cross-platform" />
              </Col>
              <Col lg={9} xl={8}>
                <div className='q-body'>
                  <h3>CROSS-PLATFORM TRADING</h3>
                  <p>Trading via website, mobile app, WebSocket and REST API. FIX API for institutional traders.</p>
                </div>
              </Col>
            </Row>
          </div>
          <div className='q-card'>
            <Row sm={1} md={1} xl={4}>
              <Col lg={1} xl={4} className="icon">
                <div className="index-icon reporting" />
              </Col>
              <Col lg={9} xl={8}>
                <div className='q-body'>
                  <h3>AI-BASED ASSISTANCE</h3>
                  <p>AI market predictions with machine learning on big data sets.</p>
                </div>
              </Col>
            </Row>
          </div>
          <div className='q-card'>
            <Row sm={1} md={1} xl={4}>
              <Col lg={1} xl={4} className="icon">
                <div className="index-icon liquidity" />
              </Col>
              <Col lg={9} xl={8}>
                <div className='q-body'>
                  <h3>HIGH LIQUIDITY</h3>
                  <p>Fast order execution, low spread, access to high liquidity orderbook for top currency pairs.</p>
                </div>
              </Col>
            </Row>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default Qualities;
