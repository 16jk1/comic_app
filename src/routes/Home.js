import React, { useState, useEffect  } from "react";
import axios from "axios";
import Comic from "../components/Comic";
import "./Home.css"
import { useHistory } from "react-router-dom";

const Button = (props) =>{
  const {handleClick, text} = props
  return(
    <div>
        <button className="button" onClick={handleClick}>{text}</button>
    </div>
  )
}

const Home = (props) => {
    
    const {id} = props.match.params; 

    const [isLoading, setIsLoading] = useState(true)
    const [comics, setComics] = useState([])
    const [counter, setCounter] = useState(id)
    const max = 2490

    const getComics = async () => {
        if(Number(id) === 0)
            setCounter(max)
        else if(Number(id) > max)
            setCounter(0)  
        const comic = await axios.get("/"+counter+"/info.0.json")
        setComics(comic.data)
        setIsLoading(false)
    }

    useEffect(()=>{
        getComics()
    })


    const nextPage = () =>{
        if(counter === max)
            setCounter(1)
        else
            setCounter(Number(counter) + 1)
        history.push(`/${counter}`)
    }
    const prevPage = () =>{
        if(counter === 0)
            setCounter(max)
        else
            setCounter(Number(counter) - 1)
        history.push(`/${counter}`)
    }

    const randomPage = () =>{
        setCounter(Math.floor(Math.random() * max) + 1)
        history.push(`/${counter}`)
    }

    const history = useHistory();

    return (
        <div className="outer">
            <section className="container">
                {isLoading ? (<div className="loader">
                <span className="loader_text">Loading...</span>
                </div>)
                : (
                    <div className="comics">
                        <Comic comic={comics}/>
                    </div>
                )
                }
            </section>
            <div className="buttons">
                <Button handleClick={prevPage} text="Prev"></Button>
                <Button handleClick={nextPage} text="Next"></Button>
                <Button handleClick={randomPage} text="Random"></Button>
            </div>
        </div>
    );
}

export default Home;
