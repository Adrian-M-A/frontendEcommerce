import React from "react";
import axios from "axios";
import "./register.css";

class Register extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name: "",
            surnames: "",
            address: "",
            phone: "",
            document: "",
            email: "",
            password: "",
            password2: "",
            errorMessage: "",
            registered: false
        }
    };

    handleChange = (ev) =>{
        this.setState({[ev.target.name]: ev.target.type === 'string' ? +ev.target.value : ev.target.value}); 
    }

    handleSubmit = event =>{
        event.preventDefault();

        //  //1 control de errores
        
        //  if(this.state.password !== this.state.password2){
        //     this.setState({msgError: "Los dos passwords deben coincidir"});
        //     return;
        // }
        
        // if(this.state.username === ""){
            
        //     return;
        // }

        let body = {
            name: this.state.name,
            surnames: this.state.surnames,
            address: this.state.address,
            phone: this.state.phone,
            document: this.state.document,
            email: this.state.email,
            password: this.state.password
        };

        axios.post("http://localhost:3001/users/register", body)
        .then(res => {
            console.log(res.data);
            setTimeout(() => {
                this.props.history.push('/login');
            }, 500);
        })
        .catch(error => console.error(error))
    };

    // this.props.history.block((location, action) => {
    //     if (input.value !== '') {
    //         return '¿Seguro que quiere abandonar la página sin completar el formulario?';
    //     }
    // });

    register = () =>{
        setTimeout(() => {
            this.props.history.push('/register');
        }, 300);
    };

    render() {
        return(
            <div id="registerContainer">
                <div id="registerWindow">
                    <div id="windowContent">
                        <div id="registerHeader">
                            <div id="registerLogoImage">
                            </div>
                        </div> 
                        <h2 id="registerH2">Rellena tus datos para poder acceder a nuestra mejor oferta</h2>
                        <div id="registerFormInputs">
                            <form id="registerForm" onSubmit={this.handleSubmit}>
                                <div id="registerFormLeft">
                                    <input type="text" name="name" id="nameinput" value={this.state.name} onChange={this.handleChange} placeholder="Nombre"/>
                                    <input type="text" name="surnames" id="surnamesinput" value={this.state.surnames} onChange={this.handleChange} placeholder="Apellidos" />
                                    <input type="text" name="address" id="addressinput" value={this.state.address} onChange={this.handleChange} placeholder="Dirección de envío" />
                                    <input type="text" name="phone" id="phoneinput" value={this.state.phone} onChange={this.handleChange} placeholder="Teléfono" />
                                    <input type="text" name="document" id="documentinput" value={this.state.document} onChange={this.handleChange} placeholder="DNI/CIF" />
                                </div>
                                <div id="registerFormRight">
                                    <input type="email" name="email" id="emailInput" value={this.state.email} onChange={this.handleChange} placeholder="Introduce tu email"/>
                                    <input type="password" name="password" id="password1Input" value={this.state.password} onChange={this.handleChange} placeholder="Introduce tu contraseña" />
                                    <span>{this.state.errorMessage}</span>
                                    <input type="password" name="password2" id="password2Input" value={this.state.password2} onChange={this.handleChange} placeholder="Repite tu contraseña" />
                                    <button type="submit">Registrar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Register;