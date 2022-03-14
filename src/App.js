import React from 'react'
import Navbar from './inc/Navbar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Services from './components/pages/Services'
import Contact from './components/pages/Contact'
import Blog from './components/pages/Blog'
import './components/style.css'
import Footer from './inc/Footer'


import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className='bgMan'>
    <Navbar/>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/about' element = {<About/>}/>
        <Route path = '/services' element = {<Services/>}/>
        <Route path = '/contact' element = {<Contact/>}/>
        <Route path = '/blog' element = {<Blog/>}/>
      </Routes>
    </div>
    <Footer/>
    </Router>
  )
}

export default App
