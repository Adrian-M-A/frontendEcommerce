import React from "react";
import "./Product-Item.css";
import {addProductToCart, addProductToDetail} from "../../services/redux/actions.js";
import carro from "../../img/logocarro150.png";
import {useHistory} from "react-router-dom";

const ProductItem = ({product}) => {
    const history = useHistory();
    const goToProductDetail = () => {
        history.push("/detail/" + product.id);
        addProductToDetail(product.id);
    }
    return <div className="product">
                <div id="up">
                    <img id="productImage" src={product.ImagePath} alt={product.name + ' imagen'} onClick={goToProductDetail} />
                </div>
                <div id="down">
                    <h5>{product.name}</h5>
                    <img src={carro} id="cart" alt="Imagen del carro" onClick={() => addProductToCart(product)} />
                </div>
           </div>
}

export default ProductItem;