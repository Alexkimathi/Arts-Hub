import React from 'react'
import './App.css';
import Allarts from './componets/Allarts';


import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
    <Router>
    <Routes>
        <Route path="/" element={<Allarts />} />
        <Route path="/allarts" element={<Allarts />} />

    </Routes>
</Router>
    </div>
  );
}

export default App;
