import React from "react";
import axios from "axios";
import "./pedidomenu.css";
import { NavLink } from "react-router-dom";
import Subheader from "../Subheader/subheader.jsx";
import Product from '../Products/Product.jsx';


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

<<<<<<< HEAD
        // // var listProducts = this.state.products.map((product) => {

        //     return (
        //     <h1>{}</h1> // <h1>{product.name}</h1>
=======
        // var listProducts = this.state.products.map((product) => {

        //     return (
        //         <h1>{product.name}</h1>
>>>>>>> develop
        //     );



<<<<<<< HEAD
        // // });
=======
        // });
>>>>>>> develop

        return (
            <div id="container-pedido">
                <Subheader />
                <Product />
                <div id="products"> {this.getProducts} </div>
            </div>
        );

    };

}




export default pedidomenu;