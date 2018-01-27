import React from 'react';

import PlayersPage from './players';
import TeamsPage from './teams';


export default class SportsHome extends React.Component {
  render() {
    return (
      <section className="sports-home">
        <h2 className="sports-heading">{this.props.sports}</h2>
        <p className="sports-body">
          To get started, simply click on the players or teams tab. {"\n"}
          From there, you have the option of adding whichever player or team your following list. {"\n"}
          This provides you real-time updates for teams that are playing that day and players' season stats.           
        </p>
      </section>
    );
  }
}