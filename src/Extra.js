import React, { Component } from 'react'

export default class Extra extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      name : 'hello'
    }
  }

  change = () => {
    this.setState({ name : 'how are you' });
  }

  render() {
    return (
      <center>
        <div>
          <div>
            <h1>{this.state.name}</h1>
            <button onClick={this.change}>Click </button>
          </div>
        </div>
      </center>
    )
  }
}
