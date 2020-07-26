import React from "react";
import {connect} from "react-redux";
import "./Vegan.css";
import { VeganProducts } from "../../services/redux/actions.js";
import ProductItem from "../../components/Product-Item/Product-Item";

class Vegan extends React.Component{
    componentDidMount(){
        VeganProducts()
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
                <div className="products">
                    {this.props.vegetarian?.map(product =><ProductItem
                    key={product.id} product={product} />)}
                </div>
            </div>  
        )
    }
}
const mapStateToProps = ({vegetarian}) => ({vegetarian:vegetarian});
export default connect(mapStateToProps)(Vegan);