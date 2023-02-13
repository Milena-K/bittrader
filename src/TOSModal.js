import Modal from "react-bootstrap/Modal";
import {useContext} from "react";
import {TOSContext} from "./Register";
import {Button, ModalDialog} from "react-bootstrap";
import "./styles/TOSModal.css";

const TOSModal = () => {
    const {openTOS, setOpenTOS, agreed, setAgreed} = useContext(TOSContext);
    const handleAccept = () => {
        setAgreed(true);
        setOpenTOS(false);
    }
    return (
        <>
            <Modal className="tos verify" show={openTOS} onHide={setOpenTOS}>
                <Modal.Header></Modal.Header>
                <Modal.Body style={{maxHeight: 'calc(100vh - 310px)', overflowY: 'scroll'}}>
                    <h4 className="text-center">
                        Terms of Service for Crypto Trading Simulation Account</h4>
                    <p className="">
                        Welcome to our crypto trading simulation web page! These terms of service
                        govern your access to and use of the services and websites provided by us.
                        <br/>
                        <br/>
                        By using our services and websites, you agree to be bound by these Terms and our Privacy
                        Policy.
                        If you do not agree to these Terms, do not use our services and websites.
                        <br/>
                        <br/>
                        <h5 className="">Accounts</h5>
                        To use the services provided by our website, you must create an account. When you create an
                        account, you agree to provide accurate, current and complete information about yourself. You
                        are responsible for maintaining the confidentiality of your account information, including your
                        password, and for all activities that occur under your account.
                        <br/>
                        <br/>
                        <h5 className="">Use of Services</h5>
                        Our website provides a platform for you to engage in simulated crypto trading. You agree to
                        use the services only for lawful purposes and in accordance with these Terms. You may not use
                        the services to engage in any activities that may be harmful to the services, including but not
                        limited to:
                        <br/>
                        <br/>
                        <ul>
                            <li> Violating any laws or regulations;</li>
                            <li>
                                Infringing the intellectual property or other proprietary rights of any third party;
                            </li>
                            <li>
                                Engaging in any deceptive or fraudulent practices;
                            </li>
                            <li>
                                Transmitting any viruses or other harmful code;
                            </li>
                            <li>
                                Interfering with the operation of the services;
                            </li>
                            <li>
                                Attempting to access or use the services other than through the interfaces provided by
                                us;
                            </li>
                            <li>
                                Interfering with the security of the services or attempting to gain unauthorized access
                                to the services.
                            </li>
                        </ul>
                        <br/>
                        <h5>Virtual Currency</h5>
                        The website provides a virtual currency for use in simulated crypto trading. You understand
                        and agree that the virtual currency has no real-world value and cannot be redeemed for actual
                        currency or other value. We reserve the right to limit the amount of virtual currency that
                        may be used in a single transaction and the total amount of virtual currency that may be held in
                        your account.
                        <br/>
                        <br/>
                        <h5>Limitation of Liability</h5>
                        You understand and agree that the services are provided on an “as is” and “as available”
                        basis. We do not make any representations or warranties of any kind, express or implied, as to
                        the operation of the services or the information, content, materials, or products included on
                        the services.
                        <br/>
                        <br/>
                        You agree that we will not be liable for any damages of any kind arising from your use of
                        the services, including but not limited to direct, indirect, incidental, punitive, and
                        consequential damages.
                        <br/>
                        <br/>
                        <h5>Changes to Terms and Services</h5>
                        We may modify these Terms at any time by posting the revised Terms on the website. Your
                        continued use of the services after the posting of the revised Terms constitutes your
                        acceptance of the changes. We may also modify, suspend, or discontinue the services at any time
                        without notice to you.
                        <br/>
                        <br/>
                        <h5>Termination of Services</h5>
                        We may terminate or suspend your access to the services at any time, with or without cause,
                        and with or without notice to you. Upon termination, you will no longer be able to access your
                        account and any virtual currency in your account will be forfeited.
                        <br/>
                        <br/>
                        <h5>Dispute Resolution</h5>
                        Any disputes arising from or in connection with these Terms or the services will be resolved
                        through binding arbitration. The arbitration will be conducted in accordance with the rules
                        of
                        the American Arbitration Association. The arbitrator’s decision will be final and binding on
                        both parties.
                        <br/>
                        <br/>
                        <h5>Governing Law</h5>
                        These Terms and the use of the services will be governed by and construed in accordance with
                        the
                        laws of the United States of America and the State of California, without giving effect to
                        any
                        principles of conflicts of law.
                        <br/>
                        <br/>
                        <h5>Contact Information</h5>
                        If you have any questions or concerns about these Terms or the services provided by our
                        website, please contact us at [insert contact information].
                        <br/>
                        <br/>
                        Thank you for using our crypto trading simulation web page. We hope you enjoy the experience
                        and learn more about crypto trading.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleAccept}>
                        Accept
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default TOSModal;