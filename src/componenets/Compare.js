import React, { useState, useEffect } from 'react';
const { Row, Col, Button } = require("react-bootstrap")




const Compare = () => {
    const [rowData, setRowData] = useState([]);
    const [viewMoreFlag, setViewMoreFlag] = useState(false)

    useEffect(() => {
        fetch("https://api.transferwise.com/v3/comparisons/?sourceCurrency=EUR&targetCurrency=INR&sendAmount=1000")
            .then(res => res.json())
            .then(
                (result) => {
                    setRowData(result.providers)
                },
                (error) => {
                    console.log(error);
                }
            )
    }, []);

    const Expand = (props) => {
        return (<div>
            Hello
        </div>)
    }
    const viewMore = (props) => {
        console.log('Clicked')
        setViewMoreFlag(true);
    }
    const ChartView = () => {
        return (<div>
            Hello World why
        </div>)
    }

    const ResultBox = (props) => {
        return (<div className="container convert-result-box">
            <Row>
                <Col>
                    <img src={props.data.logo} />
                </Col>
                <Col>
                    {props.data.name}
                </Col>
                <Col>
                    {props.data.quotes[0].rate}
                </Col>
                <Col>
                    {props.data.quotes[0].fee} EUR
                </Col>
                <Col>
                    {props.data.quotes[0].receivedAmount}
                </Col>
                <Col>
                    <Button onClick={viewMore}>view more</Button>
                </Col>
            </Row>
            {viewMoreFlag ? <ChartView /> : ''}
            <hr></hr>

        </div>
        )
    }
    

    return (<div>
        <div className="container">
            <Row className="header-line">
                <Col>
                    Logo
                </Col>
                <Col>
                    Name
                </Col>
                <Col>
                    Exchange Rates
                </Col>
                <Col>
                    Transfer Fees
                </Col>
                <Col>
                    Recieved Amount
                </Col>

            </Row>

        </div>
        {rowData.length == 0 ? <div>No Result Found</div> : rowData.map(x => <ResultBox data={x} />)}


    </div>)
}

export default Compare;