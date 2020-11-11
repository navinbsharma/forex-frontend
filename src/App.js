import './App.css';
import './componenets/navbar'
import Navbar from './componenets/navbar';
import Converter from './componenets/Converter';
import CompanySearchData from "./componenets/CompanySearchData";
import Companies from './componenets/Companies';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <div className="header p-4 mr-auto">
        <Navbar />
        <Converter />
      </div>
      <div>
        <Companies />
         
      </div>
    </div>
  );
}

export default App;
