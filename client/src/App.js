import React from "react";
import "./App.css"
import { Route, Routes } from "react-router-dom";
import Home from './components/Home.js'
import Stats from './components/Stats.js'
import WarmUp from './components/WarmUp.js'
import Navbar from './components/Navbar.js'
import Test from './components/Test.js'
function App() {
  return (

    <div className="App">


      <Navbar />

      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/stats' element={<Stats />} />
        <Route path='/warm-up' element={<WarmUp />} />\
        <Route path='/test' element={<Test/>} />
      </Routes>
    </div>

  );
}
export default App