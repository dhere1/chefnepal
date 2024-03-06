import React from "react";
import "./broadcast.css"
import logo from "./public/logo.png";


function Broadcast(){
  return (
    <div className="broadcast_main_container">
        <div className="broadcast_inner_container">
            <h2>Our broadcasting partner  <span>Himalayan Television</span></h2>
         
        </div>
        <div className="broadcast_logo">
                <img src={logo}/>
        </div>
    </div>
  )
}
export default Broadcast;
