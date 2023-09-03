import React, { useEffect, useState } from 'react';
import './Contact.css';

import Aos from 'aos'
import 'aos/dist/aos.css';


export const Contact = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
      }, []);
  return (
    <>
     <section id="contact">
            <div data-aos="fade-right" class="note2">#contact\</div>
            <div class="contactcontant" >
               
                <div data-aos="fade-up" class="info">jacob@quinn.com<br/>
                    yaakoubbelhardi@gamil.com<br/>
                    said hamdine, bir mourad raïs, ALGER<br/>
                    (+213) 558 64 84 73
                    
                </div>
                <div data-aos="fade-up" data-aos-duration="3500" class="SM">

                    <br/>facebook.com/quinn.dsgn/
                    <br/>instagram.com/quinn.dsgn/
                    <br/>linkedin.com/company/quinnadsagency/
                    <br/>www.behance.net/quinndsgn/
                    
                </div>
                <div data-aos="fade-right"  class="foter">
                    created by yaakoub belhardi 2023<br/>  
                    all rights reserved<br/>  
                    ////////////////////////////////////////////////////////////////////////<br/>  
                </div>
            </div>
            <div class="Background">
                <div class="Frame1" id="home_1"></div>
                <div class="Frame1" id="home_2"></div>
                <div class="Frame1" id="home_3"></div>
                <div class="Frame1" id="home_4"></div>
                <div class="Frame1" id="home_5"></div>
                <div class="Frame1" id="home_6"></div>
                <div class="Frame1" id="home_7"></div>
                <div class="Frame1" id="home_8"></div>
                <div class="Frame1" id="home_9"></div>
            </div>
          
        </section>
    </>
    
  )
}


export default Contact