import React from 'react';

import InputSave from '../../inputSave/index';
import EventObject from '../../eventObject/index';

class EventBuilder extends React.Component {
  render() {
    return (
      <div className='create-event-container'>
        <div className='create-event-header'>Create Events</div>
        <InputSave
          text='Save event'
          events={this.props.events}
          modifyEvents={this.props.modifyEvents}/>
        <div className='events-container'>
          {Object.keys(this.props.events).map(event => {
            return (
              <EventObject
                key={event}
                currentEvent={this.props.events[event]}
                events={this.props.events}
                modifyEvents={this.props.modifyEvents}/>
            )
          }, this)}
        </div>
      </div>
    );
  }
}
export default EventBuilder;
