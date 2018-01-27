import React, { Component } from 'react';
import {BrowserRouter as withRouter} from 'react-router-dom';

import Footer from './footer/';
import Header from './header/navbar-app';
import LandingPage from './landing-page';
import Main from './main/';


export default class App extends Component {
  render() {
    return (
      <section className="app">
        <Header />
        <Main /> 
        <Footer /> 
      </section>
    );
  }
}
