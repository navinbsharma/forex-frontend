import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Fade, Paper, Grid, Box, Typography, Table, TableHead, TableRow, TableCell, Button } from '@material-ui/core';
import AllChart from './AllChart';
import Axios from "axios";

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
    console.log(props)
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const { fromCurrency, toCurrency } = props.data;
    const [graphTimeData, setGraphTimeData] = useState([])
    const [graphRatesData, setGraphRatesData] = useState([]);
    console.log(fromCurrency)

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const getGraphData = (fromCurrency, toCurrency, flag) => {
        Axios.get('http://localhost:5000', { params: { from: fromCurrency, to: toCurrency, flag: flag } })
            .then(result => {
                console.log(result)
                let timestampTemp = [];
                let currencyTemp = [];
                result.data.map(row => {
                    var a = new Date(row.timestamp * 1000);
                    var hour = a.getHours();
                    timestampTemp.push(hour+":00");
                    currencyTemp.push(row.rates["INR"])
                })
                setGraphTimeData(timestampTemp);
                setGraphRatesData(currencyTemp)
            })
            .catch(error => console.log(error))
    }


    return (
        <div>
            <Button type="button" onClick={handleOpen}>
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
                <Fade in={open}>
                    <Box className={classes.paper}>
                        <Typography variant="h6" gutterBottom component="div">
                            Graphs & Chart
                            </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Paper className={classes.paper}>
                                    <Table size="small" aria-label="purchases">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Column</TableCell>
                                                <TableCell align="center">Highest 1 Week</TableCell>
                                                <TableCell align="center">Lowest 1 week</TableCell>
                                                <TableCell align="center">Highest 1 Month</TableCell>
                                                <TableCell align="center">Lowest 1 Month</TableCell>
                                            </TableRow>
                                        </TableHead>
                                    </Table>
                                </Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <AllChart timestamp={graphTimeData} rates={graphRatesData} />
                            </Grid>
                            <Grid item xs={1}>
                                <Button onClick={e => getGraphData(fromCurrency, toCurrency, 1)}> 12 Hours</Button><br />
                                <Button onClick={e => getGraphData(fromCurrency, toCurrency, 2)}> 1 Day</Button><br />
                                <Button onClick={e => getGraphData(fromCurrency, toCurrency, 3)}> 1 Week</Button><br />
                                <Button onClick={e => getGraphData(fromCurrency, toCurrency, 4)}> 1 Month</Button><br />
                            </Grid>
                        </Grid>
                    </Box>

                </Fade>
            </Modal>
        </div>
    );
}
