import React from 'react'
import './App.css';
import Allarts from './componets/Allarts';


import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ArtsDetails from './componets/ArtsDetails';

function App() {
  return (
    <div>
    <Router>
    <Routes>
        <Route path="/" element={<Allarts />} />
        <Route path="/allarts" element={<Allarts />} />
        <Route path="/artsdetails/:artId" element={<ArtsDetails />} />

    </Routes>
</Router>
    </div>
  );
}

export default App;
