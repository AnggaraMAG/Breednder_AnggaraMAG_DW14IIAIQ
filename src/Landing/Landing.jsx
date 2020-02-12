import React, { Component, Fragment } from 'react';
import "../App.css";
import { Container, Row, Col, Button } from 'react-bootstrap';

export default class Landing extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row className="mt-5">
                        <Col className="float-left"><h3>BreedNder</h3></Col>
                        <Col>
                            <Button variant="outline-success" className="float-right" size="lg">Login</Button>
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
                        <Col className="text-center"><Button size="lg" variant="outline-success">Register Now!</Button></Col>
                    </Row>
                    <Row className="mt-5">
                        <Col className="text-center">
                            <h5>FIND YOUR PET'S MATCH</h5>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
