import React, {Component} from "react";
import {useFormik} from "formik";
import {connect} from "react-redux";
import RegisterAction from "../redux/actions/RegisterAction";

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            email: "",
            password: "",
        }
    }

    handleChangeUsername = (event) => {
        this.setState({
            // creates a new array and copy's the object over
            ...this.state, 
            username: event.target.value
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


    handleSubmit = (event) => {
       event.preventDefault()
       this.props.RegisterAction(this.state)
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
                <input
                placeholder="email" 
                type="email"
                value={this.state.email}
                onChange={this.handleChangeEmail} 
                />
                <input
                placeholder="password" 
                type="password"
                value={this.state.password}
                onChange={this.handleChangePassword} 
                />
            </form> 
            <button onClick={this.handleSubmit}> Register </button>
        </div>
        </>
        )
    }
}

const destructRegisterAction = { RegisterAction }

const mapStateToProps = (state) => {
    return {register: state.register}
}

export default connect(mapStateToProps, destructRegisterAction)(Register)