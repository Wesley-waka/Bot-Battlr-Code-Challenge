import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import BotsDetails from './Components/BotsDetails';
import DisplayBots from './Components/DisplayBots';
// import ListBots from './Components/ListBots';




function App() {
  return (
    <div className='container'>

      <Routes>
        {/* <Route path="/" element={<Navigate to="/displayBots" />} /> */}
        <Route path="/" element={<DisplayBots />} />
        {/* <Route exact path="/bots" element={<DisplayBots />} /> */}
        <Route path="/bots/:id" element={<BotsDetails />} />
        <Route path="/displayBots" element={<DisplayBots />} />

      </Routes>
    </div>


  );
}

export default App;
