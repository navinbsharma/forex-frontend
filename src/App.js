
import './componenets/navbar'
import Navbar from './componenets/navbar';
import Converter from './componenets/Converter';
import Footer from './componenets/Footer'
import './App.css';
import HomePage from './componenets/HomePage';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Compare from './componenets/Compare';
import { useState } from 'react';
import Logo from './images/images.jpg'

const App = () => {
  const [fromCurrency, setFromCurrencyState] = useState('');
  const [toCurrency, setToCurrencyState] = useState('');
  const [amount, setAmountState] = useState('')
  return (
    <div className="App">
      <div className="header p-4 mr-auto">
        <Navbar />
        <Converter
          getfromcurrency={(val) => { setFromCurrencyState(val) }}
          gettocurrency={(val) => { setToCurrencyState(val) }}
          getamount={(val) => { setAmountState(val) }}
          />
      </div>
          { amount === '' && <HomePage /> }
      <div>
        <Compare
          fromCurrency={fromCurrency}
          toCurrency={toCurrency}
          amount={amount}
        />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
