import React from "react";
import axios from "axios";

class Register extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: "",
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
            setTimeout(() => {
                this.props.history.push('/');
            }, 500);
        })
        .catch(error => console.error(error))
    };

    // this.props.history.block((location, action) => {
    //     if (input.value !== '') {
    //         return '¿Seguro que quiere abandonar la página sin completar el formulario?';
    //     }
    // });

    register(){
        setTimeout(() => {
            this.props.history.push('/register');
        }, 300);
    };

    render() {
        return(
            <div id="registerContainer">
                <div id="windowRegister">
                        
                </div>
            </div>
        )
    }
};

export default Register;