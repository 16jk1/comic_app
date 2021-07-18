import React, { useState, useEffect  } from "react";
import axios from "axios";
import Comic from "../components/Comic";
import "./Home.css"
import {useHistory } from "react-router-dom";

const Button = (props) =>{
  const {handleClick, text} = props
  return(
    <div>
        <button className="button" onClick={handleClick}>{text}</button>
    </div>
  )
}

const Start = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [comics, setComics] = useState([])

    const getComics = async () => {
        const comic = await axios.get("/2490/info.0.json")
        setComics(comic.data)
        setIsLoading(false)
    }

    useEffect(()=>{
        getComics()
    })

    const nextPage = () =>{
        history.push(`/1`);
    }

    const randomPage = () =>{
        var rand = Math.floor(Math.random() * 2490) + 1
        history.push(`/${rand}`)
    }

    const history = useHistory();

    return (
        <div>
        <section className="container">
            {isLoading ? (<div className="loader">
            <span className="loader_text">Loading...</span>
            </div>)
            : (
                <div>
                    <h1 className="header">
                        Newest Release
                    </h1>
                
                    <div className="comics">
                        <Comic comic={comics}/>
                    </div>
                </div>
            )
            }
        </section>
            <div className="buttons">
                <Button handleClick={nextPage} text="Next"></Button>
                <Button handleClick={randomPage} text="Random"></Button>
            </div>
        </div>
    );
}

export default Start;
