import React from "react";
import axios from "axios";
import "./pedidomenu.css";
import Subheader from "../Subheader/subheader.jsx";


class pedidomenu extends React.Component {

    state = { 
        products: [],
        status: null
    };

    componentWillMount(){  {/*Ciclo de vida para que cargue primero esto*/}
        this.getProducts();
    }

    getProducts = () => {
        axios.get("http://localhost:3001/products")
             .then( res => {
                 this.setState({
                     products: res.data.products,
                     status: 'succes'

                 });
                 console.log(this.state);
             });
    }
   

    render() {
        return (
            <div id="pedidomenucontainer">
                <Subheader />
                <h1>Holi</h1>


            </div>

        );
    }



}


export default pedidomenu;