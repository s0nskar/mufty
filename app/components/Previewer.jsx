import React from 'react'
import ReactDOM from 'react-dom'
import marked from 'marked'

export default class Previewer extends React.Component {
  constructor() {
    super();
    this.handleTextChange = this.handleTextChange.bind(this);
    this.markup = this.markup.bind(this);
    this.state = {text: ''}
  }

  handleTextChange(e) {
    this.setState({text: e.target.value})
  }

  markup() {
    return { __html: marked(this.state.text)}
  }

  render() {
    return (
      <div className="previewer">
        <textarea
          className="editor"
          onChange={this.handleTextChange} />
        <div
          className="preview"
          dangerouslySetInnerHTML={this.markup()} />
      </div>
    )
  }
}
