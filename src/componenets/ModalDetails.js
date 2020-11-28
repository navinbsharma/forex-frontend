import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Fade, Paper, Grid, Box, Typography, Table, TableHead, TableRow, TableCell, Button, TableBody } from '@material-ui/core';
import AllChart from './AllChart';
import Axios from "axios";
import { Col, Container, Row } from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    root: {
        backgroundColor: '#e7e7de',
        border: '10px'
    }
}));


export default function TransitionsModal(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const { fromCurrency, toCurrency } = props.data;
    const [graphTimeData, setGraphTimeData] = useState([])
    const [graphRatesData, setGraphRatesData] = useState([]);
    const [graphType, setGraphType] = useState('line');
    const [oneday, setOneDay] = useState([]);
    const [twelve, setTwelve] = useState([]);
    const [onemonth, setMonth] = useState([]);
    const [oneweek, setWeek] = useState([]);



    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        Axios.get('http://localhost:5000', { params: { from: fromCurrency, to: toCurrency } })
            .then(result => {
                setOneDay(result["data"]["oneDay"]);
                setMonth(result["data"]["oneMonth"]);
                setWeek(result["data"]["oneWeek"]);
                setTwelve(result["data"]["twelve"]);
            })
            .catch(error => error)


    }, [])

    const getGraphData = (fromCurrency, toCurrency, flag) => {
        Axios.get('http://localhost:5000/graphData', { params: { from: fromCurrency, to: toCurrency, flag: flag } })
            .then(result => {
                let timestampTemp = [];
                let currencyTemp = [];
                result.data.map(row => {
                    var a = new Date(row.timestamp * 1000);
                    var hour = a.getHours();
                    timestampTemp.push(hour + ":00");
                    currencyTemp.push(row.rates["INR"])
                })
                setGraphTimeData(timestampTemp);
                setGraphRatesData(currencyTemp)
            })
            .catch(error => error)
    }


    return (
        <div>
            <Button className="button" type="button" onClick={handleOpen}>
                View More
                </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open} >
                    <Box className={classes.paper} >
                        <Typography variant="h6" gutterBottom component="div" className="model-heading">
                            Graphs & Chart
                                </Typography>
                        <Container>
                            <Row>
                                <Col sm={12} lg={5}>
                                    <Paper className={classes.paper}>
                                        <Table size="small" ar ia-label="purchases" >
                                            <TableHead>
                                                <TableRow className="model-table">
                                                    <TableCell className="model-table">Column</TableCell>
                                                    <TableCell align="center" className="model-table">12 Hour</TableCell>
                                                    <TableCell align="center" className="model-table">1 Day</TableCell>
                                                    <TableCell align="center" className="model-table">1 Week</TableCell>
                                                    <TableCell align="center" className="model-table">1 Month</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell>
                                                        Min
                                                </TableCell>
                                                    <TableCell>
                                                        {twelve.min.toFixed(2)}
                                                    </TableCell>
                                                    <TableCell>
                                                        {oneday.min.toFixed(2)}
                                                    </TableCell>
                                                    <TableCell>
                                                        {oneweek.min.toFixed(2)}
                                                    </TableCell>
                                                    <TableCell>
                                                        {onemonth.min.toFixed(2)}
                                                    </TableCell>

                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>
                                                        Max
                                                </TableCell>
                                                    <TableCell>
                                                        {twelve.max.toFixed(2)}
                                                    </TableCell>
                                                    <TableCell>
                                                        {oneday.max.toFixed(2)}
                                                    </TableCell>
                                                    <TableCell>
                                                        {oneweek.max.toFixed(2)}
                                                    </TableCell>
                                                    <TableCell>
                                                        {onemonth.max.toFixed(2)}
                                                    </TableCell>

                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>
                                                        Avg
                                                </TableCell>
                                                    <TableCell>
                                                        {twelve.avg.toFixed(2)}
                                                    </TableCell>
                                                    <TableCell>
                                                        {oneday.avg.toFixed(2)}
                                                    </TableCell>
                                                    <TableCell>
                                                        {oneweek.avg.toFixed(2)}
                                                    </TableCell>
                                                    <TableCell>
                                                        {onemonth.avg.toFixed(2)}
                                                    </TableCell>

                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </Paper>
                                </Col>
                                <Col sm={10} lg={5}>
                                    <AllChart label={graphTimeData} data={graphRatesData} type={graphType} width="400" heigth="400"/>
                                </Col>
                                <Col sm={2} lg={2}>
                                    <Button className="button" variant="primary" color="primary" onClick={e => getGraphData(fromCurrency, toCurrency, 1)}> 12 Hours</Button><br />
                                    <Button className="button" variant="primary" color="primary" onClick={e => getGraphData(fromCurrency, toCurrency, 2)}> 1 Day</Button><br />
                                    <Button className="button" variant="primary" color="primary" onClick={e => getGraphData(fromCurrency, toCurrency, 3)}> 1 Week</Button><br />
                                    <Button className="button" variant="primary" color="primary" onClick={e => getGraphData(fromCurrency, toCurrency, 4)}> 1 Month</Button><br />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button onClick={() => setGraphType('line')}>LINE</Button>
                                    <Button onClick={() => setGraphType('bar')}>BAR</Button>
                                    <Button onClick={() => setGraphType('pie')}>PIE</Button>


                                </Col>

                            </Row>
                        </Container>
                    </Box>

                </Fade>
            </Modal>
        </div>
    );
}