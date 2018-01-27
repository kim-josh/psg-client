import React from 'react';

import Following from '../following/following';
import Games from './games';

export default class TeamsHome extends React.Component {
  render() {
    return (
      <div className='teams-container'>
        <h2 className='sports-heading'>{this.props.sports} Teams</h2>
        <Following />
        <Games />
      </div>
    );
  }
}