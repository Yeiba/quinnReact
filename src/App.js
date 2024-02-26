import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/header/Navbar';
import Home from './components/section/Home/Home';
import Services from './components/section/Services/Services';
import Projects from './components/section/Projects/Projects';
import About from './components/section/About/About';
import Contact from './components/section/Contact/Contact';

import { Helmet } from 'react-helmet';


import 'aos/dist/aos.css';

// npm start

// npm run build

// git init

// git config --global user.name "Yeiba"

// git config --global user.email "yeibayalda@gmail.com"

function App() {

  return (

    <div className="App">
      <Helmet>
        <meta name="format-detection" content="telephone=no" />
        <meta
          name="description"
          content="Quinn Studios #BRANDING #stRATEGY #consulting #graphic_DESIGN #motion_graphic
                #marketing #digital_creation #developement #evants #organization #advertising  #film_making  #producing #products_design #3D_creation"
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
