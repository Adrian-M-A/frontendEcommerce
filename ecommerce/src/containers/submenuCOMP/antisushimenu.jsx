import React from "react";
import "./antisushimenu.css";
import Subheader from "../Subheader/subheader.jsx";


class antisushimenu extends React.Component {

    render() {
        return (
            <div id="antisushicontainer">
                <Subheader />
                <p className="textoprueba">Soy el anti sushi component y debería traer los productos</p>

            </div>

        );
    }



}


export default antisushimenu;