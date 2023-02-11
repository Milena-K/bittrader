import './styles/Balance.css';
import { Col, Row, Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBitcoinSign } from '@fortawesome/free-solid-svg-icons';
import { faDollarSign, faArrowRightToBracket, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import {useMemo, createContext, useState, useEffect} from 'react';
import DepositModal from './DepositModal';
import WithdrawModal from './WithdrawModal';
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, db} from "./firebaseConfig";
import { doc, query, collection, getDocs, where } from "firebase/firestore";
import { getSession, isLoggedIn } from "./session";

export const DepositContext = createContext();
export const WithdrawContext = createContext();

const Balance = () => {
  const [isOpenDeposit, setIsOpenDeposit] = useState(false);
  const [isOpenWithdraw, setIsOpenWithdraw] = useState(false);
  const [user, setUser] = useState(null);

  const openDepositModal = () => { setIsOpenDeposit(true) }
  const openWithdrawModal = () => { setIsOpenWithdraw(true) }

  const depositValue = useMemo(() => ({
    isOpenDeposit, setIsOpenDeposit
  }), [isOpenDeposit, setIsOpenDeposit]);

  const withdrawValue = useMemo(() => ({
    isOpenWithdraw, setIsOpenWithdraw
  }), [isOpenWithdraw, setIsOpenWithdraw]);

  useEffect(() => {
    if (isLoggedIn() && !user) {
      const session = getSession();
      setUser(session.user);
    }
  }, []);

  return (
    <div className="balance">
      <Container className="container-balance">
        <Row xs={1} lg={2}>
          <Col className="coins">
            <FontAwesomeIcon icon={faBitcoinSign} />
            <p className='coin-ammount'>{(user ? user.btc_balance : 0)}</p>
            <FontAwesomeIcon icon={faEthereum} />
            <p className='coin-ammount'>{(user ? user.eth_balance : 0)}</p>
            {/* TODO: make it a BCH sign */}
            <FontAwesomeIcon icon={faBitcoinSign} />
            <FontAwesomeIcon icon={faDollarSign} />
            <p className='coin-ammount'>{(user ? user.bch_balance : 0)}</p>
          </Col>
          <Col className='balance-btns'>
            <DepositContext.Provider value={depositValue}>
              <Button className="btn-green" onClick={openDepositModal} variant="success">
                <p>DEPOSIT</p>
                <FontAwesomeIcon icon={faArrowRightToBracket} className="fa-rotate-90" />
              </Button>
              <DepositModal />
            </DepositContext.Provider>
            <WithdrawContext.Provider value={withdrawValue}>
              <Button onClick={openWithdrawModal} className="btn-blue">
                <p>WITHDRAW</p>
                <FontAwesomeIcon icon={faArrowRightFromBracket} className="fa-rotate-270" />
              </Button>
              <WithdrawModal />
            </WithdrawContext.Provider >
          </Col>
        </Row>
      </Container>
    </div >
  )
}

export default Balance;
