import React from "react";
import {connect} from "react-redux";
import "./ProductDetail.css";
// import ProductItem from "../../components/Product-Item/Product-Item.jsx";
import { addProductToDetail } from "../../services/redux/actions.js";

class ProductDetail extends React.Component{
    componentDidMount(){
        const id = this.props.match.params.id
        addProductToDetail(id)
    }

    glutenFree = () => {
        this.props.history.push("/glutenfree");
    }

    vegetarian = () => {
        this.props.history.push("/vegetarian");
    }
    render(){
        return(
            <div id="productDetailBody">
                <div id="filters">
                    <button id="glutenFree" onClick={this.glutenFree}>Sin gluten</button>
                    <button id="vegetarian" onClick={this.vegetarian}>Veggie</button>
                </div>
                <div className="products">
                    {/* {this.props.detail?.map(product =><ProductItem
                    key={product.id} product={product} />)} */}
                </div>
            </div>  
        )
    }
}
const mapStateToProps = ({detail}) => ({detail:detail});
export default connect(mapStateToProps)(ProductDetail);