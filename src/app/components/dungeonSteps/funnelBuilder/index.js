import React from 'react';

class FunnelBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div className='create-funnel-container'>
        Funnel Builder!
      </div>
    );
  }
}
export default FunnelBuilder;
