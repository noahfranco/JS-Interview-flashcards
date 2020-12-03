import React, {Component} from "react";
import {Input, Menu, Segment} from 'semantic-ui-react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import FlashCardsAction from "../redux/actions/FlashCardsGetActions";

class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = null
        console.log("props from Navbar: ", this.props)
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
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
        </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        card: state.card
    }
}

export default connect(mapStateToProps, {FlashCardsAction})(NavBar)