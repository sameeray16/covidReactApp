import { useState } from 'react'
import './App.css'
import {Route,Routes} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar'

import Auth from './pages/LoginSignup/auth';
import HomePage from './pages/Home/Home';
import Book from './pages/Book/Book';
import Location from './pages/Location/Location';
import View from './pages/View/View';

import Footer from './components/Footer/Footer';



function App() {
  
  return (
    <>
      <NavBar/>

      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/book" element={<Book/>}/>
          <Route path="/location" element={<Location/>}/>
          <Route path="/login" element={<Auth/>}/>
          <Route path="/view" element={<View/>}/>
        </Routes>
      </div>

      <Footer/>
    </>
  )
}

export default App
