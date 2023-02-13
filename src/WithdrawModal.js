import './styles/SignIn.css';
import './styles/Deposit.css';
import React, {useState, useContext, createContext, useMemo, useRef, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import GetModal from './GetModal';
import {WithdrawContext} from './Balance';
import {getSession} from "./session";
import InputGroup from "react-bootstrap/InputGroup";

export const WithdrawGetContext = createContext();

// TODO: add logic for withdraw amount, can't be more than he actually has money
function WithdrawModal() {
    const {isOpenWithdraw, setIsOpenWithdraw} = useContext(WithdrawContext);
    const [coin, setCoin] = useState("BTC");
    const [isOpenGet, setIsOpenGet] = useState(false);
    const [validated, setValidated] = useState(false);
    const [amount, setAmount] = useState(0);
    const [wallet, setWallet] = useState("");
    const [error, setError] = useState("");

    const handleClose = () => {
        setIsOpenWithdraw(false);
        setAmount(0);
    };
    const handleChangeCoin = (event) => {
        setCoin(event.target.value)
    }
    const handleGet = () => {
        setIsOpenWithdraw(false);
        setIsOpenGet(true);
    }
    const handleAmount = (event) => {
        setAmount(event.target.value);
    }

    const contextGetValue = useMemo(() => ({
        isOpenGet, setIsOpenGet
    }), [isOpenGet, setIsOpenGet]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const session = getSession();
        const user = session.user;
        const key = coin.toLowerCase() + "_balance";
        const balance = parseFloat(user[key]);
        if (amount <= 0) {
            setError("Please enter a valid amount")
            setValidated(false)
            event.stopPropagation();
            return;
        }
        if (amount > balance) {
            setError("Insufficient funds")
            setValidated(false)
            event.stopPropagation();
            return;
        }
        setValidated(true)
        setError(null);
        const key_wallet = coin.toLowerCase() + "_wallet";
        setWallet(user[key_wallet]);
        handleGet();
    }


    return (<>
            <WithdrawGetContext.Provider value={contextGetValue}>
                <Modal show={isOpenWithdraw} onHide={handleClose} className="deposit">
                    <Modal.Header closeButton>
                        <Modal.Title>Withdraw</Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={handleSubmit} noValidate>
                        <Modal.Body>
                            <Form.Group className="mb-3" controlId="currency">
                                <Form.Label>Currency:</Form.Label>
                                <Form.Select value={coin} onChange={handleChangeCoin}
                                             aria-label="Default select example">
                                    <option value="BTC">Bitcoin (BTC)</option>
                                    <option value="ETH">Ethereum (ETH)</option>
                                    <option value="BCH">Bitcoin cash(BCH)</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="amount">
                                <Form.Label>Amount:</Form.Label>
                                {(error && <p className="text-danger">{error}</p>)}
                                <Form.Control type="number" step="any" min="0" value={amount}
                                              onChange={handleAmount} style={{margin: 0}}/>
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="pay" type="submit">Get </Button>
                            <Button className="close" onClick={handleClose}> Close </Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
                <GetModal icon={coin} amount={amount} wallet={wallet}/>
            </WithdrawGetContext.Provider>
        </>

    )
}

export default WithdrawModal;
