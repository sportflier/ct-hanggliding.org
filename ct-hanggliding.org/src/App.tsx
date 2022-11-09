import React from 'react';
import './App.scss';
import { Routes, Route } from "react-router-dom";

import Home from './Pages/Home';
import Talcott from './Pages/Talcott';
import Membership from './Pages/Membership';
import Officers from './Pages/Officers';
import Calendar from './Pages/Calendar';
import Resources from './Pages/Resources';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';
import TalcottMap from './Pages/TalcottMap';
import TalcottWeather from './Pages/TalcottWeather';

import ReactGA from 'react-ga4'

ReactGA.initialize("G-VPYRSKV9XB");


function App() {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/talcott" element={<Talcott />} />
      <Route path="/map" element={<TalcottMap />} />
      <Route path="/weather" element={<TalcottWeather />} />
      <Route path="/join" element={<Membership />} />  
      <Route path="/officers" element={<Officers />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

  );
}

export default App;
