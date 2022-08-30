import React, { Component } from 'react'
import Form from './Components/Form/form'

class App extends Component {
  state = {
    binary: ''
  }

  render() {
    return (
      <div className="container">
        <Form />
      </div>
    )
  }
}

export default App;
