import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { history } from './history';
import { Home } from './Home';
import { About } from './About';
import { Weather } from './Weather';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar'
import { Jumbotron } from './components/Jumbotron'


const API_KEY = "bc56cc6b51e6d5970645d40b8f469a84";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { zipCode: undefined };
  }

  getZip = (e) => {
    e.preventDefault();
    const zip = e.target.zipCode.value
    this.setState({ zipCode: zip })
    this.props.history.push(`/weather/${this.state.zipCode}`)
  };

  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Jumbotron />
        <Layout>
          <Router history={history}>
            <Switch>
              <Route exact path="/" render={(props) => <Home getZip={this.getZip} />} />
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

export default App;
