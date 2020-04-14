import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { withRouter, Redirect } from "react-router"
import Home from './Home'
import { About } from './About'
import Weather from './Weather'
import { NoMatch } from './NoMatch'
import { Layout } from './components/Layout'
import { NavigationBar } from './components/NavigationBar'
import { Jumbotron } from './components/Jumbotron'

const API_KEY = "bc56cc6b51e6d5970645d40b8f469a84"

class App extends Component {
  state = {
    zipCode: undefined,
    city: undefined
  }

  getWeather = (e) => {
    e.preventDefault()
    const zip = e.target.zipCode.value
    // this.props.history.push(`/weather/${zip}`)
    const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${API_KEY}&units=imperial`
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Something went wrong ...')
        }
      })
      .then(data => console.log(data))
      .then(data => this.setState({
        zipCode: zip,
        city: data.name
      }))
      .catch(error => this.setState({ error }))
    <Redirect to=`/weather/${zip}` />
  }

  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Jumbotron />
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
              />}
            />
            <Route exact path="/about" component={About} />
            <Route component={NoMatch} />
          </Switch>
        </Layout>
      </React.Fragment>
    )
  }
}

export default App
