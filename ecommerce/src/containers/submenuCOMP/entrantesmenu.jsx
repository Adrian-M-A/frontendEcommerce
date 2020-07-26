import React from "react";
import "./entrantesmenu.css";
import Subheader from "../Subheader/subheader.jsx";


class entrantesmenu extends React.Component {

    render (){
        return(
            <div id="entrantescontainer">
                <Subheader />
                <p className="textoprueba">Soy el entrante component y debería traer los productos</p>

            </div>

        );
    }



}


export default entrantesmenu;