import React from 'react'
import { Row, Col, Card, Image } from 'react-bootstrap';
import "./Home.css";
import image1 from "../Landing/elang.jpg"
import Deck from '../components/Deck';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Data from './Data';

const Home = () => {
    return (
        <div className="bg-sungai font">
            <Row>
                <Col className="col-4">
                    <Card className="scroll">
                        <Card.Header className="bg cardtop">
                            <Row>
                                <Link to="/profile">
                                    <Image className="imageU rounded-circle" src={image1}></Image>
                                </Link>
                                <h3 style={{ marginTop: 20, marginLeft: 20 }} className="font">UDIN</h3>
                            </Row>
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
                        </Card.Body>
                    </Card>
                </Col >

                <Row>
                    <Col className="mt-4 col-8 swipe" id="swipe">
                        < Deck />
                    </Col>
                </Row>
                <Row>
                    <div className="dibawah">
                        <button className="ml-5">Hide</button>
                        <a href="#lllll" className="fontbawah">
                            <i className=" iconbg ml-5 fas fa-angle-double-left"> No</i>
                        </a>
                        <a href="#lllll" className="fontbawah">
                            <i className="iconbg ml-5 fas fa-angle-double-right"> Yes</i>
                        </a>
                        <a href="#lllll" className="fontbawah">
                            <i className="iconbg ml-5 fas fa-user"> Open Profile</i>
                        </a>
                        <a href="#lllll" className="fontbawah">
                            <i className="iconbg ml-5 fas fa-times-circle"> Close Profile</i>
                        </a>
                    </div>
                </Row>
                <Row>
                    <a href="#endregion" className="myButton p1">
                        <i className="far fa-times-circle fa-3x"></i>
                    </a>
                    <a href="#endregion" className="myButton p2">
                        <i className="fab fa-gratipay fa-3x"></i>
                    </a>
                    <a href="#endregion" className="myButton p3">
                        <i className="fas fa-recycle fa-3x"></i>
                    </a>
                    <a href="#endregion" className="myButton p4">
                        <i className="fas fa-bolt fa-3x"></i>
                    </a>
                </Row>
            </Row>
        </div>
    )
}

export default Home;
