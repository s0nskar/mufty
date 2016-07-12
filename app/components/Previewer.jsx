import React from 'react'
import ReactDOM from 'react-dom'

export default class Previewer extends React.Component {
  constructor() {
    super();
    this.handleTextChange = this.handleTextChange.bind(this);
    this.state = {text: ''}
  }

  handleTextChange(e) {
    this.setState({text: e.target.value})
  }

  render() {
    return (
      <div className="previewer">
        <textarea className="editor" onChange={this.handleTextChange} />
        <div className="preview">
          {this.state.text}
        </div>
      </div>
    )
  }
}
