import React, {Component} from "react";
import LoginAction from "../redux/actions/LoginAction";
import {connect} from "react-redux"

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        
        console.log("props form Login: ", props)
    }

   render() {
       return (
           <>
           <h3> Welcome to login </h3> 
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