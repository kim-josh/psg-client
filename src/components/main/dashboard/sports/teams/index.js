import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom';

import BoxScore from './box-score-modal';
import TeamsHome from './home';

export default class TeamsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        style: {}
    };
  }
  render() {
    return (
      <div className='teams'>
          <Route exact path="/dashboard/mlb/teams" component={TeamsHome} />
          <Route exact path="/dashboard/mlb/teams/:gameid" component={BoxScore} />
          <Route exact path="/dashboard/nba/teams" component={TeamsHome} />
          <Route exact path="/dashboard/nba/teams/:gameid" component={BoxScore} />
          <Route exact path="/dashboard/nfl/teams" component={TeamsHome} />
          <Route exact path="/dashboard/nfl/teams/:gameid" component={BoxScore} />
          <Route exact path="/dashboard/nhl/teams" component={TeamsHome} />
          <Route exact path="/dashboard/nhl/teams/:gameid" component={BoxScore} />
      </div>
    );
  }
}