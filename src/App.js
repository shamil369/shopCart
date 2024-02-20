import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes,Route, BrowserRouter } from "react-router-dom";
import NavbarHome from './components/NavbarHome/NavbarHome';
import Home from './pages/Home/Home';

function App() {
  
    return (
      
      <div>
        <BrowserRouter>
          <NavbarHome/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          
        </Routes>
        </BrowserRouter>
      </div>

      
    );
  }


export default App;
