import React from "react";
import {connect} from "react-redux";
import "./Checkout.css";
import ProductCheckout from "../../components/Product-Checkout/Product-Checkout";

class Checkout extends React.Component{
    componentDidMount(){
        
    }

    glutenFree = () => {
        this.props.history.push("/glutenfree");
    }

    vegetarian = () => {
        this.props.history.push("/vegetarian");
    }

    allProducts = () => {
        this.props.history.push("/products");
    }

    render(){
        return(
            <div id="productsBody">
                <div id="filters">
                    <button id="glutenFree" onClick={this.glutenFree}>Sin gluten</button>
                    <button id="vegetarian" onClick={this.vegetarian}>Veggie</button>
                    <button id="allProducts" onClick={this.allProducts}>Todos los productos</button>
                </div>
                <div className="productsCheckout">
                    <h3 id="orderTitle">Has pedido: </h3>
                    {this.props.cart?.map(product =><ProductCheckout
                    key={product.id} product={product} />)}
                </div>
            </div>  
        )
    }
}
const mapStateToProps = ({cart}) => ({cart:cart});
export default connect(mapStateToProps)(Checkout);