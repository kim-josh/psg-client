import React from 'react';

export default function Player(props) {
    return (  
      <div className="player-container">
        {props.playerName}
        {props.teamName}
      </div>
    );
}