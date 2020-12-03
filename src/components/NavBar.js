import React, {Component} from "react";
import {Input, Menu, Segment} from 'semantic-ui-react';
import {Link} from "react-router-dom";

class NavBar extends Component {
    constructor() {
        super()
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

export default NavBar