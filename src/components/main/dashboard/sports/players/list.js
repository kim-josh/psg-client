import React from 'react';
import {connect} from 'react-redux'

import StatsModal from './stats-modal';

import Player from './player';

export class PlayerList extends React.Component {
  
  render() {
    const players = this.props.players.map((player, index) => 
      <li key={index}>
        <Player {...player} />
      </li>
    );
    return (
      <div className="playerlist-container">
        <ul className="list">
          {players}
        </ul>
      </div>
    );
  }
}

export default connect()(PlayerList);