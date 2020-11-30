import React, {Component} from "react";
import {connect} from "react-redux";
import RegisterAction from "../redux/actions/RegisterAction";
import {Link} from "react-router-dom";

const initialState = {
    username: "",
    email: "",
    password: "",
    usernameError: "",
    emailError: "",
    passwordError: "",
}

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = initialState
        console.log("state: ", initialState)
    }

    handleChangeUsername = (event) => {
        this.setState({
            // creates a new array and copy's the object over
            ...this.state, 
            username: event.target.value,
        })
    }

    handleChangeEmail = (event) => {
        this.setState({
            ...this.state, 
            email: event.target.value,
        })
    }

    handleChangePassword = (event) => {
        this.setState({
            ...this.state, 
            password: event.target.value,
        })
    }

    // form validation
    validate = () => {
        let usernameError = ""
        let emailError = ""
        let passwordError = ""

        // check for valide email
        if (!this.state.email.includes("@")) {
            emailError = "not a valide email"
            if (emailError) {
                this.setState({emailError})
                return false
            }
        }

        // checks to make sure that the usernames length is longer or equal to two characters 
        if (this.state.username.length <= 2) {
            usernameError = "username must be more then two characters long"
            if (usernameError) {
                this.setState({usernameError})
                return false
            }
        }
        
        // checks to make sure that the passwords length is longer then five
        if (this.state.password.length < 6) {
            passwordError = "password must be more then five characters long"
            if (passwordError) {
                this.setState({passwordError})
                return false
            }
        } 
        
        return true
    }

    handleSubmit = (event) => {
       event.preventDefault()
       const isValid = this.validate()
       if (isValid) {
           this.props.RegisterAction(this.state)
           this.setState(initialState)
        }
        this.props.history.push("/cards")
    }

    render() {
        return (
        <>
            <div>
            <h3> Welcome to JavaScript FlashCards </h3>
            <p> Want to be more prepared for your next technical interview? </p>
            <p> Register Below </p>
        </div>
        <div> 
            <form onSubmit={this.handleSubmit}>
                <input
                placeholder="username" 
                type="username"
                value={this.state.name}
                onChange={this.handleChangeUsername} 
                />
                <p> {this.state.usernameError} </p>
                <input
                placeholder="email" 
                type="email"
                value={this.state.email}
                onChange={this.handleChangeEmail} 
                />
                <p> {this.state.emailError} </p>
                <input
                placeholder="password" 
                type="password"
                value={this.state.password}
                onChange={this.handleChangePassword} 
                />
                <p> {this.state.passwordError} </p>
                <button onClick={this.handleSubmit}> Register </button>
            </form> 
            <div> 
                <Link to="/login"> already have an account </Link> 
            </div>
        </div>
        </>
        )
    }
}

const destructRegisterAction = {RegisterAction}

const mapStateToProps = (state) => {
    return {register: state.register}
}

export default connect(mapStateToProps, destructRegisterAction)(Register)