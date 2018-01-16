import React from 'react';

class PropertyObject extends React.Component {
  render() {
    return (
      <div className='create-funnel-container'>
        {this.props.currentEvent.name}
      </div>
    );
  }
}
export default PropertyObject;
