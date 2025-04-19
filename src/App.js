import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import HelpAnimals from './components/pages/HelpAnimals';
import AboutUs from './components/pages/AboutUs';
import SignUp from './components/pages/SignUp';
import AdoptionForm from './components/pages/AdoptionForm';
import DonationForm from './components/pages/DonationForm';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/help-animals' Component={HelpAnimals}/>
          <Route path='/about' Component={AboutUs}/>
          <Route path='/sign-up' Component={SignUp}/>
          <Route path="/adopt" element={<AdoptionForm />} />
          <Route path="/donate" element={<DonationForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
