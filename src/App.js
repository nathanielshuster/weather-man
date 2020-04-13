import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import { About } from './About'
import Weather from './Weather'
import { NoMatch } from './NoMatch'
import { Layout } from './components/Layout'
import { NavigationBar } from './components/NavigationBar'
import { Jumbotron } from './components/Jumbotron'

class App extends Component {
  state = { zipCode: undefined }

  getZip = (e) => {
    e.preventDefault()
    const zip = e.target.zipCode.value
    this.setState({ zipCode: zip })
  }

  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Jumbotron />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" render={(props) => <Home getZip={this.getZip} zip={this.state.zipCode} />} />
              <Route exact path="/weather/:zipCode" component={Weather} />
              <Route exact path="/about" component={About} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    )
  }
}

export default App
