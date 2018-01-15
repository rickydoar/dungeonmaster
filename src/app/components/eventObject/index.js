import React from 'react';

class EventObject extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='create-funnel-container'>
        {this.props.currentEvent.name}
      </div>
    );
  }
}
export default EventObject;
