import React from "react";
import axios from "axios";
import "./pedidomenu.css";
import { NavLink } from "react-router-dom";
import Subheader from "../Subheader/subheader.jsx";


class pedidomenu extends React.Component {


    state = {
        products: [],
        status: null
    };


    getProducts = () => {
        axios.get("http://localhost:3002/products")
            .then(res => {
                console.log(res);
                this.setState({
                    products: res.data.products,
                    status: 'succes'

                });
            });
    }


    render() {

        return (
            <div id="pedidomenucontainer">
                {/* <Subheader />
                <div className="product-item" id="product-template">
                    <div className="image-wrap">
                        <img src="{'http://localhost:3002/products' + this.ImagePath}" alt="{this.product.title}"></img>
                    </div>

                    <h2> {this.product.name} </h2>
                    <p className="description">{product.description}</p>



                </div> */}
                <button onClick={this.getProducts}>Holi</button>
            </div>

        );

            var listProducts = this.state.products.map((product) => {


            });
            // return (
            // <div id="products-pedido">{listProducts}</div>

            // );


    }

}






export default pedidomenu;