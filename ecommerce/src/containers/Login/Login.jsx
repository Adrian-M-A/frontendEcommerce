import React, {useState} from "react";
import {login} from "../../services/redux/actions.js";
import "./Login.css";

const Login = (props) => {
    const [errorLogin, setErrorLogin] = useState('')
    const onSubmit = (event) => {
        event.preventDefault();
        const credentials = {
            email: event.target.email.value,
            password: event.target.password.value
        }
        login(credentials)
        .then(() => {
            props.history.push('/');
        }, 300)
        .catch(() => {
            setErrorLogin('Usuario no registrado.')
        })
    }
    const register = () => {
        setTimeout(() => {
            props.history.push('/register');
        }, 300);
    };

    return (
        <div id="loginContainer">
            <div id="loginWindow">
                <div id="windowContent">
                    <div id="loginwindowHeader">
                        <div id="loginLogoImage"></div>
                    </div>
                    <h2 id="loginH2">Entra para conocer nuestras variedades</h2>
                    <div id="loginFormInputs">
                        <form id="loginForm" onSubmit={onSubmit}>
                            <input type="email" name="email" id="loginEmailInput" placeholder="Introduce tu email"/>
                            <input type="password" name="password" id="loginPasswordInput" placeholder="Introduce tu contraseña" />
                            <span id="errorLogin">{errorLogin}</span>
                            <button id="loginButton" type="submit">Entrar</button>
                            <button id="registerButton" onClick={register}>Aún no estoy registrado</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;