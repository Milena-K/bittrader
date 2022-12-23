import {
  Navbar, Row, Col,
  Container, Nav, Form, Button,
  Table
} from 'react-bootstrap';
import './styles/Profile.css';
import Footer from './Footer';
import Balance from './Balance';
import ProfileNav from './ProfileNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOff, faCircleCheck } from '@fortawesome/free-solid-svg-icons';


const Profile = () => {

  return (
    <div className="profile">
      <ProfileNav />
      <Balance />

      <Container className="form">
        <Form>
          <Row>
            {/* <p className='user-email'>{user.email}</p> */}
            <p className='user-email'>georgian33m@yahoo.com</p>
          </Row>

          <Row>
            <Form.Group className="mb-3">
              <Form.Label className="title">Request transfer</Form.Label>
              <Form.Select>
                <option value="btc">Bitcoin (BTC)</option>
                <option value="eth">Ethereum (ETH)</option>
                <option value="bch">Bitcoin cash (BCH)</option>
              </Form.Select>
              <br />
              <Button className="btn-green" variant="success" size="sm">Get</Button>
            </Form.Group>
          </Row>

          <Row xs={1} xl={2} >
            <Col>
              <Form.Group className="mb-3">
                <Form.Label className="title">Change avatar:</Form.Label>
                <br />
                <input type="file" multiple accept="image/*" />
                <br />
                <br />

                <Button className="btn-green" variant="success" size="sm">Save</Button>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label className="title">Change nickname:</Form.Label>
                <br />
                <Form.Control
                  type="text"
                  placeholder="georgian33"
                  /* placeholder={user.username} */
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
                <br />
                <Button className="btn-green" variant="success" size="sm">Save</Button>
              </Form.Group>
            </Col>
          </Row>

          <Row xs={1} xl={2}>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label className="title">Your wallets</Form.Label>
                <Form.Control
                  type="text"
                  value="1Be9LxWuyERjZtFdVgy6daQQePETWqfdEG"
                  placeholder="Bitcoin (BTC)" />
                <Form.Control
                  type="text"
                  value="0x42b0470d6f3c02bee5a01f4c19c400f2e03ed33c"
                  placeholder="Ethereum (ETH)" />
                {/* <Form.Control type="text" value={user.wallets[0]} /> */}
                <Form.Control
                  type="text"
                  placeholder="Bitcoin cash (BCH)" />

                <br />
                <Button className="btn-green" variant="success" size="sm">Save</Button>
              </Form.Group>

            </Col>

            <Col>
              <Form.Group className="mb-3">
                <Form.Label className="title">Change password:</Form.Label>
                <Row>
                  <Form.Label className="password" column lg={4}> Current password: </Form.Label>
                  <Col>
                    <Form.Control type="password" />
                  </Col>
                </Row>
                <Row>
                  <Form.Label className="password" column lg={4}>New password:</Form.Label>
                  <Col>
                    <Form.Control type="password" />
                  </Col>
                </Row>
                <Row>
                  <Form.Label className="password" column lg={4}>Repeat password: </Form.Label>
                  <Col>
                    <Form.Control type="password" />
                  </Col>
                </Row>
                <br />
                <Button className="btn-green" variant="success" size="sm">Change password</Button>
              </Form.Group>
            </Col>
          </Row>
          <Row >
            <Form.Group>
              <Form.Label className="title">2FA</Form.Label>
              <FontAwesomeIcon icon={faToggleOff} className="toggle" />
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
                    <tr>
                      <td>Dec 11, 2022</td>
                      <td>Withdraw</td>
                      <td>- 0.51 BTC</td>
                      <td>
                        <FontAwesomeIcon icon={faCircleCheck} />
                      </td>
                    </tr>
                    <tr>
                      <td>Dec 11, 2022</td>
                      <td>Withdraw</td>
                      <td>- 0.51 BTC</td>
                      <td>
                        <FontAwesomeIcon icon={faCircleCheck} />
                      </td>
                    </tr>
                    <tr>
                      <td>Dec 11, 2022</td>
                      <td>Withdraw</td>
                      <td>- 0.51 BTC</td>
                      <td>
                        <FontAwesomeIcon icon={faCircleCheck} />
                      </td>
                    </tr>
                    <tr>
                      <td>Dec 11, 2022</td>
                      <td>Withdraw</td>
                      <td>- 0.51 BTC</td>
                      <td>
                        <FontAwesomeIcon icon={faCircleCheck} />
                      </td>
                    </tr>
                    <tr>
                      <td>Dec 11, 2022</td>
                      <td>Withdraw</td>
                      <td>- 0.51 BTC</td>
                      <td>
                        <FontAwesomeIcon icon={faCircleCheck} />
                      </td>
                    </tr>
                    <tr>
                      <td>Dec 11, 2022</td>
                      <td>Withdraw</td>
                      <td>- 0.51 BTC</td>
                      <td>
                        <FontAwesomeIcon icon={faCircleCheck} />
                      </td>
                    </tr>
                    <tr>
                      <td>Dec 11, 2022</td>
                      <td>Withdraw</td>
                      <td>- 0.51 BTC</td>
                      <td>
                        <FontAwesomeIcon icon={faCircleCheck} />
                      </td>
                    </tr>
                    <tr>
                      <td>Dec 11, 2022</td>
                      <td>Withdraw</td>
                      <td>- 0.51 BTC</td>
                      <td>
                        <FontAwesomeIcon icon={faCircleCheck} />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Container>

            </Form.Group>

          </Row>

        </Form>
      </Container>
      <Footer />
    </div >
  )
}

export default Profile;
