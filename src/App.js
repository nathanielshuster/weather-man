import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { withRouter } from "react-router"
import { Home } from './Home'
import { About } from './About'
import Weather from './Weather'
import { NoMatch } from './NoMatch'
import { Layout } from './components/Layout'
import { NavigationBar } from './components/NavigationBar'
import { Footer } from './components/Footer'
import { Container, Row, Col } from 'react-bootstrap'

const API_KEY = "bc56cc6b51e6d5970645d40b8f469a84"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      zipCode: undefined,
      city: undefined,
      description: undefined,
      temperature: undefined,
      feelsLike: undefined,
      high: undefined,
      low: undefined,
      windSpeed: undefined,
      error: undefined
    };
  }

  getWeather = (e) => {
    e.preventDefault()
    const zip = e.target.zipCode.value
    this.props.history.push(`/weather/${zip}`)
    const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${API_KEY}&units=imperial`
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({
        zipCode: zip,
        city: data.name,
        description: data.weather[0].main,
        temperature: data.main.temp,
        feelsLike: data.main.feels_like,
        high: data.main.temp_min,
        low: data.main.temp_max,
        windSpeed: data.wind.speed
      }))
  }

  render() {
    return (
      <React.Fragment>
        <NavigationBar />
          <Layout>
            <Switch>
              <Route exact path="/" render={() =>
                <Home
                  getWeather={this.getWeather}
                />}
              />
              <Route exact path="/weather/:zipCode" render={() =>
                <Weather
                  zipCode={this.state.zipCode}
                  city={this.state.city}
                  description={this.state.description}
                  temperature={this.state.temperature}
                  feelsLike={this.state.feelsLike}
                  high={this.state.high}
                  low={this.state.low}
                  windSpeed={this.state.windSpeed}
                />}
              />
              <Route exact path="/about" component={About} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
        <Footer />
      </React.Fragment>
    )
  }
}

export default withRouter(App)
