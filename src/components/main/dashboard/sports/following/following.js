import React from 'react';
import {connect} from 'react-redux';

import FollowingList from './list';
import Search from './search';

export default class Following extends React.Component {
  render() {
    return (
      <div className='players'>
        <h3 className='sports-heading'>Players Following></h3>
        <Search />
        <FollowingList />
      </div>
    );
  }
}

// export connect()(Players)