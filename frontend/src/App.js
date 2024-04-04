import './App.css';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Doctors from './components/Doctors';
import Departmans from './components/Departmans';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/departmans" element={<Departmans />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
