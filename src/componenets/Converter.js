import { Card, Button, Form, Row, Col } from 'react-bootstrap'

function Converter() {
    return (<div className="m-3 p-4">
        <Card className="currency-converter">
            <Card.Body>
                <Card.Title>FOREX AGGREGRATOR</Card.Title>
                <Form>
                    <Row>
                        <Col  xs={12} md={4}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Amount</Form.Label>
                                <Form.Control type="number" placeholder="Amount" />
                            </Form.Group>
                        </Col>
                        <Col  xs={6} md={3}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>From</Form.Label>
                                <Form.Control type="text" placeholder="Enter email" />
                            </Form.Group>
                        </Col>
                        <Col  xs={6} md={3}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>To</Form.Label>   
                                <Form.Control type="text" placeholder="Enter email" />
                            </Form.Group>
                        </Col>
                        <Col  xs={12} md={2}>
                            <Button variant="primary">Go</Button>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    </div>)

}

export default Converter;