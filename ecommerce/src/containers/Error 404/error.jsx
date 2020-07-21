import React from "react";
import "./error.css";
import { NavLink } from "react-router-dom";


class slider extends React.Component {
    render(){

        return (

            <div id="errorContainer">
                <NavLink to="/" id="errorbutton">Vuelve al inicio</NavLink>
            </div>

        );
    }
}



export default slider;