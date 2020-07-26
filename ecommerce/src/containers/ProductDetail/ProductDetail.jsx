import React from "react";
import {connect} from "react-redux";
import "./ProductDetail.css";
import { addProductToDetail, addProductToCart } from "../../services/redux/actions.js";
import carro from "../../img/logocarro150.png";

class ProductDetail extends React.Component{
    componentDidMount(){
        const id = this.props.match.params.id;
        addProductToDetail(id);
    }

    glutenFree = () => {
        this.props.history.push("/glutenfree");
    }

    vegetarian = () => {
        this.props.history.push("/vegetarian");
    }
    products = () => {
        this.props.history.push("/products");
    }

    render(){
        return(
            <div id="productDetailBody">
                <div id="filters">
                    <button id="glutenFree" onClick={this.glutenFree}>Sin gluten</button>
                    <button id="vegetarian" onClick={this.vegetarian}>Veggie</button>
                    <button id="returnToProducts" onClick={this.products}>Seguir comprando</button>
                </div>
                <div className="productDetail">
                    <img id="imageProductDetail" src={this.props.productDetail?.ImagePath} alt="Imagen del producto elegido" />
                    <h3 id="productDetailName">{this.props.productDetail?.name}</h3>
                    <h5 id="productDetailDescription">Contiene: </h5>
                    <h5> {this.props.productDetail?.description} </h5>
                    <h4 id="productDetailPrice">Precio: {this.props.productDetail?.price}0 €</h4>
                    <img src={carro} id="cartDetail" alt="Imagen del carro" onClick={() => addProductToCart(this.props.productDetail)} />
                </div>
            </div>  
        )
    }
}
const mapStateToProps = ({productDetail}) => ({productDetail:productDetail});
export default connect(mapStateToProps)(ProductDetail);