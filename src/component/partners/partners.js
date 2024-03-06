import React from "react";
import "./partners.css";
import Box from "../box/box";
import content from "./content";



function partnersContent(item){
    return <Box 
    img={item.img_url}
    title= {item.title}
    content= {item.content}
    width="550px"
    imgheight="420px"
    imgwidth="413px"
    imgclassheight="418px"
    height='500px'
     />
    }

function Partners(){
    return(
        <div  className="parnters_main_container">
            <div className="partners_topic">
            <h2>Partners</h2>
            </div>
            <div className="partners_box"> {content.map(partnersContent)}</div>
        </div>
    )
}
export default Partners;