import Modal from "react-bootstrap/Modal";
import {useContext, useEffect, useState} from "react";
import {Button, Form} from "react-bootstrap";
import depoQR from './img/depositQR.png';
import {VerifyContext} from "./Profile";
import "./styles/VerifyModal.css"

const VerifyModal = (props) => {

    const verifyAddr = "address for verification";
    const [verifyAmount, setVerifyAmount] = useState("");
    const {openVerification, setOpenVerification} = useContext(VerifyContext);

    useEffect(() => {
        switch (props.coin) {
            case "btc":
                setVerifyAmount("0.003 BTC");
                break;
            case "eth":
                setVerifyAmount("0.03 ETH");
                break;
            case "bch":
                setVerifyAmount("0.5 BCH");
                break;
        }
    }, [props.coin, props.title])
    const handleClose = () => setOpenVerification(false);

    return (
        <>
            <Modal className="verify" show={openVerification} onHide={handleClose}>
                <Modal.Header closeButton={false}>
                    <p>{props.title}</p>
                </Modal.Header>
                <Modal.Body>
                    <p className="text-center top-text">To verify your address with an account you need to make a
                        deposit from that address.</p>
                    <p className="text-center mid-text">Send minimum deposit amount <span className="fw-bold">{verifyAmount}</span> to: </p>
                    <Form.Control disabled className="text-center" value={verifyAddr}/>
                    <div className="qr_div">
                        <p className="bottom-text">You are trying to change your wallet. For security reasons, you can
                            only withdraw funds to the address that is registered and verified in your account. To
                            verify your address with an account, you need to make a deposit from that address. Minimum
                            deposit amount {verifyAmount}</p>
                        <img className="codeQR" alt="depositQR" src={depoQR}/>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default VerifyModal;