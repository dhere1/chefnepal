import React from "react";
import News_Box from "../news_box/news_box";
import Box from "../box/box";
import "./news.css";
import {contentYoutube, contentNews} from "./content";


function newsContent(item){
return   <Box
img={item.img_url}
title= {item.title}
content= {item.content}
url={item.url}
width="550px"
/>

}

function contentYout(item){
    return <News_Box
    url={item.url}
    title={item.title}
    content={item.content}
    width="550px"
    

    />
}
function News(){
 
    return(
        
        <div id="news" className="news_main_container">
            <div className="news_title">
                <h2>Stay updated about <span>The Chef Nepal</span>.</h2>
                <p>Here we keep you up to date with the latest happenings and upcoming events of our show.
                </p>
        
                <p>From updates on our current season to exciting announcement about upcoming events, you will find it all here.</p>
                <div>
                <p className="news_stay_tuned">So stay tuned to our news section for all the latest updates and insights from the exciting and ever-evolving world of food reality shows. Whether you're a foodie, a culinary enthusiast, or simply someone who loves great food and cooking, there's something here for everyone.</p>
            </div>
                </div>
              
            <div className="news_box">
            <div className="news_box_inner_container">
            {contentYoutube.map(contentYout)}
            {contentNews.map(newsContent)}
           
            </div>
              
            </div>
        </div>
    )
}

export default News;