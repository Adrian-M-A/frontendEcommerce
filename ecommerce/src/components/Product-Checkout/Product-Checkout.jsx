import React from "react";
import "./Product-Checkout.css";


const ProductCheckout = ({product}) => {
    
    return <div id="productCheckout">
                <div id="leftCheckout">
                    <img id="productImage" src={product.ImagePath} alt={product.name + ' imagen'}  />
                </div>
                <div id="rightCheckout">
                    <h5 id="checkoutName">{product.name}</h5>
                    <h5 id="checkoutDescription">{product.description}</h5>
                    <h5 id="checkoutPrice">{product.price}0 €</h5>
                </div>
           </div>
}

export default ProductCheckout;