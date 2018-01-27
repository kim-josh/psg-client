import React from 'react';

import ScoreBoardList from './sb-list';
import SelectDate from '../following/select-date';

export default class Games extends React.Component {
  render() {
    return (
      <div>
        <SelectDate />
        <ScoreBoardList />
      </div>
    );
  }
}