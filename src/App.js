import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import NavbarHome from './components/NavbarHome/NavbarHome';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Cart from './pages/Cart/Cart';
import Favourite from './pages/Favourite/Favourite';

function App() {
  
    return (
      
      <div>
        <BrowserRouter>
          <NavbarHome/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/signin" element={<SignIn/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/productDetail/:id" element={<ProductDetail/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/favourite" element={<Favourite/>}></Route>
        </Routes>
        </BrowserRouter>
      </div>

      
    );
  }


export default App;
