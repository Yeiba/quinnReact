import React, {useEffect} from 'react'
import './Home.css';

import Aos from 'aos'
import 'aos/dist/aos.css';
export const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000});
  }, []);
  return (
    <>
     <section class="home" id="home">
            <div class="contant" >
        
                <div data-aos="fade-right" class="homeTitele">we create all<br/> @wow's<br/>#DESIGN_IDEAS\</div>
                
                <p data-aos="fade-up" data-aos-duration="2800" class="homeP">NO NEED TO SPEND more hours ON JUST<br/> searching FOR creative agency.<br/> our agency create beitching ideas.</p>
     
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


export default Home