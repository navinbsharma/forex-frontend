import React, { useState, useEffect } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';


const Companies = () => {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);

  const [rowData, setRowData] = useState([]);

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
  }, [])
  

  return (
    <div className="ag-theme-alpine-dark" style={{ height: 400, width: 1000 }}>
      <AgGridReact
        rowData={rowData}>
        <AgGridColumn field="recievedTime" sortable={true} filter={true} ></AgGridColumn>
        <AgGridColumn field="name" sortable={true} filter={true} ></AgGridColumn>
        <AgGridColumn field="exchangeRate" sortable={true} filter={true} ></AgGridColumn>
        <AgGridColumn field="transferRate" sortable={true} filter={true} ></AgGridColumn>
        <AgGridColumn field="transferFee" sortable={true} filter={true} ></AgGridColumn>
        <AgGridColumn field="priceRecieve" sortable={true} filter={true} ></AgGridColumn>
      </AgGridReact>
    </div>
  );
};

export default Companies;