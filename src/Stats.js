import "./styles/Stats.css";
import { Row, Col, Container } from 'react-bootstrap';
import {
  useCryptoPrices,
  CryptoPriceProvider,
} from "react-realtime-crypto-prices";

const CryptoPricesHook = () => {
  const prices = useCryptoPrices(["btc", "eth"]);
  const bitcoin = Math.round(prices["btc"]);
  const eth = Math.round(prices["eth"]);

  return (
    <>
      <Col>
        <h2>BITCOIN PRICE</h2>
        <span>{bitcoin || 0} USD</span>
      </Col>
      <Col>
        <h2>ETH PRICE</h2>
        <span>{eth || 0} USD</span>
      </Col>
    </>
  );
};


const Stats = () => {
  return (
    <div className="stats">
      <Container fluid="true">
        <Row lg={'auto'} md={1} sm={1} xs={1}>
          <CryptoPriceProvider>
            <CryptoPricesHook />
          </CryptoPriceProvider>
          <Col>
            <h2>24h VOLUME</h2>
            <span>3849 BTC</span>
          </Col>
          <Col>
            <h2>ACTIVE TRADERS</h2>
            <span>1,613,024</span>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Stats;
