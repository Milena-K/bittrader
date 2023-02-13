import ProfileNav from './ProfileNav';
import Balance from './Balance';
import Footer from './Footer';
import "./styles/AboutUs.css";
import SacSVG from './img/sac.svg';
import FsSVG from './img/fs.svg';
import LsSVG from './img/ls.svg';

import { Container, Row, Col } from 'react-bootstrap';
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "./firebaseConfig";
import {isLoggedIn} from "./session";

function AboutUs(props) {

  const [user, loading, error] = useAuthState(auth);

  return (
    <div className='about-us'>
      <ProfileNav />
      {( isLoggedIn() && <Balance /> )}
      <Container className={'info'}>
        <Row>
          <h1>About Crypo Hub</h1>
        </Row>
        <Row>
          <Col sm className="second-h1">
            <h1>Your Bitcoin sample exchange</h1>
          </Col>
          <Col sm={8}>
            <p>Simulated since 2014 as a representation of a cloud mining provider, Crypto Hub has become a popular destination for exploring the world of cryptocurrency. With a variety of users, Crypto Hub offers a range of features for trading and accessing high liquidity orderbooks for top currency pairs. Instant Bitcoin buying and selling is available through a simplified interface.</p>
            <p>Crypto Hub has developed a multi-level account system to cater to a range of customers, from beginners to experienced traders. The exchange offers worldwide coverage, multiple payment options, and 24/7 support. Please note that this is a simulation website only, and no real money should be sent to the site.</p>
          </Col>
        </Row>
        <Row style={{ borderBottom: 'none' }}>
          <h2>Our History</h2>
        </Row>
        <Row xs={1} lg={4} className="history">
          <Col>
            <p>  <span className="date">Jan 2013</span> - Advanced trading platform development started</p>
            <p>  <span className="date">Oct 2013</span> - Leading brokerage assets acquired</p>
            <p>  <span className="date">Nov 2013</span> - Trading Solutions Inc. company registered</p>
            <p>  <span className="date">Nov 2013</span> - Achieved top ranking in online trading industry</p>
            <p>  <span className="date">Jul 2014</span> - USD market added to platform</p>
            <p>  <span className="date">Aug 2014</span> - Payment card deposits added</p>
            <p>  <span className="date">Sep 2014</span> - EUR market added to platform</p>
          </Col>
          <Col>
            <p> <span className="date">Jan 2015</span> - Launched market-leading cryptocurrency wallet service</p>
            <p> <span className="date">Mar 2015</span> - Obtained high-level security certification</p>
            <p> <span className="date">Apr 2015</span> - Launched advanced trading platform</p>
            <p> <span className="date">Aug 2015</span> - Added support for multiple languages</p>
            <p> <span className="date">Oct 2015</span> - Partnership with leading financial institutions</p>
            <p> <span className="date">Dec 2015</span> - Released mobile app for convenient trading on-the-go</p>
            <p> <span className="date">Apr 2015</span> - Expanded offering to include top altcoins</p>
          </Col>
          <Col>
            <p> <span className="date">Apr 2016 </span> - Crypto lending feature launched</p>
            <p> <span className="date">Dec 2017 </span> - New user verification system implemented</p>
            <p> <span className="date">Jan 2017</span> - Partnership with major payment provider announced</p>
            <p> <span className="date">Oct 2017</span> - Mobile trading app released</p>
            <p> <span className="date">Mar 2018</span> - Launch of new altcoin trading pairs</p>
            <p> <span className="date">Jun 2018</span> - Introduction of 24/7 live customer support</p>
          </Col>
        </Row>
        <Row className="legal">
          <h1>Legal and Security</h1>
          <Row xs={1}>
            <Col>
              <p>
                Bit Trading prides itself on providing a secure and stable platform for cryptocurrency trading. We take all necessary measures to ensure the safety of your funds and the integrity of our system.
              </p>
            </Col>
            <Col>
              <p>In the past, we have always been able to maintain the trust of our users, and we are committed to continuing to do so. Please note that this is a simulated environment and no real money should be sent here.</p>
            </Col>
          </Row>
          <Row className="this" xs={1} md={1} lg={3}>
            <Col>
              <Row style={{ justifyContent: 'center' }}>
                <Col xs md={1} lg >
                  {/* <FontAwesomeIcon className='icon' color='#13c1c9' style={{ fontSize: '38px' }} icon={faShieldHalved} /> */}
                  <img src={SacSVG} style={{ width: '35px' }} />
                </Col>
                <Col xs={9} md={4} lg={9}>
                  <div className='reasons-security'>
                    <h3>System & Account Security</h3>
                    <p>Two-Factor Authentication</p>
                    <p>SSL certificate</p>
                    <p>Encrypted data</p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row style={{ justifyContent: 'center' }}>
                <Col xs md={1} lg>
                  {/* <FontAwesomeIcon icon={faLock} /> */}
                  <img src={FsSVG} style={{ width: '35px' }} />
                </Col>
                <Col xs={9} md={4} lg={9}>
                  <div className='reasons-financial'>
                    <h3>Financial Security</h3>
                    <p>Cold storage for cryptocurrency funds</p>
                    <p>PCI DSS certificate</p>
                    <p>Strong relations with banks</p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row style={{ justifyContent: 'center' }}>
                <Col xs md={1} lg>
                  {/* <FontAwesomeIcon icon={faFileContract} /> */}
                  <img src={LsSVG} style={{ width: '35px' }} />
                </Col>
                <Col xs={9} md={4} lg={9}>
                  <div className='reasons-compliance'>
                    <h3>Legal Compliance</h3>
                    <p>MSB status in FinCEN (USA)</p>
                    <p>Registered with the ICO in the UK (EU)</p>
                    <p>Internal AML/KYC policy and procedures</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <p className="advice">The information above may not be accurate and is part of a simulation.</p>
          </Row>
        </Row>
        <Row className="contacts">
          <h1>Contacts</h1>
          <Col>
            <p>Crypto Hub LTD</p>
            <p>Email for business inquiries: <a href="#">contact@cryptohub.club</a></p>
            <p>Email for account-related issues: <a href='#'>support@cryptohub.club</a></p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div >
  )
}

export default AboutUs;
