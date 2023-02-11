import "./styles/GetStarted.css";
import Button from 'react-bootstrap/Button';
import Register from './Register';
import { useContext } from "react";
import { ContextRegister } from "./ContextRegister";
import {isLoggedIn} from "./session";
import {useNavigate} from "react-router";


const GetStarted = () => {
  const { openRegister, setIsOpenRegister } = useContext(ContextRegister);
  const navigate = useNavigate();

  const openReg = () => {
      if (isLoggedIn()) navigate("/profile");
      else setIsOpenRegister(true);
  }

  return (
    <div className="get-started">
      <p>Open an account for free, start trading Bitcoin now!</p>
      <Button
        onClick={openReg}
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
