import React from "react";
import {connect} from "react-redux";
import "./GlutenFree.css";
import ProductItem from "../../components/Product-Item/Product-Item.jsx";
import { glutenFreeProducts } from "../../services/redux/actions.js";

class GlutenFree extends React.Component{
    componentDidMount(){
        glutenFreeProducts()
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
                    {this.props.glutenFree?.map(product =><ProductItem
                    key={product.id} product={product} />)}
                </div>
            </div>  
        )
    }
}
const mapStateToProps = ({glutenFree}) => ({glutenFree:glutenFree});
export default connect(mapStateToProps)(GlutenFree);