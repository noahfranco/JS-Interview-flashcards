import React, {Component} from "react";
import {Input, Menu, Segment} from 'semantic-ui-react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import FlashCardsAction from "../redux/actions/FlashCardsGetActions";
import CardFront from "./CardFront";

class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = null
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
        </Menu>
      </div>
        </>
        )
    }
}

export default NavBar