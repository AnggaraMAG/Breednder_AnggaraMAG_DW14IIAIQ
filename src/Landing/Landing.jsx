import React, { Component } from 'react';
import "../App.css";
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import "../Landing/Landing.css";
import { connect } from "react-redux";
import { getSpecies } from '../_actions/species';
import { login } from "../_actions/auth";
import { getAges } from "../_actions/ages";

class Landing extends Component {
    componentDidMount() {
        this.props.getSpecies();
        this.props.getAges();
    }
    constructor(props) {
        super(props);
        this.state = {
            login: false,
            register: false,
            email: "",
            password: "",
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

    loginmasuk = () => {
        const data = {
            email: this.state.email,
            password: this.state.password,
        }
        this.props.getLogin(data)
    }
    handlechange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        const { login, register } = this.state;
        const { data } = this.props.species;
        
        // console.log(this.props, 'ages')
        return (
            <>
                {/* Modal Login */}
                <Modal
                    show={login} onHide={() => this.handleLogin(login)}
                >
                    <Modal.Header>
                        <Modal.Title className="modalT font">Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="font">
                        <Form.Group>
                            <Form.Control onChange={this.handlechange} type="email" placeholder="Email" name="email" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control onChange={this.handlechange} type="password" placeholder="Password" name="password" />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer className="font">
                        <Button variant="outline-secondary" onClick={() => { this.handleLogin(login) }}>Close</Button>
                        <Button variant="outline-secondary" onClick={this.loginmasuk}>
                            Login
                            </Button>
                    </Modal.Footer>
                </Modal>
                {/*  End Modal Login*/}

                {/* modal register */}
                <Modal className="font" show={register} onHide={() => this.handleRegister(register)}>
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
                                <option value="">Species</option>
                                {data.map((item, index) => (
                                    <option key={index}>{item.name}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control as="select">
                                <option value=""> Age </option>
                                {this.props.ages.data.map((item, index) => (
                                    <option key={index}>{item.age}</option>
                                ))}
                            </Form.Control>
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
const mapStateToProps = state => {
    return {
        species: state.species,
        ages: state.ages
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getSpecies: () => dispatch(getSpecies()),
        getLogin: (data) => dispatch(login(data)),
        getAges: () => dispatch(getAges()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Landing);
