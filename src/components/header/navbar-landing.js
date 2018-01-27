import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Menu } from 'semantic-ui-react';

export default class NavbarLandingPage extends React.Component {
  render() {
    return (
      <Menu stackable>
        <Menu.Item as={Link} to="/">PSG</Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item as={Link} to="/login">Log In></Menu.Item>
          <Menu.Item as={Link} to="/signup">Sign Up></Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

// export default connect()(NavbarLandingPage);