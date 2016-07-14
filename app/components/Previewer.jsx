import React from 'react'
import ReactDOM from 'react-dom'
import marked from 'marked'
import hljs from 'highlight.js'

// Marked Configration
marked.setOptions({
  highlight: function(code) {
    return hljs.highlightAuto(code).value;
  }
})

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
          onChange={this.handleTextChange}
          rows="15"
          cols="40"
          autoFocus/>
        <div
          className="preview"
          dangerouslySetInnerHTML={this.markup()} />
      </div>
    )
  }
}
