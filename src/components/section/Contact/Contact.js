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
            <div data-aos="fade-right" class="note2">#contact_us\</div>
            <div class="contactcontant" >
                <div data-aos="fade-up" class="info">yaakoub belhardi<br/>
                    CEO, founder <br/>
                    yaakoubbelhardi@gamil.com<br/>
                    bir mourad raïs, ALGIERS<br/>
                    (+213) 662 58 59 81 
                </div>
                <div data-aos="fade-up" class="info2">KAssia kaci<br/>
                    sales & marketing manager <br/>
                    kassiakaci06@gmail.com <br/>
                    TIZI OUZOU, ALGERIA<br/>
                    (+213) 676 38 46 49 
                    
                </div>
                <div data-aos="fade-up" data-aos-duration="3500" class="SM">
                    <br/>facebook.com/quinn.dsgn/
                    <br/>instagram.com/quinn.dsgn/
                    <br/>linkedin.com/company/quinnadsagency/
                    <br/>www.behance.net/quinndsgn/
                    
                </div>
                <div  class="foter">
                • Privacy & Terms •   <br/> 
                <br/> 
                <br/> 
                • Copyright © 2023 Quinn Studio Algiers •<br/>  
                • all right reserved •<br/>  
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