import React from "react";
import "./endorsement.css";
import logo1 from "./public/logo1.png";
import logo2 from "./public/logo2.jpg";
import logo3 from "./public/logo3.jpg";

function Endorsement(){
    return(
        <div className="endorsement_main_container">
            <div className="endorsement_tittle">
                <h3>ENDORSED BY</h3>
            </div>
            <div className="endorsement_logo">
                <img src={logo1}/>
                <img src={logo2}/>
                <img src={logo3}/>
              
            </div>
        </div>
    )
}

export default Endorsement;