import React from 'react';
import './App.scss';
import { Routes, Route, Link } from "react-router-dom";

import Home from './Pages/Home';
import Talcott from './Pages/Talcott';
import Membership from './Pages/Membership';
import Calendar from './Pages/Calendar';
import Resources from './Pages/Resources';
import Contact from './Pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/talcott" element={<Talcott />} />

      <Route path="/membership" element={<Membership />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/contact" element={<Contact />} />

    </Routes>

  );
}

export default App;
