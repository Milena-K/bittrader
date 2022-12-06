import "./styles/Stats.css";
import { Row, Col, Container } from 'react-bootstrap';
const Stats = () => {
  //TODO: get live data for coin value
  return (
    <div className="stats">
      <Container fluid="true">
        <Row lg={'auto'} md={1} sm={1} xs={1}>
          <Col>
            <h2>BITCOIN PRICE</h2>
            <span>1337 USD</span>
          </Col>
          <Col>
            <h2>BITCOIN PRICE</h2>
            <span>1337 EUR</span>
          </Col>
          <Col>
            <h2>24h VOLUME</h2>
            <span>80085 BTC</span>
          </Col>
          <Col>
            <h2>ACTIVE TRADERS</h2>
            <span>1,010,000</span>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Stats;
