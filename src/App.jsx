import { useState } from 'react'
import './App.css'
import Navbar from './navbar/navbar'
import Footer from './Footer/Footer'
import Home from './Home/Home'
import About from './About/About'
import Skills from './Skills/Skills'
import Projects from './Projects/Project'
import Contact from './Contact/Contact'

function App() {
  
  return (
    <>
    <div>
    <Navbar />
    <Home />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    
    </div>
    </>
  )
}

export default App
