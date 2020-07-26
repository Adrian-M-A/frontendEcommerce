import React from "react";
import "./dulcemenu.css";
import Subheader from "../Subheader/subheader.jsx";



class dulcemenu extends React.Component {

    render (){
        return(
            <div id="dulcescontainer">
                <Subheader />
                <p className="textoprueba">Soy el dulce component y debería traer los productos</p>

            </div>

        );
    }



}


export default dulcemenu;