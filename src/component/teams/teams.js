import React from "react";
import "./teams.css"
import Box from "../box/box";
import content from "./content";




function Teams(){
return(
    <div id="team" className="teams_main_container">
        <div className="teams_title">
            <h2>Teams</h2>
        </div>
        <div className="teams_box">

            {content.map((item)=>{
                return(
                    <Box
                    img={item.img_url}
                    title= {item.title}
                    content= {item.content}
                    height="480px"
                    
                    />
                )
            })}
        </div>
    </div>
)
}
export default Teams; 