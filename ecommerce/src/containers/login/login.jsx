import React from "react";
import axios from "axios";
import "./login.css";

class Login extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: "",
            registered: false
        }
            // Se enlaza, bind, la función al estado
        // this.login = this.login.bind(this);

    };

    handleChange = (ev) =>{
        this.setState({[ev.target.name]: ev.target.type === 'string' ? +ev.target.value : ev.target.value}); 
    }

    handleSubmit = event =>{
        event.preventDefault();
        let body = {
            email: this.state.email,
            password: this.state.password
        };
        console.log(body)

        axios.post("http://localhost:3001/users/login", body)
        .then(res => {
            console.log(res.data)
        })
        .catch(error => console.error(error))
    }

    // this.history.block((location, action) => {
    //     if (input.value !== '') {
    //         return '¿Seguro que quiere abandonar la página sin completar el formulario?';
    //     }
    // });

    render() {
        return(
            <div id="registerContainer">
                <div id="windowRegister">
                    <div id="logo">
                        <div id="logoImage"></div>
                    </div>
                    <h3>Entra para conocer nuestras variedades</h3>
                    <div id="formInputs">
                        <form onSubmit={this.handleSubmit}>
                            <input type="email" name="email" id="emailInput" value={this.state.email} onChange={this.handleChange} placeholder="Introduce tu email"/>
                            <input type="password" name="password" id="passwordInput" value={this.state.password} onChange={this.handleChange} placeholder="Introduce tu contraseña" />
                            <button type="submit">Log in</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
};

export default Login;