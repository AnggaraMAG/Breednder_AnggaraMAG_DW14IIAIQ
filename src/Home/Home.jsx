import React from 'react'
import { Row, Col, Card, Image, Button } from 'react-bootstrap';
import "./Home.css";
import image1 from "../Landing/elang.jpg"
import Deck from '../components/Deck';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Data from './Data';

const Home = () => {
    return (
        <Row className="bg-sungai font">
            <Col className="col-4">
                <Card className="scroll">
                    <Card.Header className="bg cardtop">
                        <Row>
                            <Link to="/profile">
                                <Image className="imageU rounded-circle" src={image1}></Image>
                            </Link>
                            <h3 style={{ marginTop: 20, marginLeft: 20 }} className="font">UDIN</h3>
                        </Row>
                        {/* <div className="mt-3">
                            <Link to="/profile">
                                <Button variant="outline-light">Profile</Button>
                            </Link>

                        </div> */}
                    </Card.Header>
                    <Card.Title className="ml-2 text-center mt-2">
                        <i className="font"><u>Match.</u></i> <hr />
                    </Card.Title>
                    <Card.Body style={{ 'maxHeight': '800px', 'overflowY': 'none' }} >
                        <div>
                            <Row >
                                {Data.map((postData) => {
                                    return (
                                        <Col xs="4">
                                            <Card.Img src={postData.pics}></Card.Img>
                                            <p className="text-center">{postData.name}</p>
                                        </Col>
                                    )
                                })}
                            </Row>
                        </div>
                        {/* <Row className="scroll">
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
                        </Row> */}
                    </Card.Body>
                </Card>
            </Col >
            <Row>
                <Col className="mt-4 col-8 swipe" id="swipe">
                    < Deck />
                </Col>
            </Row>
            <Row style={{ marginLeft: 400, marginTop: 1000 }}>
                <a href="#endregion" className="myButton p1">
                    <i className="far fa-times-circle fa-3x"></i>

                </a>
                <a href="#endregion" className="myButton p2">
                    <i className="fab fa-gratipay fa-3x"></i>
                </a>
                <a href="#endregion" className="myButton p3">
                    {/* <i className="fab fa-500px fa-3x"></i> */}
                    <i className="fas fa-recycle fa-3x"></i>
                </a>
                <a href="#endregion" className="myButton p4">
                    {/* <i className="fab fa-affiliatetheme fa-3x"></i> */}
                    <i className="fas fa-bolt fa-3x"></i>
                </a>
            </Row>
            <Row style={{ marginLeft: 700, marginTop: 1000 }}>
                <a href="#endregion" className="myButton p1">
                    <i className="far fa-times-circle fa-3x"></i>

                </a>
                <a href="#endregion" className="myButton p2">
                    <i className="fab fa-gratipay fa-3x"></i>
                </a>
                <a href="#endregion" className="myButton p3">
                    {/* <i className="fab fa-500px fa-3x"></i> */}
                    <i className="fas fa-recycle fa-3x"></i>
                </a>
                <a href="#endregion" className="myButton p4">
                    {/* <i className="fab fa-affiliatetheme fa-3x"></i> */}
                    <i className="fas fa-bolt fa-3x"></i>
                </a>
            </Row>
        </Row>
    )
}

export default Home;
