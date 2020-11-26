import React from 'react';
import { Modal, Backdrop, Fade, Box, Typography, makeStyles, withStyles, Container } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/VerticalSplit';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AllChart from '../componenets/AllChart';
import { FeedbackSharp } from '@material-ui/icons';
import { Button, Col, Row } from 'react-bootstrap';
import ExchangeChart from '../componenets/Chart/ExchangeChart'
import FeesChart from '../componenets/Chart/FeesChart';
import RecievedChart from '../componenets/Chart/RecievedAmount';
import MarkupChart from '../componenets/Chart/MarkupChart'


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow:'scroll',
        position:'absolute',
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

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const ModalForSelectedData = (props) => {
    const classes = useStyles();
    const rows = props.rows;
    const [open, setOpen] = React.useState(false);
    const [label, setLabel] = React.useState([]);
    const [exchange, setExchange] = React.useState([]);
    const [fee, setFee] = React.useState([]);
    const [recieveRate, setRecieveRates] = React.useState([]);
    const [markUp, setMarkUp] = React.useState([]);



    const handleOpen = () => {
        console.log(rows)
        xchange();
        name();
        recievedRate();
        fees();
        markups();
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const fees = () => {
        let feesRate = [];
        rows.map(row => feesRate.push(row.fee));
        setFee(feesRate);
    }
    const recievedRate = () => {
        let recieved = [];
        rows.map(row => recieved.push(row.receivedAmount));
        setRecieveRates(recieved);
    }

    const xchange = () => {
        let exchangeRate = [];
        rows.map(row => exchangeRate.push(row.exchange));
        setExchange(exchangeRate);
    }

    const name = () => {
        let labelName = [];
        rows.map(row => labelName.push(row.name))
        setLabel(labelName);
    }

    const markups = () => {
        let markUpAm = [];
        rows.map(row => markUpAm.push(row.markup))
        setMarkUp(markUpAm);
    }

    return (
        <div>
            <DeleteIcon type="button" onClick={handleOpen} />
            <Modal
                className={classes.modal}
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open} >
                    <Box className={classes.paper}>
                        <Typography >
                            Comparision
                        </Typography>
                        <Container>
                            <Row>
                                <Col sm={12} lg={6}>
                                    <ExchangeChart label={label} data={exchange} type="bar" />
                                    <Typography>
                                        Exchange Rate Graph
                                </Typography>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <FeesChart label={label} data={fee} type="bar" />
                                    <Typography>
                                        Fees Graph
                                </Typography>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <RecievedChart label={label} data={recieveRate} type="bar" />
                                    <Typography>
                                        Recieving Amount
                                </Typography>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <MarkupChart label={label} data={markUp} type="bar" />
                                    <Typography>
                                        Markup Fees
                                </Typography>
                                </Col>
                                
                            </Row>
                        </Container>
                    </Box>

                </Fade>
            </Modal>
        </div>);
}
export default ModalForSelectedData;

