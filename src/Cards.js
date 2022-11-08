import BuySellSVG from './img/buy-sell.svg';
import TradingSVG from './img/trading.svg';
import "./styles/Cards.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Cards = () => {
  return (
    <div className="cards">
      <Row xs={1} md={1} lg={2}>
        <Col>
          <Card>
            <Card.Body>
              <div className='card-body'>
                <div className="card-img">
                  <img src={BuySellSVG} />
                </div>
                <div className="card-text">
                  <Card.Title>Buy/Sell Bitcoin</Card.Title>
                  <Card.Text>
                    Bit Trading is a place for everyone who wants to easily store and trade crypto currency. The most convenient way to buy bitcoin using an electronic wallet. Instant buy/sell of Bitcoin at fair price is guaranteed. Nothing extra. Join over 2,000,000 users from all over the world satisfied with our services.
                  </Card.Text>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <div className='card-body'>
                <div className="card-img">
                  <img src={TradingSVG} />
                </div>
                <div className="card-text">
                  <Card.Title>Bitcoin Trading</Card.Title>
                  <Card.Text>
                    Advanced order-matching algorithms are backed by unique trade engine. Orderbook liquidity allows to execute high-volume orders and apply market making trading, high frequency trading and scalping strategies. Compliant with security standards, we guarantee safety of your assets and data.
                  </Card.Text>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div >
  )
}

export default Cards;
