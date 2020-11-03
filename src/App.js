import './App.css';
import './componenets/navbar'
import Navbar from './componenets/navbar';
import Converter from './componenets/Converter';
import CompanySearchData from "./componenets/CompanySearchData";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header p-4 mr-auto">
        <Navbar />
        <Converter />
      </div>
      <div>
        <CompanySearchData />
      </div>
    </div>
  );
}

export default App;
