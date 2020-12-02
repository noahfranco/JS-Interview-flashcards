import React, {Component} from "react";

class ProfileCard extends Component {
    constructor(props) {
        super(props)
        console.log("this.props in ProfileCard: ", this.props)
    }

    render() {
        return (
            <>
                <p> Welcome {this.props.username} to your profile  </p>
            </>
        )
    }
} 

export default ProfileCard