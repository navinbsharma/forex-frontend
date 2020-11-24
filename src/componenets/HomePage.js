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
        <Carousel className = "carousel container" activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item interval={2000}>
                <Row>
                    <Col>
                        <img
                            className="d-block w-100"
                            src={CarouselImage1}
                            alt="First slide"
                            height="350px"
                            width="400px"
                            
                        />
                    </Col>
                    <Col className ="carousel-msg">
                        <h2 className ="heading">Find a cheaper, faster way to send money abroad.</h2>
                        <p className ="para">We’re on a mission to bring transparency to finance. We always show you upfront. No hidden fees. No bad exchange rates. No surprises.</p>
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
                            height="350px"
                            width="400px"
                        />
                    </Col>
                    <Col className ="carousel-msg">
                            <h2 className="heading">How can we help you ?</h2>
                            <p className ="para">Our is dedicated to making your life decisions a whole lot easier. We compare virtually everything! We’re 100% free and independently owned (not by a bank or an insurance company). We’re on your side!</p>
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
                    <Col className ="carousel-msg">
                        <h5 className="heading">Compare side by side to make the right choice</h5>
                            <p className ="para">
                                We help you to campare various currency and forex providers,So you can make the right choice
                            </p>                
                     </Col>
                </Row>

            </Carousel.Item>
        </Carousel>
    );
};

export default Homepage;