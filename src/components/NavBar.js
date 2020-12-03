import React, {Component} from "react";
import {Input, Menu, Segment} from 'semantic-ui-react';
import {Link} from "react-router-dom";

class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = null
    }

    logOut = () => {
        localStorage.clear()
        alert("You are signing out")
        window.location.reload()
      }

    render() {
        return (
        <>
        <div>
        <Menu>
          <Menu.Item>
            <Link to="/profile"> Profile </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/cards"> Cards </Link>
        </Menu.Item>
        <Menu.Item>
             <p onClick={() => this.logOut()}> Logout </p>
        </Menu.Item>
        </Menu>
      </div>
        </>
        )
    }
}

export default NavBar