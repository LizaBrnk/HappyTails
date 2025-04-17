import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Animals from './components/pages/Animals';
import AboutUs from './components/pages/AboutUs';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/animals' Component={Animals}/>
          <Route path='/about' Component={AboutUs}/>
          <Route path='/sign-up' Component={SignUp}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
