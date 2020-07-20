import React from "react";
import axios from "axios";
import "./login.css";

class Login extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: "",
            errorLogin:"",
            registered: false
        }
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

        axios.post("http://localhost:3001/users/login", body)
        .then(res => {
            console.log(res.data)
            localStorage.setItem('authToken', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));
            this.registered = true;
            setTimeout(() => {
                this.props.history.push('/');
            }, 500);
        })
        .catch(error => {
            this.setState({errorLogin: "No se encuentra registrado."});
        })
    };

    // this.props.history.block((location, action) => {
    //     if (input.value !== '') {
    //         return '¿Seguro que quiere abandonar la página sin completar el formulario?';
    //     }
    // });

    register = () => {
        setTimeout(() => {
            this.props.history.push('/register');
        }, 300);
    };

    render() {
        return(
            <div id="loginContainer">
                <div id="loginWindow">
                    <div id="windowContent">
                        <div id="loginwindowHeader">
                            <div id="loginLogoImage"></div>
                        </div>
                        <h2 id="loginH2">Entra para conocer nuestras variedades</h2>
                        <div id="loginFormInputs">
                            <form id="loginForm" onSubmit={this.handleSubmit}>
                                <input type="email" name="email" id="loginEmailInput" value={this.state.email} onChange={this.handleChange} placeholder="Introduce tu email"/>
                                <input type="password" name="password" id="loginPasswordInput" value={this.state.password} onChange={this.handleChange} placeholder="Introduce tu contraseña" />
                                <span id="errorLogin">{this.state.errorLogin}</span>
                                <button id="loginButton" type="submit">Entrar</button>
                                <button id="registerButton" onClick={this.register}>Aún no estoy registrado</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Login;