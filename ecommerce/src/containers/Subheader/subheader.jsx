import React from "react";
import "./subheader.css";


class subheader extends React.Component {

    render() {
        return (
            <div id="subheader">
                <nav id="submenu">
                    <button class="menubuttons" id="sushibutton-submenu">Sushi</button>
                    <button class="menubuttons" id="entrantesbutton-submenu">Entrantes</button>
                    <button class="menubuttons" id="antisushibutton-submenu">Anti Sushi</button>
                    <button class="menubuttons" id="dulcebutton-submenu">Dulce</button>
                    <button class="menubuttons" id="bebidabutton-submenu">Bebida</button>
                </nav>


            </div>
        );





    }

}

export default subheader;