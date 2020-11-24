import Carousel from 'react-bootstrap/Carousel'
import React, { useState } from 'react';
import CarouselImage1 from '../images/undraw_Data_re_80ws.svg'
import CarouselImage2 from '../images/undraw_Analytics_re_dkf8.svg'
import CarouselImage3 from '../images/undraw_personal_finance_tqcd.svg'
import { Row, Col } from 'react-bootstrap'

function Homepage() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item interval={2000}>
                <Row>
                    <Col>
                        <img
                            className="d-block w-100"
                            src={CarouselImage1}
                            alt="First slide"
                            height="300px"
                            width="400px"
                        />
                    </Col>
                    <Col>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Col>
                </Row>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <Row>
                    <Col>
                        <img
                            className="d-block w-100"
                            src={CarouselImage2}
                            alt="Second slide"
                            height="300px"
                            width="400px"
                        />
                    </Col>
                    <Col>
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>

                    </Col>

                </Row>

            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <Row>
                    <Col>
                        <img
                            className="d-block w-100"
                            src={CarouselImage3}
                            alt="Third slide"
                            height="300px"
                            width="400px"
                        />
                    </Col>
                    <Col>
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>

                    </Col>
                </Row>

            </Carousel.Item>
        </Carousel>
    );
};

export default Homepage;