import React from 'react';
import Header from './Header.jsx';

class Layout extends React.Component {
  render() {
    var routesLastIndex = this.props.routes.length - 1;

    return (
      <div>
        <Header title={this.props.routes[routesLastIndex].title} />
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
