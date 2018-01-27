import React from 'react';

import Following from '../following/following';
import SeasonStats from './stats';

export default class PlayersHome extends React.Component {
  render() {
    return (
      <div className='players-container'>
        <h2 className="sports-heading">{this.props.sports} Players</h2>
        <Following />
        <SeasonStats />
      </div>
    )
  }
}