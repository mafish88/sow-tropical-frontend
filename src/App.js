import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PlantsPage from './pages/PlantsPage';
import Nav from './components/Nav';
import PlantsCard from './components/PlantsCard';
import './App.css';

export default function App() {

  //usestate from plants page 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plants" element={<PlantsPage />} />
        <Route path="/plants/:id" element={<PlantsCard />} />
        <Route path="/login" element={<Nav />} />
      </Routes>
     
    </BrowserRouter>
    
  );
};



 






