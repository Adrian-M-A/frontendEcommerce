import React from "react";
import {connect} from "react-redux";
import "./glutenFree.css";
import GlutenProduct from "../../components/Gluten-Product/Gluten-Product.jsx";
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
                    <button id="allProducts" onClick={this.allproducts}>Veggie</button>
                </div>
                <div className="products">
                    {this.props.glutenFree?.map(glutenFree =><GlutenProduct
                    key={glutenFree.id} glutenFree={glutenFree} />)}
                </div>
            </div>  
        )
    }
}
const mapStateToProps = ({glutenFree}) => ({glutenFree:glutenFree});
export default connect(mapStateToProps)(GlutenFree);