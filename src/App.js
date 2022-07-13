import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateCalculator from './components/Calculator';
import HomePage from './components/pages/HomePage';
import QuotePage from './components/pages/QuotePage';
import Navbar from './components/NavBar';

class App extends React.PureComponent {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<CreateCalculator />} />
            <Route exact path="/Home" element={<HomePage />} />
            <Route exact path="*" element={<QuotePage />} />

          </Routes>
        </Router>

      </>

    );
  }
}

export default App;
