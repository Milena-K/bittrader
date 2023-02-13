import './styles/SignIn.css';
import './styles/Deposit.css';
import React, {useState, useContext, createContext, useMemo, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import { faBitcoinSign, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { WithdrawGetContext } from './WithdrawModal';
import GetConfirmation from './GetConfirmation';

export const ConfirmationContext = createContext();

function GetModal(props) {
  const { isOpenGet, setIsOpenGet } = useContext(WithdrawGetContext);
  const [wallet, setWallet] = useState(''); // it should be passed through props depending on what coin it is
  const [isConfirmed, setIsConfirmed] = useState(false);

  useEffect(() => {
    setWallet(props.wallet);
  }, [props.wallet])
  const handleClose = () => { setIsOpenGet(false); };
  const handleWalletChange = (event) => {
    setWallet(event.target.value)
  }
  const handleConfirmation = () => {
    setIsOpenGet(false);
    setIsConfirmed(true);
  }

  const confValue = useMemo(() => ({
    isConfirmed, setIsConfirmed
  }), [isConfirmed, setIsConfirmed])

  const getIcon = () => {
    if (props.icon == "BTC")
      return (
        <FontAwesomeIcon size='2xl' icon={faBitcoinSign} className="icon" />
      )
    else if (props.icon == "ETH")
      return (
        <FontAwesomeIcon size='2xl' icon={faEthereum} className="icon" />
      )
    else if (props.icon == "BCH")
      return (
        <>
          <FontAwesomeIcon size='2xl' icon={faBitcoinSign} className="icon" />
          <FontAwesomeIcon size='2xl' icon={faDollarSign} className="icon" />
        </>
      )
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }
  return (
    <>
      <ConfirmationContext.Provider value={confValue}>
        <Modal show={isOpenGet} onHide={handleClose} className="deposit get">
          <Modal.Header closeButton>
            <Modal.Title>Withdraw</Modal.Title>
          </Modal.Header>
          <Form onSubmit={handleSubmit}>
            <Modal.Body>
              <Form.Group className="mb-3" controlId="username">
                <div className="title">
                  {getIcon()}
                  <Form.Label>Please enter a valid wallet address</Form.Label>
                </div>
                <Form.Control style={{ margin: 0 }} onChange={handleWalletChange} className="text-center" value={wallet}/>
                <Form.Text> Your address is entered by default </Form.Text>
              </Form.Group>
            </Modal.Body>
            <Modal.Footer >
              <Button className="pay" type="submit" onClick={handleConfirmation}>Confirm </Button>
              <Button className="close" onClick={handleClose}> Close </Button>
            </Modal.Footer >
          </Form>
        </Modal>
        <GetConfirmation coin={props.icon} amount={props.amount} wallet={wallet} />
      </ConfirmationContext.Provider>
    </>

  )
}

export default GetModal;
