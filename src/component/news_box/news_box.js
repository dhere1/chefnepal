import React,{useEffect} from "react";


import "./news_box.css"
import AOS from "aos";
import "aos/dist/aos.css";



    

function News_Box(props){
    useEffect(()=>{
        AOS.init({duration:1000});
    });
    const mystyles={
        height:props.height,
        width:props.width
    }
    return(
        <div className="box_model_main_container" data-aos="fade-up" style={mystyles} >

            <div className="box_model_image" >
     
            <iframe src={ props.url } />
           
      
            </div>
            <div className="box_model_content" onClick={window.open("https://www.mazzakoonline.com/48365/?mibextid=Zxz2cZ")}>
                <h3>{props.title} </h3>
                <p>{props.content}</p>
             
            </div>
        </div>
    )
}
export default News_Box;