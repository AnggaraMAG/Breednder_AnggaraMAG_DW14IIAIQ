import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import image3 from "../Landing/kucing.jpg"
import { Row, Col, Card, Form, Image, Button } from 'react-bootstrap'
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider'
import Data from '../Home/Data'
import './Edit.css'

const Edit = () => {
    const [value, setValue] = useState(0);
    return (
        <div className="background">
            <Row className="font">
                <Col className="col-4">
                    <Card>
                        <Card.Header className="bg cardtop">
                            <Row>
                                <Link to="/profile">
                                    <Image className="imageU rounded-circle" src={image3}></Image>
                                </Link>
                                <h3 className="color" style={{ marginTop: 20, marginLeft: 20 }} >Edit Profile Pet</h3>
                            </Row>
                            <div className="mt-3">
                                <Link to="/home">
                                    <Button variant="outline-light">Home</Button>
                                </Link>

                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>
                                <p>Account Settings</p><hr />
                            </Card.Title>
                            <Form.Label className="mt-3">
                                Email
                            </Form.Label>
                            <Form.Control type="email" placeholder="udingambut@gmail.com" readOnly />
                            <Form.Label className="mt-3">
                                Phone
                            </Form.Label>
                            <Form.Control type="number" placeholder="641644444" readOnly />
                            <Card.Title className="mt-3">
                                <p>Discovery Settings</p><hr />
                            </Card.Title>
                            Maximum Distance     <b>{value}</b>
                            <Form.Group>
                                <RangeSlider max='10'
                                    value={value}
                                    onChange={changeEvent => setValue(changeEvent.target.value)}
                                />
                            </Form.Group>
                            <Form.Label className="mt-3">
                                Age
                            </Form.Label>
                            <Form.Control as='select'  >
                                <option value="" >Adult</option>
                                <option value="" >Adult2</option>
                                <option value="" >Adult3</option>
                            </Form.Control>
                            <Form.Label className="mt-3">
                                Species
                            </Form.Label>
                            <Form.Control as='select'  >
                                <option value="" >Cat</option>
                                <option value="" >Bird</option>
                            </Form.Control>
                            <div className="text-center mt-3">
                                <Link to="/">
                                    <Button >Logout</Button>
                                </Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <div className="borderR">
                    <Col style={{ marginTop: 50, marginLeft: 250 }} className="col-8" >
                        <Card style={{ width: '20rem' }}>
                            <Row>
                                <p className="text-center">
                                    {Data.map((postData) => {
                                        return (
                                            <div class="box">
                                                <img
                                                    src={postData.pics}
                                                    className="avatar-match-image"
                                                    alt=""
                                                />
                                                <div class="text">
                                                    <i className="fas fa-times"></i>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </p>
                            </Row>
                            <div>
                                <Card.Body className="scrollV" id="styleSc">
                                    <Card.Text>
                                        <Form>
                                            <Form.Label>Name Pet</Form.Label>
                                            <Form.Control value="Udin" />
                                            <Form.Label className="mt-2">Breeder</Form.Label>
                                            <Form.Control value="Herman" />
                                            <Form.Label className="mt-2">Gender</Form.Label>
                                            <Form.Control value="#" />
                                            <Form.Label className="mt-2">Age</Form.Label>
                                            <Form.Control value="#" />
                                            <Form.Label className="mt-2">About Pet</Form.Label>
                                            <Form.Control value="#" />
                                            <Link to="/profile">
                                                <Button className="mt-3">Save</Button>
                                            </Link>
                                        </Form>
                                    </Card.Text>
                                </Card.Body>
                            </div>

                        </Card>
                    </Col>
                </div>
            </Row>
        </div>
    )

}

export default Edit;