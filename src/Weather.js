import React, { Component } from 'react'

class Weather extends Component {
  componentDidMount() {
    console.log(this.props)
  }

  render () {
    return (
      <div>
        Results
      </div>
    )
  }
}

export default Weather
