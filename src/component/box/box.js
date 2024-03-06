import React, { useEffect } from "react";


import "./box.css"
import AOS from "aos";
import "aos/dist/aos.css";





function Box(props) {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    });
    console.log(props);
    const mystyles = {
        height:props.height,
        width:props.width
    }

    return (
        <div className="box_model_main_container" data-aos="fade-up" style={mystyles} >
            <div className="box_model_image" style={{height:props.imgclassheight}}>
                <img src={require(`./public/${props.img}.png`)}  style={{height:props.imgheight,width:props.imgwidth}}/>
            </div>
            <div className="box_model_content">
                <h3>{props.title} </h3>
                <p>{props.content}</p>
                <a href={props.url}>{props.url}</a>
            </div>
        </div>
    )
}
export default Box;