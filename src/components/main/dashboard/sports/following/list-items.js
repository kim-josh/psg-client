import React from 'react';

export default function ListItem(props) { 
    return (
      <div className="list-item">
        {props.name}
      </div>
    );
}

// Include props.onRemove to add a remove item option