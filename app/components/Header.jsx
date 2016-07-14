import React from 'react'
import ReactDOM from 'react-dom'

export default class Header extends React.Component {
  constructor() {
    super();
    this.close = this.close.bind(this);
  }

  close() {

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
