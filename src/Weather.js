import React, { Component } from 'react'

const API_KEY = "bc56cc6b51e6d5970645d40b8f469a84"

class Weather extends Component {
  state = {
    weather: undefined
  }

  componentDidMount() {
    const zipCode = this.props.match.params.zipCode
    const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${API_KEY}&units=imperial`
    fetch(url)
      .then(response => response.json())
      .then(data => console.log(data))
      .then(data =>
        this.setState({
          weather: data
        })
      )
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
