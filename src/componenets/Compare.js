import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles, lighten } from '@material-ui/core/styles';
import clsx from 'clsx';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import ErrorPage from './ErrorPage';
import HomePage from './HomePage';
import { apiUrls } from '../services/apiURLS';
import { getAjaxCall } from '../services/AjaxCall';
import { TableCell, Tooltip, Checkbox, TableSortLabel, Toolbar, Paper, IconButton, Table, TableBody, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import TransitionsModal from "./ModalDetails";

const useRowStyles = makeStyles({
    root: {
        width: '100%',
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
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
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

const descendingComparator = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

const getComparator = (order, orderBy) => {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

const stableSort = (array, comparator) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const columns = [
    { id: 'logo', label: 'Company Logo', minWidth: 170, align: 'center' },
    { id: 'name', label: 'Name', minWidth: 100, align: 'center', },
    { id: 'exchange', label: 'Exchange Rate', minWidth: 170, align: 'center', format: (value) => value.toFixed(2) },
    { id: 'fee', label: 'Fees', minWidth: 170, align: 'center', format: (value) => value.toFixed(2) },
    { id: 'receivedAmount', label: "You'll Receive", minWidth: 170, align: 'center', format: (value) => value.toFixed(2) },
    { id: 'viewMore', label: "Graph & Charts", minWidth: 170, align: 'center' },
];

const EnhancedTableHead = (props) => {
    const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <StyledTableCell padding="checkbox">
                    <Checkbox
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{ 'aria-label': 'select all desserts' }}
                    />
                </StyledTableCell>
                {columns.map((headCell) => (
                    <StyledTableCell
                        key={headCell.id}
                        align='center'
                        padding={headCell.disablePadding ? 'none' : 'default'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <span className={classes.visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </span>
                            ) : null}
                        </TableSortLabel>
                    </StyledTableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
    },
    highlight:
        theme.palette.type === 'light'
            ? {
                color: theme.palette.secondary.main,
                backgroundColor: lighten(theme.palette.secondary.light, 0.85),
            }
            : {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.dark,
            },
    title: {
        flex: '1 1 100%',
    },
}));

const EnhancedTableToolbar = (props) => {
    const classes = useToolbarStyles();
    const { numSelected } = props;

    return (
        <Toolbar
            className={clsx(classes.root, {
                [classes.highlight]: numSelected > 0,
            })}
        >
            {numSelected > 0 ? (
                <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
                    {numSelected} selected
                </Typography>
            ) : (
                    <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
                        Nutrition
                    </Typography>
                )}

            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                    <Tooltip title="Filter list">
                        <IconButton aria-label="filter list">
                            <FilterListIcon />
                        </IconButton>
                    </Tooltip>
                )}
        </Toolbar>
    );
};

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

const Row = (props) => {
    const { amount, fromCurrency, toCurrency } = props;
    console.log(amount + " " + fromCurrency + "  " + toCurrency)
    const { row } = props;
    const { index } = props;
    const classes = useRowStyles();
    const [selected, setSelected] = React.useState([]);

    const handleClick = (event, name) => {
        console.log(name)
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };
    const isSelected = (name) => selected.indexOf(name) !== -1;
    const isItemSelected = isSelected(row.name);
    const labelId = `enhanced-table-checkbox-${index}`;

    return (
        <React.Fragment>
            <StyledTableRow
                className={classes.root}
                hov er
                onClick={(event) => handleClick(event, row.name)}
                role="checkbox"
                aria-checked={isItemSelected}
                tabIndex={-1}
                key={row.name}
                selected={isItemSelected}>
                <StyledTableCell padding="checkbox">
                    <Checkbox
                        checked={isItemSelected}
                        inputProps={{ 'aria-labelledby': labelId }}
                    />
                </StyledTableCell>
                <StyledTableCell align="center" >
                    <img src={row.logo} alt={row.name} style={{ height: 60, width: 100 }} />
                </StyledTableCell>
                <StyledTableCell align="center">{row.name}</StyledTableCell>
                <StyledTableCell align="center">{row.exchange}</StyledTableCell>
                <StyledTableCell align="center">{row.fee}</StyledTableCell>
                <StyledTableCell align="center">{row.receivedAmount}</StyledTableCell>
                <StyledTableCell align="center">
                    <TransitionsModal data={props}/>
                </StyledTableCell>
            </StyledTableRow>
        </React.Fragment>
    );
}

const ErrorView = () => {
    return (<div>
        <ErrorPage />
    </div>)
}

const HomeView = () => {
    return (<div>
        <HomePage />
    </div>)
}

const TableView = (props) => {
    const { amount, fromCurrency, toCurrency } = props;
    const classes = useStyles();
    const rows = props.rows;
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('name');
    const [selected, setSelected] = React.useState([]);

    const handleRequestSort = (event, property) => {
        console.log(property);
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.name);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <TableContainer className={[classes.container, classes.table].join(' ')}>
                    <Table stickyHeader aria-label="collapsible table" aria-labelledby="tableTitle" aria-label="enhanced table">
                        <EnhancedTableHead
                            classes={classes}
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />

                        <TableBody>
                            {
                                stableSort(rows, getComparator(order, orderBy))
                                    .map((row, index) => {
                                        console.log(row)
                                        return <Row key={row.name} row={row} index={index} amount={amount} fromCurrency={fromCurrency} toCurrency={toCurrency} />
                                    })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    )
}

const Compare = (props) => {
    const { amount, fromCurrency, toCurrency } = props;
    const [rows, setRowData] = useState([]);
    console.log(fromCurrency+" "+ toCurrency)

    const [resultFetch, setResultFetch] = useState(false);
    useEffect(() => {
        if (amount > 0) {
            let apiAuth = apiUrls.compareCommany;
            const reqBody = {
                sourceCurrency: fromCurrency,
                targetCurrency: toCurrency,
                sendAmount: amount
            }
            getAjaxCall(apiAuth, reqBody, callback => {
                console.log(callback.data)
                if (Object.keys(callback.data).length !== 0) {
                    if ("errors" in callback.data) {
                        setResultFetch(false);
                    }
                    else if (callback.data.providers.length == 0) {
                        setResultFetch(false);
                    } else {
                        console.clear();
                        console.log(callback.data);
                        setResultFetch(true);
                        const temp = [];
                        temp.push(callback.data.providers.map(row => {
                            return {
                                'logo': row.logo,
                                'name': row.name,
                                'exchange': row.quotes[0].rate,
                                'fee': row.quotes[0].fee,
                                'receivedAmount': row.quotes[0].receivedAmount,
                            }
                        }));
                        setRowData(temp[0])
                    }
                } else {
                    // setResultFetch(false);
                }
            });
        }
    }, [amount, toCurrency, fromCurrency]);

    return (
        resultFetch ? <TableView data={props} rows={rows} fromCurrency={fromCurrency} toCurrency={toCurrency} amount={amount} /> : amount === '' ?  <> </> :<ErrorView />
    )
}
export default Compare;