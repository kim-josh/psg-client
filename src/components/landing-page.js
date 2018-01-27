import React from 'react';
import {BrowserRouter as Redirect} from 'react-router-dom';
import NavbarLanding from './header/navbar-landing';
import FaAngleDoubleDown from 'react-icons/lib/fa/angle-double-down';

export default class LandingPage extends React.Component {

  render() {
    return (
          <div className='landing-page'>
            <h1>Professional Sports Guradian</h1>
          </div>
    );
  }
}