import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/header/Navbar';
import Home from './components/section/Home/Home';
import Services from './components/section/Services/Services';
import Projects from './components/section/Projects/Projects';
import About from './components/section/About/About';
import Contact from './components/section/Contact/Contact';

import { Helmet } from 'react-helmet';

import Aos from 'aos'
import 'aos/dist/aos.css';

// git init

// git config --global user.name "Yeiba"

// git config --global user.email "yeibayalda@gmail.com"




function App() {
  useEffect(() => {
    Aos.init({ 
      disable: function() {
        var maxWidth = 1025;
        return window.innerWidth < maxWidth;
    }
    ,duration: 2000
     });
  }, []);
      return (
          
          <div className="App">
            <Helmet>
              <meta name="format-detection" content="telephone=no" />
              <meta
                name="description"
                content="Quinn Studios, Graphic design creation and web developemnt, 3D art, Filmmaking"
              />
            </Helmet>
            <Navbar /> 
            <Home /> 
            <Services /> 
            <Projects /> 
            <About /> 
            <Contact /> 
          </div>
        
      );
    
}

export default App;
