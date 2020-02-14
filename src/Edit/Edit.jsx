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
        <div>
            <Row>
                <Col className="col-4">
                    <Card>
                        <Card.Header className="bg">
                            <Row>
                                <Col>
                                    <Link to="/profile">
                                        <Image className="imageU rounded-circle" src={image3}></Image>
                                    </Link>
                                </Col>
                                <Col className="mt-4">
                                    <h3 className="font">Profile</h3>
                                </Col>
                            </Row>
                            <div className="mt-3">
                                <Link to="/home">
                                    <Button variant="outline-light">Home</Button>
                                </Link>

                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>
                                <p>Account Settings</p>
                            </Card.Title>
                            <Form.Group>
                                <Form.Label>
                                    Email
                            </Form.Label>
                                <Form.Control type="email" placeholder="udingambut@gmail.com" readOnly />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    Phone
                            </Form.Label>
                                <Form.Control type="number" placeholder="641644444" readOnly />
                            </Form.Group>
                            <Card.Title>
                                Discovery Settings
                        </Card.Title>
                            <Form.Group>
                                Maximum Distance     10km.
                            <RangeSlider max='10'
                                    value={value}
                                    onChange={changeEvent => setValue(changeEvent.target.value)}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    Age
                            </Form.Label>
                                <Form.Control as='select'  >
                                    <option value="" >Adult</option>
                                    <option value="" >Adult2</option>
                                    <option value="" >Adult3</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    Species
                            </Form.Label>
                                <Form.Control as='select'  >
                                    <option value="" >Cat</option>
                                    <option value="" >Bird</option>
                                </Form.Control>
                            </Form.Group>
                            <div className="text-center">
                                <Link to="/">
                                    <Button >Logout</Button>
                                </Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <div>
                    <Col style={{ marginTop: 50, marginLeft: 250 }} className="col-8" >
                        <Card style={{ width: '20rem' }}>
                            <Row>
                                <p className="text-center">
                                    {Data.map((postData, index) => {
                                        return (
                                            <div class="box">
                                                <img
                                                    src={postData.pics}
                                                    className="avatar-match-image"
                                                    alt=""
                                                />
                                                <div class="text">
                                                    <i className="fas fa-user"></i>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </p>
                            </Row>
                            <Card.Body>
                                <Card.Text>
                                    <Form>
                                        <Form.Label>Name Pet</Form.Label>
                                        <Form.Control placeholder="Udin" className="mb-4" />
                                        <Form.Label>Gender</Form.Label>
                                        <Form.Control className="mb-4" />
                                        <Form.Label>Name Pet</Form.Label>
                                        <Form.Control className="mb-4" />
                                        <Form.Label>Name Pet</Form.Label>
                                        <Form.Control className="mb-4" />
                                        <Form.Label>Name Pet</Form.Label>
                                        <Form.Control className="mb-4" />
                                    </Form>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </div>
            </Row>
        </div>
    )

}

export default Edit;