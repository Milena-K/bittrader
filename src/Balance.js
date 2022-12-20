import './styles/Balance.css';
import { Col, Row, Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBitcoinSign } from '@fortawesome/free-solid-svg-icons';
import { faDollarSign, faArrowRightToBracket, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';

const Balance = () => {
  return (
    <div className="balance">
      <Container className="container-balance">
        <Row xs={1} lg={2}>
          <Col className="coins">
            <FontAwesomeIcon icon={faBitcoinSign} />
            <p className='coin-ammount'>1.98824</p>
            <FontAwesomeIcon icon={faEthereum} />
            <p className='coin-ammount'>3.44862</p>
            {/* TODO: make it a BCH sign */}
            <FontAwesomeIcon icon={faDollarSign} />
            <p className='coin-ammount'>0</p>
          </Col>
          <Col className='balance-btns'>
            <Button className="btn-green" variant="success">
              <p>DEPOSIT</p>
              <FontAwesomeIcon icon={faArrowRightToBracket} className="fa-rotate-90" />
            </Button>
            <Button className="btn-blue">
              <p>WITHDRAW</p>
              <FontAwesomeIcon icon={faArrowRightFromBracket} className="fa-rotate-270" />
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Balance;
