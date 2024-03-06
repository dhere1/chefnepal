import React from "react";
import chef_nepal_logo from "../public/chefnepallogo.png"
import "./navbar.css"
import facebook from "../public/facebook.png";
import insta from "../public/insta.png";
import twitter from "../public/twitter.png";
import youtube from "../public/youtube.png";
function Navbar(){
    return(
<div className="main_container">
<div className="nav_bar">
                <ul>
                <a href="#home"><li className="nav_bar_list">Home</li></a>
                <a href="#apply"><li className="nav_bar_list">Apply</li></a>
                <a href="#judges"><li className="nav_bar_list">Judges</li></a>
               <li> <img src={chef_nepal_logo} className="chef_nepal_logo"></img></li>
               <a href="#news"><li className="nav_bar_list">News</li></a>
               <a href="#team"><li className="nav_bar_list">Team</li></a>
               <a href="#about"><li className="nav_bar_list">About</li></a>
                </ul>
            
            </div>
<div className="social_media">
        <ul>
        <a href="https://www.facebook.com/TheChefNepal"><li><img src={facebook} ></img></li></a>
       <a href="https://www.instagram.com/thechefnepal/"> <li><img src={insta}></img></li></a>
        <a href="https://www.youtube.com/@ChefNepal"><li><img src={youtube}></img></li></a>
        <a href="https://twitter.com/TheChefNepal"><li><img src={twitter}></img></li></a>

        </ul>
</div>
</div>

    )

}
export default Navbar;