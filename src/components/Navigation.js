import React from "react";
import {Link} from "react-router-dom";
import "./Nav.css";

const Navigation = () => {
    return(
        <div className="nav">
            <Link to="/">Newest Release</Link>
        </div>
    )
}

export default Navigation;