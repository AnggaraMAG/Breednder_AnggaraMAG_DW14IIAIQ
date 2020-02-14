import React from 'react'
import { Row, Col, Card, Image, Button } from 'react-bootstrap';
import "./Home.css";
import image1 from "../Landing/elang.jpg"
import image3 from "../Landing/kucing.jpg"
import Deck from '../components/Deck';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Home = () => {
    return (
        <Row className="bg-sungai">
            <Col className="col-4">
                <Card className="scroll">
                    <Card.Header className="bg">
                        <Row>
                            <Col>
                                <Link to="/profile">
                                    <Image className="imageU rounded-circle" src={image1}></Image>
                                </Link>
                            </Col>
                            <Col className="mt-4">
                                <h3 className="font">UDIN</h3>
                            </Col>
                        </Row>
                        <div className="mt-3">
                            <Link to="/profile">
                                <Button variant="outline-light">Profile</Button>
                            </Link>

                        </div>
                    </Card.Header>
                    <Card.Title className="ml-2 text-center">
                        <i className="font">Match.</i>
                    </Card.Title>
                    <Card.Body style={{ 'maxHeight': '700px', 'overflowY': 'auto' }}>
                        <Row className="scroll">
                            <Col><Card.Img className="#" src={image1}></Card.Img></Col>
                            <Col><Card.Img className="#" src={image3}></Card.Img></Col>
                            <Col><Card.Img className="#" src={image3}></Card.Img></Col>
                        </Row><br></br>
                        <Row>
                            <Col><Card.Img className="#" src={image1}></Card.Img></Col>
                            <Col><Card.Img className="#" src={image3}></Card.Img></Col>
                            <Col><Card.Img className="#" src={image3}></Card.Img></Col>
                        </Row><br></br>
                        <Row>
                            <Col><Card.Img className="#" src={image3}></Card.Img></Col>
                            <Col><Card.Img className="#" src={image3}></Card.Img></Col>
                            <Col><Card.Img className="#" src={image1}></Card.Img></Col>
                        </Row><br></br>
                        <Row>
                            <Col><Card.Img className="#" src={image1}></Card.Img></Col>
                            <Col><Card.Img className="#" src={image3}></Card.Img></Col>
                            <Col><Card.Img className="#" src={image3}></Card.Img></Col>
                        </Row><br></br>
                        <Row>
                            <Col><Card.Img className="#" src={image3}></Card.Img></Col>
                            <Col><Card.Img className="#" src={image1}></Card.Img></Col>
                            <Col><Card.Img className="#" src={image3}></Card.Img></Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col >
            <Row>
                <Col className="mt-4 col-8 swipe" id="swipe">
                    < Deck />
                </Col>
            </Row>
            <Row >
                <a href="#endregion" className="myButton p1">
                    <i className="fab fa-gratipay fa-3x"></i>
                </a>
                <a href="#endregion" className="myButton p2">
                    <i className="far fa-times-circle fa-3x"></i>
                </a>
                <a href="#endregion" className="myButton p3">
                    <i className="fab fa-500px fa-3x"></i>
                </a>
                <a href="#endregion" className="myButton p4">
                    <i className="fab fa-affiliatetheme fa-3x"></i>
                </a>
                <br></br>
            </Row>
        </Row >
    )
}

export default Home;
