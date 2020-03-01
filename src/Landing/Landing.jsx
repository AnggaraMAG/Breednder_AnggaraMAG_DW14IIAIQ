import React, { Component } from 'react';
import "../App.css";
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import "../Landing/Landing.css";
import { connect } from "react-redux";
import { getSpecies } from '../_actions/species';
import { login, register } from "../_actions/auth";
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
            regist: {
                name: null,
                email: null,
                password: null,
                phone: null,
                address: null,
                pet: {
                    name: null,
                    gender: null,
                    species: null,
                    age: null,
                }

            }
        };
        // this.registerChange = this.registerChange.bind(this);
        // this.registerSubmit = this.registerSubmit.bind(this);


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
    registerChange = e => {
        e.preventDefault();
        this.setState({
            regist: {
                name: this.refs.name.value,
                email: this.refs.emailregister.value,
                password: this.refs.passwordregister.value,
                phone: this.refs.phone.value,
                address: this.refs.address.value,
                pet: {
                    name: this.refs.namepet.value,
                    gender: this.refs.gender.value,
                    species: this.refs.species.value,
                    age: this.refs.age.value,
                }

            }
        })
    }
    registerSubmit = () => {
        const data = {
            name: this.state.regist.name,
            email: this.state.regist.email,
            password: this.state.regist.password,
            phone: this.state.regist.phone,
            address: this.state.regist.address,
            pet: {
                name: this.state.regist.pet.name,
                gender: this.state.regist.pet.gender,
                species: this.state.regist.pet.species,
                age: this.state.regist.pet.age,
            }
        }
        this.props.register(data)
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
        console.log(e.target.value);
    }
    render() {
        const { login, register } = this.state;
        const { data } = this.props.species;
        // const {loading,error} = login;

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
                            <Form.Control onChange={this.handlechange} type="email" placeholder="Email" name="email"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control onChange={this.handlechange} type="password" placeholder="Password" name="password"/>
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
                            {/* <label>{this.state.regist.name}</label><br />
                            <label>{this.state.regist.email}</label><br />
                            <label>{this.state.regist.password}</label><br />
                            <label>{this.state.regist.phone}</label><br />
                            <label>{this.state.regist.address}</label><br />
                            <label>{this.state.regist.pet.name}</label><br />
                            <label>{this.state.regist.pet.gender}</label><br />
                            <label>{this.state.regist.pet.species}</label><br />
                            <label>{this.state.regist.pet.age}</label> */}
                            <Form.Control onChange={this.registerChange} type="text" placeholder="Breeder" ref="name" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control onChange={this.registerChange} type="email" placeholder="Email" ref="emailregister" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control onChange={this.registerChange} type="password" placeholder="Password" ref="passwordregister" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="number" placeholder="Phone Breeder" ref="phone" onChange={this.registerChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control as="textarea" rows="3" placeholder="Address Breeder" ref="address" onChange={this.registerChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="text" placeholder="NamePet" ref="namepet" onChange={this.registerChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control as="select" placeholder="Gender Pet" ref="gender" onChange={this.registerChange} >
                            <option>Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control as='select' value={this.state.species} onChange={this.registerChange} ref="species" >
                                <option value="">Species</option>
                                {data.map((item, index) => (
                                    <option key={index} value={item.id}>{item.name}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control as="select" value={this.state.age} onChange={
                                this.registerChange} ref="age"
                            >
                                <option value=""> Age </option>
                                {this.props.ages.data.map((item, index) => (
                                    <option key={index} value={item.id}>{item.age}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-secondary" onClick={() => this.handleRegister(register)}>Close</Button>
                        <Button variant="outline-secondary" onClick={this.registerSubmit}>
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
        ages: state.ages,
        auth: state.auth,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getSpecies: () => dispatch(getSpecies()),
        getLogin: (data) => dispatch(login(data)),
        getAges: () => dispatch(getAges()),
        register: data => dispatch(register(data)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Landing);
