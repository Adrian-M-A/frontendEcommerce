import React from "react";
import "./headerFija.css";
import { NavLink } from "react-router-dom";

class headerFija extends React.Component {
    
    render() {

        return (
            <div id="header">
                <NavLink to="/" id="logoheader"></NavLink>
                <nav id="menu">
                    <NavLink to="/products" className="menubuttons" id="orderbutton">Pedido</NavLink>
                    <NavLink to="/login" className="menubuttons" id="loginButtonHeader">Login</NavLink>
                    {/* <button className="menubuttons" id="cartbutton">Cesta</button> */}
                    <NavLink to="/checkout" id="logocart"></NavLink>
                    {/* <div id="logocart"></div> */}
                </nav>
            </div>
         );
    }
}

export default headerFija;