import "./styles/GetStarted.css";
import Button from 'react-bootstrap/Button';

const GetStarted = () => {

  return (
    <div className="get-started">
      <h5>Open account for free and start trading Bitcoin now!</h5>
      <Button variant="outline-light" size="lg" className="btn-get-started">GET STARTED</Button>
    </div>
  )
}

export default GetStarted;
