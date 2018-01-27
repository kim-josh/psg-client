import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom';

import Home from './home';
import Profile from './profile';
import SportsPage from './sports';


export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        style: {}
    };
  }

  render() {
    return (
      <div className="dashboard">
          <Route exact path ="/dashboard" component={Home} />
          <Route exact path="/dashboard/mlb" component={SportsPage} />
          <Route exact path="/dashboard/nba" component={SportsPage} />
          <Route exact path="/dashboard/nfl" component={SportsPage} />
          <Route exact path="/dashboard/nhl" component={SportsPage} />
          <Route exact path ="/dashboard/profile" component={Profile} />
      </div>
    );
  }
}
