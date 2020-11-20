import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Chart from 'chart.js';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import AllChart from './AllChart';

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});
const useStyles = makeStyles((theme) => ({
    root: {

        flexGrow: 1,
    },
    container: {
        maxHeight: '100%',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: "#0f3460",
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);
const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: '#f6f5f5',
        },
    },
}))(TableRow);

const columns = [
    { id: 'logo', label: 'Company Logo', minWidth: 170, align: 'center' },
    { id: 'name', label: 'Name', minWidth: 100, align: 'center', },
    {
        id: 'exchange',
        label: 'Exchange Rate',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'fee',
        label: 'Fees',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'recievedAmount',
        label: "You'll Receive",
        minWidth: 170,
        align: 'center',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'viewMore',
        label: "Graph $ Charts",
        minWidth: 170,
        align: 'center',
        format: (value) => value.toFixed(2),
    },
];

function Row(props) {
    const { row } = props;
    const classnamees = useRowStyles();
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <StyledTableRow classnameName={classnamees.root}>

                <StyledTableCell align="center" >
                    <img src={row.logo} style={{ height: 50, width: 50 }} />
                </StyledTableCell>
                <StyledTableCell align="center">{row.name}</StyledTableCell>
                <StyledTableCell align="center">{row.quotes[0].rate}</StyledTableCell>
                <StyledTableCell align="center">{row.quotes[0].fee}</StyledTableCell>
                <StyledTableCell align="center">{row.quotes[0].receivedAmount}</StyledTableCell>
                <StyledTableCell align="center">
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </StyledTableCell>
            </StyledTableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography variant="h6" gutterBottom component="div">
                                Graphs $ Chart
                            </Typography>
                            <div classnameName={classnamees.root}>
                                <Grid container spacing={3}>
                                    <Grid item xs={6}>
                                        <Paper classnameName={classnamees.paper}>
                                            <Table size="small" aria-label="purchases">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>Date</TableCell>
                                                        <TableCell>Customer</TableCell>
                                                        <TableCell align="center">Amount</TableCell>
                                                        <TableCell align="center">Total price ($)</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                            </Table>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Paper classnameName={classnamees.paper}>
                                            <AllChart />
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Paper classnameName={classnamees.paper}>xs=3</Paper>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Paper classnameName={classnamees.paper}>xs=3</Paper>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Paper classnameName={classnamees.paper}>xs=3</Paper>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Paper classnameName={classnamees.paper}>xs=3</Paper>
                                    </Grid>
                                </Grid>
                            </div>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

const Compare = (props) => {
    const amount = props.amount;
    const fromCurrency = props.fromCurrency;
    const toCurrency = props.toCurrency;
    const classnamees = useStyles();
    const [rows, setRowData] = useState([]);
    const [viewMoreFlag, setViewMoreFlag] = useState(false);

    useEffect(() => {
        fetch(`https://api.transferwise.com/v3/comparisons/?sourceCurrency=${fromCurrency}&targetCurrency=${toCurrency}&sendAmount=${amount}`)
  
            .then(res => res.json())
            .then(
                (result) => {
                    setRowData(result.providers)
                },
                (error) => {
                    console.log(error);
                }
            )
    }, [amount,fromCurrency,toCurrency]);

    return (
        <Paper classnameName={classnamees.root}>
            <TableContainer classnameName={[classnamees.container, classnamees.table].join(' ')}>
                <Table stickyHeader aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <StyledTableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }} >
                                    {column.label}
                                </StyledTableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <Row key={row.name} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
}

export default Compare;