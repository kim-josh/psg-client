import React from 'react';
import {connect} from 'react-redux';

import ListItem from './list-items';
import FaMinusCircle from 'react-icons/lib/fa/minus-circle';

// import {addName} from '../../../../../actions';

export default class FollowingList extends React.Component {
  addListItem(name) {
    {/*this.props.dispatch(addName(name, this.props.index));*/}
  }
  deleteListItem(name) {

  }
  
  render() {
    const listItems = this.props.listItems.map((item, index) => 
      <li key={index}>
        <ListItem {...item} />
      </li>
    );    
    return (
      <div className="following-container">
        <h3>{this.props.title}</h3>
        <ul className="list">
          {listItems}
        </ul>
      </div>
    ); 
  }
}

// export default connect()(FollowingList);