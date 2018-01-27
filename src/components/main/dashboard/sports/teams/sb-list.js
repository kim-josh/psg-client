import React from 'react';
import {connect} from 'react-redux';

import BoxScore from './box-score-modal';
import ScoreBoard from './score-board';

export default class ScoreBoardList extends React.Component {

  render() {
    const games = this.props.games.map((game, index) => 
      <li key={index}>
        <ScoreBoard {...game} />
      </li>
    );
    return (
      <div className="game-container">
        <ul className="game-list">
          {games}
        </ul>
      </div>
    );
  }
}

// export default connect()(ScoreBoardList);

// There should be 3 stages to box scores 
// pre-game, in-game, post-game - set up conditional logics

