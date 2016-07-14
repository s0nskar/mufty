import React from 'react'
import ReactDOM from 'react-dom'

const ipcRenderer = window.require('electron').ipcRenderer;

export default class Header extends React.Component {
  constructor() {
    super();
    this.close = this.close.bind(this);
  }

  close() {
    ipcRenderer.send('close');
  }

  render() {
    return (
      <header>
        <h1>Mufty</h1>
        <div className="btns-header">
          <button onClick={this.close}>Close</button>
          <button onClick={this.close}>Close</button>
          <button onClick={this.close}>Close</button>
        </div>
      </header>
    )
  }
}
