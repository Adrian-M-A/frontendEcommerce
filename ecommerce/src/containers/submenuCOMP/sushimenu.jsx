import React from "react";
import "./sushimenu.css";
import Subheader from "../Subheader/subheader.jsx";



class sushimenu extends React.Component {



    render (){
        return(
            <div id="sushicontainer">
                <Subheader />
                <p className="textoprueba">Soy el sushi component y debería traer los productos</p>

            </div>

        );
    }



}


export default sushimenu;