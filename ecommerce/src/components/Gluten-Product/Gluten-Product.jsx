import React from "react";
import "./Gluten-Product.css";
import {addProductToCart} from "../../services/redux/actions.js";
import carro from "../../img/logocarro150.png";

const GlutenProduct = ({glutenFree}) => {
    return <div className="product">
                <div id="up">
                    <img id="productImage" src={glutenFree.ImagePath} alt={glutenFree.name + ' imagen'} />
                </div>
                <div id="down">
                    <h5>{glutenFree.name}</h5>
                    <img src={carro} id="cart" alt="Imagen del carro" onClick={() => addProductToCart(glutenFree)} />
                </div>
           </div>
}

export default GlutenProduct;