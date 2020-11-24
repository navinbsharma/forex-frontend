import React, { Component } from 'react';
import '../App.css';
import ErrorTwoToneIcon from '@material-ui/icons/ErrorTwoTone';
import Logo from '../images/Astronaut/Astronaut-01.svg'
import { Grid } from '@material-ui/core'
import { Col, Row } from 'react-bootstrap';
export class errorPage extends Component {
    render() {
        return (
            <div className="container"  >

                <Row>
                    <Col>
                        <img src={Logo} alt="error" />
                    </Col>
                    <Col className="error-container">
                        <h1 className="error" style={{ color: "#0f3460", }}>
                            Sorry No Data Found
                     </h1>
                        <h2 className="error-msg">
                            There are thousands of banks in the world – we haven’t gotten to them all yet.
                     </h2>
                        <p className="error-txt">There are thousands of banks in the world – we haven’t gotten to them all yet.
                        Sorry – we can’t show you that comparison. It’s either because we don’t have reliable information from the provider, you searched for a route we don’t support, or the amount you entered is above the maximum quote we can collect.
                    </p>

                    </Col>
                </Row>





            </div>
        )
    }
}
export default errorPage
