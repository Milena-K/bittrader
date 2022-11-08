import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles/Footer.css';

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <Container>
          <Row>
            <Col>
              <Row> <p className="footer-title">SERVICES</p></Row>
              <Row>
                <a href='#'>Bitcoin Trading</a>
              </Row>
              <Row>
                <a href='#'>Profile</a>
              </Row>
            </Col>
            <Col>
              <Row> <p className="footer-title">INFORMATION</p></Row>
              <Row>
                <a href='#'>Wallet</a>
              </Row>
              <Row>
                <a href='#'>Getting Started</a>
              </Row>
            </Col>
            <Col>
              <Row> <p className="footer-title">ABOUT</p></Row>
              <Row>
                <a href='#'>About Us</a>
              </Row>
              <Row>
                <a href='#'>Terms of Use</a>
              </Row>
            </Col>
            <Col>
              <Row> <p className="footer-title">PARTNERS</p></Row>
              <Row>
                <a href='#'>Binance</a>
              </Row>
              <Row>
                <a href='#'>Icobench</a>
              </Row>
              <Row>
                <a href='#'>Cointelegraph</a>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="copyright">
        <p>&copy; 2014-2022 Bit Trading LTD Trademarks belong to their respective owners. All rights reserved | Server time: <span className="server-time"> Monday, November 7, 2022, 11:34 pm </span></p>
      </div>
    </div>
  )
}

export default Footer;
