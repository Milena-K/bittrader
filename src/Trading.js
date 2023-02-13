import ProfileNav from './ProfileNav';
import Balance from './Balance';
import Footer from './Footer';
import "./styles/Trading.css";
import FeeSVG from './img/fee2.svg';
import {Container, Row, Col} from 'react-bootstrap';
import GetStarted from './GetStarted';
import {isLoggedIn} from "./session";

function Trading(props) {
    return (
        <div className='trading'>
            <ProfileNav/>
            {(isLoggedIn() && <Balance/>)}
            <Container className={'info '}>
                <Row>
                    <h1>Bitcoin Trading</h1>
                </Row>
                <Row>
                    <p>
                        Bit Trading is a trusted platform for trading Bitcoins. The exchange provides fast order
                        execution, low spread, and access to high liquidity orderbook for top currency pairs on the
                        market. Cross-platform trading is realised via website, mobile app, and several API solutions.
                        Safety of assets and data are backed by high security standards and advanced legal compliance.
                    </p>
                </Row>
                <Row style={{borderBottom: 'none'}}>
                    <p> To start trading on Bit Trading, follow the steps: </p>
                    <Col>
                        <img src={require('./img/register.png')} className="icon"/>
                        <h4>Sign up with Bit Trading</h4>
                        <p>It will take you only a few steps to register and get an account on Bit Trading Bitcoin
                            exchange.</p>

                    </Col>
                    <Col>
                        <img src={require('./img/deposit2.png')} className="icon"/>
                        <h4>Deposit funds</h4>
                        <p>Fund account to buy bitcoins using electronic wallets, buy bitcoins translation from
                            Blockchain and all kinds of exchanges.</p>

                    </Col>
                    <Col>
                        <img src={require('./img/trade.png')} className="icon"/>
                        <h4>Start trading</h4>
                        <p>Trade Bitcoin via our application, mobile app or using automated trading solutions.</p>
                    </Col>
                </Row>
                <Row>
                    <img src={FeeSVG} style={{width: '120px'}}/>
                    <h3>Commission</h3>
                    <p>Bit Trading exchange charges variable commissions of 0% to 0.2%, depending on the trading pair.
                        Special conditions are discussable for high-volume traders. Volume-based trade fees are coming
                        soon. </p>
                </Row>
                <Row>
                    <h2>Bit Trading API</h2>
                    <p>Bit Trading provides several API solutions for automated trading based on needs of individuals
                        and institutions. REST API is a basic tool for quick access to Bit Trading market data and
                        automated trade management. WebSocket API with full trading functionality is mainly used by
                        professional traders. Finally, FIX API is the best solution for institutional traders to connect
                        trading systems to a source of Bitcoin liquidity. </p>
                </Row>
                <Row>
                    <h2>Key Advantages</h2>
                    <ul>
                        <li>safe cryptocurrency cold storage and financial viability</li>
                        <li>high liquidity orderbook and low spread</li>
                        <li>advanced order-matching algorithms</li>
                        <li>cross-platform trading via website, mobile app and API</li>
                        <li>easy deposits and guaranteed withdrawals</li>
                        <li>advanced and transparent reporting</li>
                        <li>professional 24/7 support team</li>
                    </ul>
                </Row>
            </Container>
            <GetStarted/>
            <Footer/>
        </div>)
}

export default Trading;
