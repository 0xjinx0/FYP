import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import Charities from './components/pages/Charities';
import Edu from './components/pages/Edu';

function App() {
  return ( 
    <>
      <Router>
        <Navbar />  
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about-us" element={<AboutUs />} />
          <Route exact path="/charities" element={<Charities />} />
          <Route exact path="/edu" element={<Edu />} />

        </Routes>
      </Router>
      
    </>
    
  );
}

export default App;
