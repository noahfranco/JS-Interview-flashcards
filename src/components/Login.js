import React, {Component} from "react";
import LoginAction from "../redux/actions/LoginAction";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

const initialState = {
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
}

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = initialState
    }
    
    handleEmail = (event) => {
        this.setState({
            ...this.state,
            email: event.target.value
        })
    }

    handlePassword = (event) => {
        this.setState({
            ...this.state,
            password: event.target.value
        })
    }


    loginValidation = () => {
        let emailError = ""

        if (!this.state.email.includes("@")) {
            emailError = "wrong email or password, try again"
            if (emailError) {
                this.setState({emailError})
                return false
            }
          }

        return true
    }


    handleSubmit = (parm) => {
        parm.preventDefault()
        const checkValid = this.loginValidation()
        if (checkValid) {
            this.props.LoginAction(this.state)
            this.setState(initialState)
            console.log("Hit me")
            this.props.history.push("/cards")
        }
    }

   render() {
       return (
           <>
           <div>
           <h3> Welcome to login </h3> 
           </div> 
           <div>
               <form onSubmit={this.handleSubmit}>
                    <input 
                    placeholder="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.handleEmail}
                    />
                    <input 
                    placeholder="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.handlePassword}
                    />
                    <button onClick={this.handleSubmit}> Login </button>
               </form> 
               <div> 
                <p> {this.state.emailError} </p>
                <Link to="/"> don't have an account </Link>    
               </div> 
           </div>
           </>
       )
   } 
}


const destructLoginAction = {LoginAction}

const mapStateToProps = (state) => {
    return {
        login: state.login
    }
}

export default connect(mapStateToProps, destructLoginAction)(Login)