import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { Menu, Dropdown, Image } from 'semantic-ui-react';
import gravatarUrl from 'gravatar-url';

// State - props.loggedIn - display different navbar depending on whetehr user is logged in or not

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /*setActiveItem(name) {
    this.setState({ activeItem: name })
  }
  */
  setActiveItem = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;
    const { user } = this.state
    return (
      <Menu pointing stackable>
        <Menu.Item 
          as={NavLink} 
          to="/dashboard" 
          name='psg'
          active={activeItem === 'psg'}
          onClick={this.setActiveItem}>
          PSG
        </Menu.Item>
        <Menu.Item 
          as={NavLink} 
          to="/dashboard/mlb" 
          name='mlb'
          active={activeItem === 'mlb'}
          onClick={this.setActiveItem}>
          MLB
        </Menu.Item>
        <Menu.Item 
          as={NavLink} 
          to="/dashboard/nba" 
          name='nba'
          active={activeItem === 'nba'}
          onClick={this.setActiveItem}>
          NBA
        </Menu.Item>
        <Menu.Item 
          as={NavLink} 
          to="/dashboard/nfl" 
          name='nfl'
          active={activeItem === 'nfl'}
          onClick={this.setActiveItem}>
          NFL
        </Menu.Item>
        <Menu.Item 
          as={NavLink} 
          to="/dashboard/nhl" 
          name='nhl'
          active={activeItem === 'nhl'}
          onClick={this.setActiveItem}>
          NHL
        </Menu.Item>

        <Menu.Menu position="right">
          <Dropdown trigger={<Image avatar src={gravatarUrl('itsjoshkim@gmail.com')} />}>
            <Dropdown.Menu>
              <Dropdown.Item as={NavLink} to="/dashboard/profile">Profile</Dropdown.Item>
              <Dropdown.Item onClick={console.log('add logout function')}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu> 
      </Menu> 
    );
  }
}

// export default connect()(NavbarApp);

// Going to add Avatar that has dropdown menu - profile, logout 
// http://jsfiddle.net/sgruenwald/2tt8f8xg/ Make dropdown hover only
// https://stackoverflow.com/questions/43479577/add-a-image-to-react-bootstrap-dropdown 
// User profile dropdown menu list using avatar
