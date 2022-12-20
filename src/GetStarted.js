import "./styles/GetStarted.css";
import Button from 'react-bootstrap/Button';
import Register from './Register';
import { useContext } from "react";
import { ContextRegister } from "./ContextRegister";
import ContextRegisterProvider from "./ContextRegister";


const GetStarted = () => {
  const { openRegister, setIsOpenRegister } = useContext(ContextRegister);

  return (
    <div className="get-started">
      <p>Open an account for free, start trading Bitcoin now!</p>
      <Button
        onClick={() => setIsOpenRegister(true)}
        variant="outline-light"
        size="lg"
        className="btn-get-started">
        GET STARTED
      </Button>
      <Register />
    </div>
  )
}

export default GetStarted;
