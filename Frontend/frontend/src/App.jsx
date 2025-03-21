import React from 'react';
import { useState } from 'react'
import Map from './components/Map';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeritageChoice from './pages/HeritageChoice';
import { Route, Routes } from 'react-router-dom'
import Rajasthan from './monumentsHeritage/RajasthanMon';
import RajasthanMon from './monumentsHeritage/RajasthanMon';
import RajasthanArt from './artsHeritage/RajasthanArts';

function App() {
  return (
    <BrowserRouter>
      <div style={{ height: '100vh', width: '100%' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HeritageChoice />} />
          <Route path="/monumentsHeritage/rajasthan" element={<RajasthanMon />} />
          <Route path="/artsHeritage/rajasthan" element={<RajasthanArt/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App


