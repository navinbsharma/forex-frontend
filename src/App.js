import './App.css';
import './componenets/navbar'
import Navbar from './componenets/navbar';
import Converter from './componenets/Converter';
import Footer from './componenets/Footer'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Compare from './componenets/Compare';
import { useState } from 'react';

function App() {
  const [fromCurrency,setFromCurrencyState]=useState('EUR');
  const [toCurrency,setToCurrencyState]=useState('INR');
  const [amount, setAmountState]=useState('100')
  return (
    <div className="App">
      <div className="header p-4 mr-auto">
        <Navbar />
        <Converter
          getfromcurrency = {(val)=>{setFromCurrencyState(val)}}
          gettocurrency = {(val)=>{setToCurrencyState(val)}}
          getamount = {(val)=>{setAmountState(val)}}
        />
      </div>
      <div>
        <Compare 
          fromCurrency = {fromCurrency}
          toCurrency = {toCurrency}
          amount ={amount}
        />    
      </div>
      <Footer/>
    </div>
  );
}

export default App;
