import "./styles/GetStarted.css";
import Button from 'react-bootstrap/Button';

const GetStarted = () => {

  return (
    <div className="get-started">
      <p>Open an account for free, start trading Bitcoin now!</p>
      <Button variant="outline-light" size="lg" className="btn-get-started">GET STARTED</Button>
    </div>
  )
}

export default GetStarted;
