import React, { useEffect, useState } from 'react';
import './Projects.css';

import Aos from 'aos'
import 'aos/dist/aos.css';

export const Projects = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
      }, []);
  return (
    <>
     <section id="work">
            
            <div class="outer">
                <div data-aos="fade-right" class="note">#projects\</div>
                <div class="inner">
                    
                    <div class="border_2_1" ></div>
                    
                    <div class="box2">
                        <h1 data-aos="fade-right" class="WorkH">Nula </h1>
                        <p data-aos="fade-up" class="WorkP">
                           
                            
                            see project <br/>
                            

                        </p>
                    </div>
                    <div class="box2">
                        <h1 data-aos="fade-right" class="WorkH">Bricool</h1>
                        <p data-aos="fade-up" href="" class="WorkP">

                            see project <br/>
                           
                        </p>
                       
                    </div>
                    <div class="box2">
                        <h1 data-aos="fade-right" class="WorkH">kacademy</h1>
                        <p data-aos="fade-up" href="" class="WorkP">

                            see project <br/>
                          

                        </p>
                        
                    </div>
                    <div class="box2">
                        <h1 data-aos="fade-right" class="WorkH">iprobooking</h1>
                        <p data-aos="fade-up" href="" class="WorkP">

                            see project <br/>

                        </p>
                       
                    </div>
                    <div class="box2">
                        <h1 data-aos="fade-right" class="WorkH">Mansa</h1>
                        <p data-aos="fade-up" href="" class="WorkP">

                            see project <br/>
                        
                        </p>
                     
                    </div>
                    <div class="border_2_2" ></div>
                </div>
                <div class="Frame3" id="work_1"></div>
                <div class="Frame3" id="work_2"></div>
                <div class="Frame3" id="work_3"></div>
                <div class="Frame3" id="work_4"></div>
            </div>
        
        </section>
    </>
    
  )
}


export default Projects