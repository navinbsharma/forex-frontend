import './App.css';
import './componenets/navbar'
import Navbar from './componenets/navbar';
import Converter from './componenets/Converter';
import CompanySearchData from "./componenets/CompanySearchData";
import Companies from './componenets/Companies';
import Footer from './componenets/Footer'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Compare from './componenets/Compare';

function App() {
  return (
    <div className="App">
      <div className="header p-4 mr-auto">
        <Navbar />
        <Converter />
      </div>
      <div>
        <Compare />    
      </div>
      <Footer/>
    </div>
  );
}

export default App;
