import React, {Component} from "react";
import LoginAction from "../redux/actions/LoginAction";
import {connect} from "react-redux"

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
        
        console.log("props form Login: ", props)
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

    handleSubmit = (parm) => {
        parm.preventDefault()
        this.props.LoginAction(this.state)
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