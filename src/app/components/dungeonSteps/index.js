import React from 'react';

import EventBuilder from './eventBuilder/index';
import FunnelBuilder from './funnelBuilder/index';

class DungeonSteps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentStep: 'eventBuilder'};
  }

  render() {
    let currentStep;
    switch(this.state.currentStep) {
      case 'eventBuilder':
        currentStep = <EventBuilder
          events={this.props.events}
          modifyEvents={this.props.modifyEvents}/>;
        break;
      case 'funnelBuilder':
        currentStep = <FunnelBuilder
          events={this.props.events}
          modifyEvents={this.props.modifyEvents}/>;
        break;
      default:
        break;
    }

    return (
      <div className='step-container'>
        {currentStep}
      </div>
    );
  }
}
export default DungeonSteps;
