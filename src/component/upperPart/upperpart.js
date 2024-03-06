import React from "react";
import "./upperpart.css";
import food_image from "./public/foodimage.png";
import Navbar from "./navbar/navbar"

const content=""


function Upperpart(){
    return (
        <div className="upperpart_main_container" style={{background:`url(${food_image})`}} >
        <div className="inner_container">
        <Navbar/>
        <div className="upper_part_heading">
        <h1>Nepal's <span>1st</span> food reality show</h1>
        </div>
        <div className="heading_about">
        <div>
        <p>Welcome to the exciting world of competitive cooking reality show! </p>
        <p>Our show brings together the best emerging chefs and home cooks to compete against each other in a thrilling and delicious culinary adventure.</p>
        </div>
        
        </div>
        <div className="get_started">
            <input type="text" placeholder="Enter your mail address"></input>
           <button>Get Started</button>
        </div>
        
        </div> 
        </div>
    )
}

export default Upperpart;