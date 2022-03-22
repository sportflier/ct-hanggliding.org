import React from 'react';
import './App.scss';
import { Routes, Route, Link } from "react-router-dom";

import Home from './Pages/Home';
import Talcott from './Pages/Talcott';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="talcott" element={<Talcott />} />
    </Routes>

  );
}

export default App;
