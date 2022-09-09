import React from 'react'
import './App.css';
import Allarts from './componets/Allarts';


import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ArtsDetails from './componets/ArtsDetails';
import NewArtsForm from './componets/NewArtsForm';
import Reviews from './componets/Reviews';
import Update from './componets/Update';

function App() {
  return (
    <div>
    <Router>
    <Routes>
        <Route path="/" element={<Allarts />} />
        <Route path="/allarts" element={<Allarts />} />
        <Route path="/artsdetails/:artId" element={<ArtsDetails />} />
        <Route path="/reviews/:reviewId" element={<Reviews />} />
        <Route path="/edits/:editId" element={<Update />} />
        <Route path="/newartsform" element={<NewArtsForm />} />

    </Routes>
</Router>
    </div>
  );
}

export default App;
