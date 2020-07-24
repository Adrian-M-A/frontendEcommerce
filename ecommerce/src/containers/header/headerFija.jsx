import React from "react";
import "./headerFija.css";
import { NavLink } from "react-router-dom";

class headerFija extends React.Component {



    
    render() {

        return (
            <div id="header">
                <nav id="menu">
                    <div id="logoheader"></div>
                    <NavLink to="/menu" className="menubuttons" id="orderbutton">Pedido</NavLink>
                    <button className="menubuttons" id="cartbutton">Cesta</button>
                    <div id="logocart"></div>
                </nav>
                

            </div>

         );
    }




}

export default headerFija;