import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Table,
  TableHeader,
  TableHeaderColumn,
  TableBody,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import { mapStateToProps, mapDispatchToProps } from './actions.jsx'

import getMuiTheme from 'material-ui/styles/getMuiTheme';
const baseTheme = require('material-ui/styles/baseThemes/lightBaseTheme');

class ManageUsers extends React.Component {

  constructor(props) {
    super(props);
  }

  getChildContext() {
    return {
      muiTheme: getMuiTheme(baseTheme)
    };
  }

  test() {
    // console.log(this.props.profile);
    // this.props.profile.dispatch({type:'TEST'});
    return this.props.profile.map((user, key) => {
      return (
        <TableRow key={key + 1}>
          <TableRowColumn>{key + 1}</TableRowColumn>
          <TableRowColumn>{user.name}</TableRowColumn>
          <TableRowColumn>{user.status}</TableRowColumn>
        </TableRow>
      );
    })
  }

  render() {
    return (
      <div
        className='content-wrap'>
        <h1>ManageUsers</h1>
        <Table
          selectable={false}>
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Username</TableHeaderColumn>
              <TableHeaderColumn>Password</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={false}>
            {this.test()}
          </TableBody>
        </Table>
      </div>
    );
  }

}

ManageUsers.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired
};

export default connect(mapStateToProps)(ManageUsers);
