import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
const baseTheme = require('material-ui/styles/baseThemes/lightBaseTheme');

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isDrawerOpen: false,
      title: 'Title'
    }
  }

  handleToggle() {
    this.setState({
      isDrawerOpen: !this.state.isDrawerOpen
    });
  }

  handleClose() {
    this.setState({
      isDrawerOpen: false
    });
  }

  setTitle(title) {
    this.setState({title});
  }

  getChildContext() {
    return {
      muiTheme: getMuiTheme(baseTheme)
    };
  }

  render() {
    return (
      <header>
        <AppBar
          title={this.props.title}
          onLeftIconButtonTouchTap={this.handleToggle.bind(this)}/>
        <Drawer
          open={this.state.isDrawerOpen}
          docked={false}
          onRequestChange={(isDrawerOpen) => this.setState({isDrawerOpen})}>
          <Link
            to="/">
            <MenuItem
              onTouchTap={this.handleClose.bind(this)}>
              Manage Users
            </MenuItem>
          </Link>
          <Link
            to="profile">
            <MenuItem
              onTouchTap={this.handleClose.bind(this)}>
              Profile
            </MenuItem>
          </Link>
        </Drawer>
      </header>
    );
  }

}

Header.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired
};

export default Header;
