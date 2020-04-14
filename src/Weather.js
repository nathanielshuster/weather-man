import React, { Component } from 'react'

class Weather extends Component {
  componentDidMount() {
    console.log(this.props)
  }

  render () {
    return (
      <div>
        {this.props.city}
      </div>
    )
  }
}

export default Weather
