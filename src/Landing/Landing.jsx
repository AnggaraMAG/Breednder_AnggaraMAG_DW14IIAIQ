import React, { Component } from 'react';
import "../App.css";
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: false,
            register: false
        };

    }

    handleLogin = (open) => {
        this.setState({
            login: !open
        })
    }

    handleRegister = (open) => {
        this.setState({
            register: !open
        })
    }
    render() {
        const { login, register } = this.state;
        return (
            <>
                {/* Modal Login */}
                <Modal
                    show={login} onHide={() => this.handleLogin(login)}
                >
                    <Modal.Header>
                        <Modal.Title className="modalT">Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group>
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-secondary" onClick={() => { this.handleLogin(login) }}>Close</Button>
                        <Link to="/home">
                            <Button variant="outline-secondary">
                                Login
                            </Button>
                        </Link>
                    </Modal.Footer>
                </Modal>
                {/*  End Modal Login*/}

                {/* modal register */}
                <Modal show={register} onHide={() => this.handleRegister(register)}>
                    <Modal.Header>
                        <Modal.Title className="modalT">Register</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Breeder" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="number" placeholder="Phone Breeder" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control as="textarea" rows="3" placeholder="Address Breeder" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Name Pet" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Gender Pet" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control as='select'  >
                                <option value="" >Spesies Pet</option>
                                <option value="" >Reptile</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Age Pet" />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-secondary" onClick={() => this.handleRegister(register)}>Close</Button>
                        <Button variant="outline-secondary">
                            Register
                        </Button>
                    </Modal.Footer>
                </Modal>
                {/* end modal register */}
                <Container>
                    <Row className="mt-5">
                        <Col className="float-left"><h3>BreedNder</h3></Col>
                        <Col>
                            <Button onClick={() => { this.handleLogin(login) }} variant="light" className="float-right font" size="lg">Login</Button>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col className="text-center">
                            <h1>Swipe <b>right.</b>
                                <br></br>
                                Make your pet Happy
                            </h1>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col className="text-center">
                            <h4>by clicking enter, you agree to <u>our terms.</u> Learn how me process your data in our <u>Privacy Policy</u> and <u>Cookie Policy.</u></h4>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col className="text-center font">
                            <Button onClick={() => this.handleRegister(register)} size="lg" variant="light">Register Now!</Button>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col className="text-center">
                            <h5>FIND YOUR PET'S MATCH</h5>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
