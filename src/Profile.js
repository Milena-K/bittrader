import {
    Navbar, Row, Col,
    Container, Nav, Form, Button,
    Table
} from 'react-bootstrap';
import './styles/Profile.css';
import Footer from './Footer';
import Balance from './Balance';
import ProfileNav from './ProfileNav';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faToggleOff, faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import {useAuthValue} from "./AuthContext";
import {createContext, useContext, useEffect, useRef, useState} from "react";
import {isLoggedIn, getSession, endSession} from "./session"
import {useNavigate} from "react-router";
import VerifyModal from "./VerifyModal";

export const VerifyContext = createContext();
const Profile = () => {
    const {currentUser, setCurrentUser} = useAuthValue();
    const [openVerification, setOpenVerification] = useState(false);
    const [btc_wallet, setBtcWallet] = useState("");
    const [eth_wallet, setEthWallet] = useState("");
    const [bch_wallet, setBchWallet] = useState("");
    const [coin, setCoin] = useState("BTC");
    const [title, setTitle] = useState("Bitcoin (BTC)");
    const [transactions, setTransactions] = useState("");
    const navigate = useNavigate();
    const contextValue = {openVerification, setOpenVerification};
    let date = new Date().toDateString().split(" ");
    date = date[1] + " " + date[2] + ', ' + date[3];

    useEffect(() => {
        if (!isLoggedIn()) navigate("/");
        const session = getSession();
        const user = session.user;
        const transactions = user.transactions;
        setBtcWallet(user.btc_wallet);
        setEthWallet(user.eth_wallet);
        setBchWallet(user.bch_wallet);
        setTransactions(transactions);
    }, [])

    const handleCoinSelect = (e) => {
        setTitle(e.target.selectedOptions[0].label);
        setCoin(e.target.value);
    }

    return (
        <VerifyContext.Provider value={contextValue}>
            <div className="profile">
                <ProfileNav/>
                <Balance/>

                <Container className="form">
                    <Form>
                        <Row>
                            <p className='user-email'>{(currentUser ? currentUser.email : '')}</p>
                        </Row>

                        <Row>
                            <Form.Group className="mb-3">
                                <Form.Label className="title">Request transfer</Form.Label>
                                <Form.Select onChange={handleCoinSelect}>
                                    <option value="btc">Bitcoin (BTC)</option>
                                    <option value="eth">Ethereum (ETH)</option>
                                    <option value="bch">Bitcoin cash (BCH)</option>
                                </Form.Select>
                                <br/>

                                <Button className="btn-green" variant="success" size="sm"
                                        onClick={() => setOpenVerification(true)}>Get</Button>
                                <VerifyModal title={title} coin={coin}/>
                            </Form.Group>
                        </Row>

                        <Row xs={1} xl={2}>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label className="title">Change avatar:</Form.Label>
                                    <br/>
                                    <input type="file" multiple accept="image/*"/>
                                    <br/>
                                    <br/>

                                    <Button className="btn-green" type="submit" variant="success"
                                            size="sm">Save</Button>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label className="title">Change nickname:</Form.Label>
                                    <br/>
                                    <Form.Control
                                        type="text"
                                        placeholder={currentUser && currentUser.username}
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                    <br/>
                                    <Button className="btn-green" variant="success" size="sm"
                                            type="submit">Save</Button>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row xs={1} xl={2}>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label className="title">Your wallets</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={btc_wallet}
                                        onChange={(e) => setBtcWallet(e.target.value)}
                                        placeholder="Bitcoin (BTC)"/>
                                    <Form.Control
                                        type="text"
                                        value={eth_wallet}
                                        placeholder="Ethereum (ETH)"
                                        onChange={(e) => setEthWallet(e.target.value)}/>
                                    {/* <Form.Control type="text" value={user.wallets[0]} /> */}
                                    <Form.Control
                                        type="text"
                                        value={bch_wallet}
                                        onChange={(e) => setBchWallet(e.target.value)}
                                        placeholder="Bitcoin cash (BCH)"/>

                                    <br/>
                                    <Button className="btn-green" onClick={() => setOpenVerification(true)}
                                            variant="success"
                                            size="sm">Save</Button>
                                </Form.Group>

                            </Col>

                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label className="title">Change password:</Form.Label>
                                    <Row>
                                        <Form.Label className="password" column lg={4}> Current password: </Form.Label>
                                        <Col>
                                            <Form.Control type="password"/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Form.Label className="password" column lg={4}>New password:</Form.Label>
                                        <Col>
                                            <Form.Control type="password"/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Form.Label className="password" column lg={4}>Repeat password: </Form.Label>
                                        <Col>
                                            <Form.Control type="password"/>
                                        </Col>
                                    </Row>
                                    <br/>
                                    <Button className="btn-green" type="submit" variant="success" size="sm">Change
                                        password</Button>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Form.Group>
                                <Form.Label className="title">2FA</Form.Label>
                                <FontAwesomeIcon icon={faToggleOff} className="toggle"/>
                            </Form.Group>
                        </Row>
                        <Row className="last-block">
                            <Form.Group>
                                <Form.Label className="title">Recent activity</Form.Label>
                                <Container className="transactions-table" fluid>
                                    <Table size="md" bordered striped responsive>
                                        <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Type</th>
                                            <th>Amount</th>
                                            <th>Status</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {/*first fake updating row*/}
                                        {currentUser && currentUser.username == "georgian33" &&
                                            <tr>
                                                <td>{date}</td>
                                                <td>Withdraw</td>
                                                <td>- 0.04 BTC</td>
                                                <td>
                                                    <FontAwesomeIcon icon={faCircleCheck}/>
                                                </td>
                                            </tr>
                                        }
                                        {transactions && transactions.map((t, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{t.Date}</td>
                                                    <td>{t["Type"]}</td>
                                                    <td>{t.Amount}</td>
                                                    <td>
                                                        <FontAwesomeIcon icon={faCircleCheck}/>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                        </tbody>
                                    </Table>
                                </Container>

                            </Form.Group>

                        </Row>

                    </Form>
                </Container>
                <Footer/>
            </div>
        </VerifyContext.Provider>
    )
}

export default Profile;
