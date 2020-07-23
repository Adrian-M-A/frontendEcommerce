import React from "react";
import {connect} from "react-redux";
import "./Vegan.css";
import VeganProduct from "../../components/Vegan-Product/Vegan-Product.jsx";
import { VeganProducts } from "../../services/redux/actions.js";

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
    render(){
        return(
            <div id="productsBody">
                <div id="filters">
                    <button id="glutenFree" onClick={this.glutenFree}>Sin gluten</button>
                    <button id="vegetarian" onClick={this.vegetarian}>Veggie</button>
                </div>
                <div className="products">
                    {this.props.vegetarian?.map(vegetarian =><VeganProduct
                    key={vegetarian.id} vegetarian={vegetarian} />)}
                </div>
            </div>  
        )
    }
}
const mapStateToProps = ({vegetarian}) => ({vegetarian:vegetarian});
export default connect(mapStateToProps)(Vegan);