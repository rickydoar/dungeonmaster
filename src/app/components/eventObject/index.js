import React from 'react';

import PropertyObject from '../propertyObject/index'

class EventObject extends React.Component {
  render() {
    const properties = this.props.currentEvent.properties;
    const event = this.props.currentEvent.name;
    return (
      <div className='event-object-container'>
        <div className='event-object segment-button segment-white'>
          {this.props.currentEvent.name}
        </div>
        <div className='properties-container'>
          {Object.keys(properties).map(property => {
              return (
                <PropertyObject
                  key={property}
                  currentEvent={event}
                  currentProperty={property}
                  events={this.props.events}
                  modifyEvents={this.props.modifyEvents}/>
              )
            }, this)}
        </div>
      </div>
    );
  }
}
export default EventObject;
