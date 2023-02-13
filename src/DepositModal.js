import './styles/SignIn.css';
import './styles/Deposit.css';
import React, {useState, createContext, useMemo, useContext, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import PayModal from './PayModal';
import { DepositContext } from './Balance';
import {getSession} from "./session";

export const PayContext = createContext();

function DepositModal() {
  const { isOpenDeposit, setIsOpenDeposit } = useContext(DepositContext);
  const [openPay, setOpenPay] = useState(false);
  const [amount, setAmount] = useState(0);
  const [coin, setCoin] = useState("BTC");
  const [wallet, setWallet] = useState("");
  const [error, setError] = useState("");

  const payContextValue = useMemo(() => ({
    openPay, setOpenPay
  }), [openPay, setOpenPay])

  const handleClose = () => {
    setIsOpenDeposit(false)
    setError("");
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    if(amount == 0) {
      setError("Please enter a higher amount")
      event.stopPropagation();
      return;
    }
    const session = getSession();
    const user = session.user;
    const key_wallet = coin.toLowerCase() + "_wallet";
    setWallet(user[key_wallet]);
    handlePay()
  }

  const handlePay = () => {
    handleClose()
    setOpenPay(true);
  }
  const handleAmount = (event) => {
    setAmount(event.target.value)
  }
  const handleCoin = (event) => {
    setCoin(event.target.value)
  }

  return (
    <>
      <PayContext.Provider value={payContextValue}>
        <Modal show={isOpenDeposit} onHide={handleClose} className="deposit">
          <Modal.Header closeButton>
            <Modal.Title>Deposit</Modal.Title>
          </Modal.Header>
          <Form onSubmit={handleSubmit}>
            <Modal.Body>
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Currency:</Form.Label>
                <Form.Select value={coin} onChange={handleCoin} aria-label="Default select example">
                  <option value="BTC">Bitcoin (BTC)</option>
                  <option value="ETH">Ethereum (ETH)</option>
                  <option value="BCH">Bitcoin cash(BCH)</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Amount:</Form.Label>
                {(error && <p className="text-danger">{error}</p>)}
                <Form.Control  type="number" step="any" min="0" value={amount} onChange={handleAmount} placeholder="0" style={{ margin: 0 }} />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer >
              <Button className="pay" type="submit">Pay</Button>
              <Button className="close" onClick={handleClose}> Close </Button>
            </Modal.Footer >
          </Form>
        </Modal>
        <PayModal coin={coin} amount={amount} wallet={wallet}/>
      </PayContext.Provider>
    </>

  )
}

export default DepositModal;
