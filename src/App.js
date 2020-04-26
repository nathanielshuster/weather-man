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

const API_KEY = "bc56cc6b51e6d5970645d40b8f469a84"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      city: undefined,
      temperature: undefined,
      feelsLike: undefined,
      high: undefined,
      low: undefined,
      image: undefined,
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
        city: data.name,
        temperature: Math.round(data.main.temp),
        feelsLike: Math.round(data.main.feels_like),
        high: Math.round(data.main.temp_max),
        low: Math.round(data.main.temp_min),
        image: data.weather[0].icon
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
                  city={this.state.city}
                  temperature={this.state.temperature}
                  feelsLike={this.state.feelsLike}
                  high={this.state.high}
                  low={this.state.low}
                  image={this.state.image}
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
