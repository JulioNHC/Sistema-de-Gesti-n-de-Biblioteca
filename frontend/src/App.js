import React from 'react';
import './assetss/css/App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Dashboard from './components/dashboard';
import Editar from './components/editar'
import Nuevo from './components/nuevo';

function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/editar" element={<Editar />} />
        <Route path="/nuevo" element={<Nuevo />} />
      </Routes>
    </Router>
  );
}

export default App;
