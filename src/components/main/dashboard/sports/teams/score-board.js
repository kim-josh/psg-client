import React from 'react';

export default function ScoreBoard(props) {
    return (
      <div className="game-container">
        <div className="game-time">
          {props.gameTime}
        </div>
        <div className="game-teams">
          <div className="home-team">
            {props.homeTeam}
            {props.homeRecord}
          </div>
          <div className="away-team">
            {props.awayTeam}
            {props.awayRecord}
          </div>
        </div>
      </div>
    );
}
