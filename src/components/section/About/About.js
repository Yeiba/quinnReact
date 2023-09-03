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
                <p data-aos="fade-up" data-aos-duration="3500" class="dis"><br/>Creative Graphic Designer and Motion Graphic and video editor film maker, 3D Artist modeling and sclupting, and Data analytics and machine learning by Python.</p>

                <div data-aos="fade-up" class="team">our team</div>
             
                <p data-aos="fade-up" data-aos-duration="3500" class="dis2"><br/>Companies often generalize their offering in the website copy, making it hard to understand what the customer is actually paying for. 
                    In a sentence or two, explain exactly what a potential customer will gain from your business.</p>
                
                    <div data-aos="fade-up" class="boit">what's quinn</div>
             
                    <p data-aos="fade-up" data-aos-duration="3500" class="dis3"><br/>Quinn is a gender-neutral name with Irish roots that means "wise," "sense," or "reason." It comes from the Old Irish word Ceann or Conn, meaning "head" or "chief." The last names Ó Coinn and Ó Cuinn, which mean "descending from Conn," became common in Ireland. They were anglicized to Quinn in the 17th century.</p>
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