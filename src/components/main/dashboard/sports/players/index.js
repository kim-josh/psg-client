import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom';

import PlayersHome from './home';
import StatsModal from './stats-modal';

export default class PlayersPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        style: {}
    };
  }
  render() {
    return (
      <div className='players'>
          <Route exact path="/dashboard/mlb/players" component={PlayersHome} />
          <Route exact path="/dashboard/mlb/players/:player" component={StatsModal} />
          <Route exact path="/dashboard/nba/players" component={PlayersHome} />
          <Route exact path="/dashboard/nba/players/:player" component={StatsModal} />
          <Route exact path="/dashboard/nfl/players" component={PlayersHome} />
          <Route exact path="/dashboard/nfl/players/:player" component={StatsModal} />
          <Route exact path="/dashboard/nhl/players" component={PlayersHome} />
          <Route exact path="/dashboard/nhl/players/:player" component={StatsModal} />
      </div>
    );
  }
}