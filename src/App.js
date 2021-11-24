import React from "react";
import "./App.css"
import { Route, Routes } from "react-router-dom";
import Home from './components/Home.js'
import Stats from './components/Stats.js'
import WarmUp from './components/WarmUp.js'
import Navbar from './components/Navbar.js'
function App() {
  return (

    <div className="App">


      <Navbar />

      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/stats' element={<Stats />} />
        <Route path='warm-up' element={<WarmUp />} />
      </Routes>
    </div>

  );
}
export default App