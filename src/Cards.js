import BuySellSVG from './img/buy-sell.svg';
import TradingSVG from './img/trading.svg';
import "./styles/Cards.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Cards = () => {
  return (
    <div className="cards">
      <Row xs={1} md={2} >
        <Col>
          <Card>
            <Card.Body>
              <div style={{ display: "flex" }}>
                <Card.Img className="card-img" src={BuySellSVG} />
                <div className="card-body">
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <div style={{ display: "flex" }}>
                <Card.Img className="card-img" src={TradingSVG} />
                <div className="card-body">
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
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
