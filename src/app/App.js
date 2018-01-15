import React, { Component } from 'react';
import DungeonSteps from './components/dungeonSteps/index'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {events: {}};
    this.modifyEvents = this.modifyEvents.bind(this);
  }

  modifyEvents(events) {
    this.setState({events});
    console.log(this.state.events);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src='https://static.segment.com/app/4.207.0/logos/segment-logo.svg' className="App-logo" alt="logo" />
          <div className="App-title-container">
            <div className="App-title-text">Dungeonmaster</div>
          </div>
        </header>
        <div className="App-body">
          <DungeonSteps
            events={this.state.events}
            modifyEvents={this.modifyEvents}/>
        </div>
      </div>
    );
  }
}

export default App;
