import React from 'react'
import ReactDOM from 'react-dom'
import FontAwesome from 'react-fontawesome'

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
          <FontAwesome
            name='close'
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            onClick={this.close} />
          <FontAwesome
            name='close'
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            onClick={this.close} />
          <FontAwesome
            name='close'
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            onClick={this.close} />
        </div>
      </header>
    )
  }
}
