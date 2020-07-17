import React from "react";
import "./login.css";

class Login extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name: "",
            surnames: "",
            address: "",
            phone: "",
            document: "",
            email: "",
            password: ""
        }

    //     this.createRegister = this.createRegister.bind(this);
    }

    // async register() {



    //     try {
            
    //     } catch (error) {
            
    //         console.error(error)
    //     }
    // }

    render() {
        return(
            <div id="registerContainer">
                <div id="windowRegister">
                    <div id="logo">
                        <div id="logoImage"></div>
                    </div>
                    <h3>Entra para conocer nuestras variedades</h3>
                    <div id="formInputs">
                        <form action="/" method="post">
                            <input type="email" name="email" id="emailInput" placeholder="Introduce tu email"/>
                            <input type="password" name="password" id="passwordInput" placeholder="Introduce tu contraseña" />
                            <button type="submit">Regístrate</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
};

export default Login;