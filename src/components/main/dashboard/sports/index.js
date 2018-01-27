import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom';

import PlayersPage from './players';
import SportsHome from './home';
import TeamsPage from './teams';

export default class SportsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        style: {}
    };
  }

  render() {
    return (
      <div className='sports'>
          <Route exact path="/dashboard/mlb" component={SportsHome} />
          <Route exact path="/dashboard/mlb/players" component={PlayersPage} />
          <Route exact path="/dashboard/mlb/teams" component={TeamsPage} />
          <Route exact path="/dashboard/nba" component={SportsHome} />
          <Route exact path="/dashboard/nba/players" component={PlayersPage} />
          <Route exact path="/dashboard/nba/teams" component={TeamsPage} />
          <Route exact path="/dashboard/nfl" component={SportsHome} />
          <Route exact path="/dashboard/nfl/players" component={PlayersPage} />
          <Route exact path="/dashboard/nfl/teams" component={TeamsPage} />
          <Route exact path="/dashboard/nhl" component={SportsHome} />
          <Route exact path="/dashboard/nhl/players" component={PlayersPage} />
          <Route exact path="/dashboard/nhl/teams" component={TeamsPage} />
      </div>
    );
  }
}