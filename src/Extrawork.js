import React, { Component } from 'react'

export default class Extrawork extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: 'Deeep'
    }
  }

  changethat = () => {
    this.setState({ name: 'Deep' })
  }

  render() {

    return (
      <center>
        <div>
          <h2>{this.state.name}</h2>
          <button onClick={this.changethat}>Click Me !!</button>
        </div>
      </center>
    )

  }

}
