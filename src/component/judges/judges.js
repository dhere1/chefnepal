import React from "react";
import "./judges.css"
import Box from "../box/box";
import content from "./content";



function judgesContent(item){
    return <Box 
    img={item.img_url}
    title= {item.title}
    content= {item.content}
    height='710px'
    imgclassheight="422px"
    width="430px"
     />
    }


function Judges(){
return(
    <div id="judges" className="judges_main_container">
        <div className="judges_title">
            <h2>Judges</h2>
        </div>
        <div className="judges_box">
            {content.map(judgesContent)}
        </div>
    </div>
)
}
export default Judges;