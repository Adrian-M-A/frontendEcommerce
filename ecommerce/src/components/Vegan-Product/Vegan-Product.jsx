import React from "react";
import "./Vegan-Product.css";
import {addProductToCart} from "../../services/redux/actions.js";
import carro from "../../img/logocarro150.png";

const VeganProduct = ({vegetarian}) => {
    return <div className="product">
                <div id="up">
                    <img id="productImage" src={vegetarian.ImagePath} alt={vegetarian.name + ' imagen'} />
                </div>
                <div id="down">
                    <h5>{vegetarian.name}</h5>
                    <img src={carro} id="cart" alt="Imagen del carro" onClick={() => addProductToCart(vegetarian)} />
                </div>
           </div>
}

export default VeganProduct;