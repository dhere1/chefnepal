import React from "react";
import "./footer.css";
import mail from "./public/Vector.png";
import phone from "./public/phone.png";
import facebook from "./public/facebook.png";
import insta from "./public/insta.png";
import twitter from "./public/twitter.png";
import linkedin from "./public/linkedin.png";
import youtube from "./public/youtube.png";
import tiktok from "./public/tiktok.png"

function Footer() {
  return (
    <div className="footer_main_container">
      <div className="footer_div">
      <div className="info">
      <div className="mail-info">
          <img src={mail} />
          <p>hello@chefnepal.com</p>
        </div>
        <div className="call-info">
        <img src={phone} />
        <p>980-234-1234</p>
        </div>
      </div>
        <div className="social-media-link">
        <p>follow us for more updates </p>
        <div className="social-media-logo">
        <a href="https://www.linkedin.com/showcase/thechefnepal/"><img src={linkedin}/></a> 
        <a href=""><img src={tiktok}/></a>
        <a href="https://www.facebook.com/TheChefNepal"><img src={facebook}/></a>
        <a href="https://www.instagram.com/thechefnepal/"><img src={insta}/></a>
        <a href="https://twitter.com/TheChefNepal"><img src={twitter}/></a>
        <a href="https://www.youtube.com/@ChefNepal"><img src={youtube}/></a>
        </div>
      
        </div>


        
      </div>

      <div className="about-footer">
        <p>Feel free to contact us if you have <span>any queries.</span></p>
        <p>This show is produced by Dharma Pictures.
        <span>Empowered by Kreshina Dhakal.</span>
         </p>
  
      </div>


    </div>
  )

}
export default Footer;