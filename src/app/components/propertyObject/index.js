import React from 'react';

class PropertyObject extends React.Component {
  render() {
    return (
      <div className='props-container'>
        {this.props.currentEvent.name}
      </div>
    );
  }
}
export default PropertyObject;
