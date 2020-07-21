import React from "react";
import "./subheader.css";
import { NavLink } from "react-router-dom";


class subheader extends React.Component {

    render() {
        return (
            <div id="subheader">
                <nav id="submenu">
                    <NavLink to="sushi" class="menubuttons" id="sushibutton-submenu">Sushi</NavLink>
                    <NavLink to="entrantes" class="menubuttons" id="entrantesbutton-submenu">Entrantes</NavLink>
                    <NavLink to="antisushi" class="menubuttons" id="antisushibutton-submenu">Anti Sushi</NavLink>
                    <NavLink to="dulces" class="menubuttons" id="dulcebutton-submenu">Dulces</NavLink>
                    <NavLink to="bebidas" class="menubuttons" id="bebidabutton-submenu">Bebidas</NavLink>
                </nav>


            </div>
        );





    }

}

export default subheader;