import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Link, Switch, withRouter} from 'react-router-dom';

import Dashboard from './dashboard/'
import LoginPage from './login-page/';
import SignupPage from './signup-page/';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        style: {}
    };
  }
  render() {
    return (
      <main role="main">
        <div className='main-container'>
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
        </div>
      </main>
    );
  }
}
