import './styles/SignIn.css';
import './styles/Deposit.css';
import React, { useState, useContext, createContext, useMemo, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import depoQR from './img/depositQR.png';
import { PayContext } from './DepositModal';
import env from "react-dotenv";

function PayModal(props) {
  const { openPay, setOpenPay } = useContext(PayContext);
  const [count, setCount] = useState(1801);
  const [counter, setCounter] = useState("");

  const modalTitle = () => {
    const coin = props.coin;
    if (coin == "BTC")
      return "Bitcoin (BTC)";
    else if (coin == "ETH")
      return "Ethereum (ETH)";
    else if (coin == "BCH")
      return "Bitcoin cash(BCH)";
  };
  const handleClose = () => {
    setCount(1800);
    setOpenPay(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count - 1);
      setCounter(minutes + ':' + seconds.toString().padStart(2, '0'));
    }, 1000);

    if (count == 0) handleClose();

    return () => clearInterval(interval);
  }, [count])

  const minutes = Math.floor(count / 60);
  const seconds = count % 60;

  return (
    <>
      <Modal show={openPay} onHide={handleClose} className="deposit get confirm">
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle()}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3 addr">
              <div className="title">
                <Form.Label>Payment confirmation</Form.Label>
              </div>
              <Form.Label className="subtitle">Send exactly <span style={{ fontWeight: 'bold' }}>{props.amount} {props.coin}</span> to:</Form.Label>
              <Form.Control disabled value={env.WALLET_DEPOSIT} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer className="confirm-footer">
            <p>Your payment will be completed after confirmation by the network. Confirmation time may vary and depends on the deposit amount and server load.</p>
            <img alt="depositQR" src={depoQR} />
            <p aria-readonly className="countdown">{counter}</p>
          </Modal.Footer>
        </Form>
      </Modal>
    </>

  )
}

export default PayModal;
