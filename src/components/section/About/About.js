import React, { useEffect, useState } from 'react';
import './About.css';

import Aos from 'aos'
import 'aos/dist/aos.css';

export const About = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);
  return (
    <>
      <section id="about">
            <div data-aos="fade-right" class="note2">#About_us\</div>
            <div class="aboutcontant" >
               
                <div data-aos="fade-up" class="name">yaakoub belhardi</div>
                <div data-aos="fade-up" class="position">CEO,Founder </div>
                <p data-aos="fade-up" data-aos-duration="3500" class="dis"><br/>Graphic Designer and developer from Algeria. Creative, independent and detail-oriented graphic designer with seven years of experience in digital brand management.</p>

                <div data-aos="fade-up" class="team">our team</div>
             
                <p data-aos="fade-up" data-aos-duration="3500" class="dis2"><br/>Nomade creatives around the world, we welcoming you to join us if you're a creative artist.</p>
                
                    <div data-aos="fade-up" class="boit">what's quinn</div>
             
                    <p data-aos="fade-up" data-aos-duration="3500" class="dis3"><br/>Quinn is a gender-neutral name with Irish roots that means "wise," "sense," or "reason." It comes from the Old Irish word Ceann or Conn.</p>
            </div>
            <div class="Background">
                <div class="Frame2" id="home_1"></div>
                <div class="Frame2" id="home_2"></div>
                <div class="Frame2" id="home_3"></div>
                <div class="Frame2" id="home_4"></div>
                <div class="Frame2" id="home_5"></div>
                <div class="Frame2" id="home_6"></div>
                <div class="Frame2" id="home_7"></div>
                <div class="Frame2" id="home_8"></div>
                <div class="Frame2" id="home_9"></div>
            </div>
          
        </section>
    </>
    
  )
}


export default About