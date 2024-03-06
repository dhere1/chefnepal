import React,{useEffect} from "react";
import "./about.css";

import chef from "./public/chef.png"
import AOS from "aos";
import "aos/dist/aos.css";


function About(){
    useEffect(()=>{
        AOS.init({duration:500});
    });
return(
    <div id="about"className="about_main_container"  >
    <div className="fst_inner_container_about"  >
    <div className="about_content" > 
        <h2 data-aos="fade-up"><span>Encouraging to exhibit</span> aspiring 
            cooks their <span>hidden talent</span> </h2>
            <p data-aos="fade-up"><span>Learn, grow and evolve</span> into skilled chef. We provide platform where you can showcase your cooking talent and passion.<span> Emerging cooks all around Nepal and overseas </span>will be able to come up with their unique recipe. We are searching for people who are proficient to <span>transform ingredients into an edible piece of art</span> pleasing to the eye and appetizing 
            to one's palate.</p>
            <button data-aos="fade-up">Register</button>
    </div>
    <div className="about_pic">
    <img src={chef} data-aos="fade-left"/>
    </div>
    </div>
    <div className="snd_inner_container">
        <h4>Say Hello to <span>Priyanka Karki !</span></h4>
        <p>Our celebrity judge and executive producer Mrs. Priyanka Karki announcing the idea of The Chef Nepal.</p>
        <p><span>WATCH, PARTICIPATE AND SUPPORT.</span></p>
        <div className="iframe"> <iframe src="https://www.youtube.com/embed/jhP_-7OQdzs"></iframe></div>
       
    </div>
 
    </div>
)
}
export default About;