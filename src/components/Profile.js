import React, {Component} from "react";
import ProfileAction from "../redux/actions/ProfileAction";
import {connect} from "react-redux";
import ProfileCard from "./ProfileCard";

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        console.log("props in Profile: ", this.props)
    }

    componentDidMount() {
        const timer = setTimeout(() => {
            this.props.ProfileAction(localStorage.getItem("id"))
        }, 1000);
        return () => clearTimeout(timer);
      }

    render() {
        const users = this.props.user.user
        console.log({users})
        const id = localStorage.getItem("id")
        if (!id) {
            return <p> ...loading </p>
        }
        return (
            <>
            <div>
                <div> 
                <h4> {"Welcome to your profile"} </h4>
                </div>
                {users.map((user) => (
                    <ProfileCard key={user.id}  username={user.username} />
                ))}
            </div> 
            </>
        )
    }
}

const mapStateToprops = (state) => {
    return {user: state.user}
}

export default connect(mapStateToprops, {ProfileAction})(Profile)