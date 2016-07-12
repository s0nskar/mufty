import React from 'react'
import ReactDOM from 'react-dom'

import Header from './Header.jsx'
import Previewer from './Previewer.jsx'
import Footer from './Footer.jsx'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Previewer />
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
