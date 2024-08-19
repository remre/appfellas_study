import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MyFlights from './pages/MyFlights/MyFlights';
import HomePage from './pages/HomePage/HomePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/myflights" element={<MyFlights />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
