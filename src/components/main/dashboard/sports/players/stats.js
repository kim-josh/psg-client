import React from 'react';

import PlayerList from './list';
import SelectDate from '../following/select-date';

export default class SeasonStats extends React.Component {
  render() {
    return (
      <div>
        <SelectDate />
        <PlayerList />
      </div>
    );
  }
}