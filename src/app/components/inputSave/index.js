import React from 'react';

class InputSave extends React.Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
    this.updateInputText = this.updateInputText.bind(this);
    this.state = {saveDisabled: true, inputText: ''};
  }

  handleSave() {
    const name = this.textInput.value;
    if (name in this.props.events) {
      alert('Event already exists');
    } else if (!this.state.saveDisabled) {
      this.props.events[name] = {name, properties: {}};
      this.props.modifyEvents(this.props.events);
    }
    this.resetSave();
  }

  resetSave() {
    this.textInput.value = '';
    this.setState({
      inputText: '',
      saveDisabled: true,
    });
  }

  updateInputText(e) {
    const inputText = e.target.value;
    const saveDisabled = inputText === '';
    this.setState({
      inputText: e.target.value,
      saveDisabled,
    });
  }

  render() {
    return (
      <div className='create-container'>
        <input
          type="text"
          ref={(input) => { this.textInput = input; }}
          onChange={this.updateInputText}/>
        <div className={'save-button segment-button segment-green' + (this.state.saveDisabled ? ' save-disabled' : '')} onClick={this.handleSave}>
          <div className='button-text'>{this.props.text}</div>
        </div>
      </div>
    );
  }
}
export default InputSave;
