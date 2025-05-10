import React from 'react';
import './assetss/css/App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';


function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
