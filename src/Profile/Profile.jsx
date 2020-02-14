import React, { useState } from 'react';
import { Row, Col, Card, Image, Form, Button, Carousel, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import image3 from "../Landing/kucing.jpg"
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';

const Profile = () => {
    const [value, setValue] = useState(0);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
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
                            <RangeSlider
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
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Species
                            </Form.Label>
                            <Form.Control as='select'  >
                                <option value="" >Cat</option>
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
            <Col className="col-5 text-center mt-4">
                <Card style={{ width: '30rem' }}>
                    <Carousel>
                        <Carousel.Item style={{ height: 409 }}>
                            <Card.Img variant="top" src={image3} />
                        </Carousel.Item>
                        <Carousel.Item style={{ height: 409 }}>
                            <Card.Img variant="top" src={image3} />
                        </Carousel.Item>
                    </Carousel>
                    <Card.Body>
                        <Card.Title>Udin</Card.Title>
                        <Card.Text>
                            <i className="fas fa-user"> Breeder : Liu Kang</i><br></br>
                            <i className="fas fa-street-view"> 10 Kilometer dari sini</i><br></br>
                            <i className="fas fa-venus-mars"> Male - Adult</i><br></br>
                            <i className="fas fa-phone"> Phone Breeder : 6416444444</i><br></br>
                        </Card.Text>
                        <Card.Title>
                            About Pet
                        </Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, nihil?
                        </Card.Text>
                        <Link to="/editprofile">
                            <Button variant="primary">Edit</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
            <div>
                <Modal show={show} onHide={handleClose}>
                    <div className="bgmodal">
                        <Modal.Header closeButton>
                            <Modal.Title>Premium</Modal.Title>
                        </Modal.Header>
                        <Card className="text-center">
                            <Card.Body>
                                <Card.Text>
                                    Upgrade Breednder mu dan nikmati fitur fitur <b>PRO.</b>
                                </Card.Text>
                                <Card.Text>
                                    Breednder : 9232848427
                            </Card.Text>
                                <Form>
                                    <Form.Group>
                                        <Form.Control type="text" placeholder="No Rek Kamu.">
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>
                                            <b>Upload Bukti Transfer</b>
                                        </Form.Label>
                                        <Form.Control type="file">
                                        </Form.Control>
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Card>
                        <Modal.Footer>
                            <Button variant="primary" onClick={handleClose}>
                                Kirim
                        </Button>
                        </Modal.Footer>
                    </div>
                </Modal>
            </div>
            <Col className="col-3 mt-3 float-right">
                <Button onClick={handleShow}>Add Pet</Button>
            </Col>
        </Row>
    )
}
export default Profile;