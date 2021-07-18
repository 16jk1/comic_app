import React from "react";
import "./Comic.css";

const Comic = (props) =>{
    const {comic} = props
    return (
        <div className="comics_comic">
            <img src={comic.img} alt={comic.title} title={comic.title}></img>
            <div className="comic_data">
                <h3 className="comic_title">{comic.title}</h3>
                <h5 className="comic_day">{comic.day}/{comic.month}/{comic.year}</h5>
                <h5 className="comic_alt">{comic.transcript.replace(/[\[\]\{\}']+/g,'')}.</h5>
                
            </div>            
        </div>
    )
}

export default Comic;