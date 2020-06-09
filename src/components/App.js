import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { withRouter, Redirect } from "react-router"
import { Home } from './Home'
import { Weather } from './Weather'
import { Layout } from './Layout'
import { NavigationBar } from './NavigationBar'
import { Footer } from './Footer'

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      city: undefined,
      temperature: undefined,
      feelsLike: undefined,
      high: undefined,
      low: undefined,
      imageCode: undefined,
      error: undefined
    };
  }

  getWeather = (e) => {
    e.preventDefault()
    this.setState({ isLoading: true });
    const zip = e.target.zipCode.value
    this.props.history.push(`/weather/${zip}`)
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${API_KEY}&units=imperial`
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => this.setState({
        isLoading: false,
        city: data.name,
        temperature: Math.round(data.main.temp),
        feelsLike: Math.round(data.main.feels_like),
        high: Math.round(data.main.temp_max),
        low: Math.round(data.main.temp_min),
        imageCode: data.weather[0].icon
      }))
      .catch((error) => {
        this.setState({
          isLoading: false,
          error: true
        })
      });
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
              {
                !this.state.isLoading ?
                <Route exact path="/weather/:zipCode" render={(props) =>
                  <Weather
                    city={this.state.city}
                    temperature={this.state.temperature}
                    feelsLike={this.state.feelsLike}
                    high={this.state.high}
                    low={this.state.low}
                    imageCode={this.state.imageCode}
                    error={this.state.error}
                  />}
                /> : <React.Fragment>{null}</React.Fragment>
              }
              <Redirect from="*" to="/" />
            </Switch>
          </Layout>
        <Footer />
      </React.Fragment>
    )
  }
}

export default withRouter(App)
