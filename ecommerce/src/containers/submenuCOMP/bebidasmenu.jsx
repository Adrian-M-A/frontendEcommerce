import React from "react";
import "./bebidasmenu.css";
import Subheader from "../Subheader/subheader.jsx";



class bebidasmenu extends React.Component {

    render (){
        return(
            <div id="bebidascontainer">
                <Subheader />
                <p className="textoprueba">Soy el bebida component y debería traer los productos</p>



            </div>

        );
    }



}


export default bebidasmenu;