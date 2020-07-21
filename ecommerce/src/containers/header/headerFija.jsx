import React from "react";
import "./headerFija.css";

class headerFija extends React.Component {



    
    render() {

        return (
            <div id="header">
                <nav id="menu">
                    <div id="logoheader"></div>
                    <button  class="menubuttons" id="orderbutton">Pedido</button>
                    <button class="menubuttons" id="cartbutton">Cesta</button>
                    <div id="logocart"></div>
                </nav>
                

            </div>

         );
    }




}

export default headerFija;