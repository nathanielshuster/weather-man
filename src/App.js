import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { withRouter, Redirect } from "react-router"

import { NavigationBar } from './components/NavigationBar'
import { Layout } from './components/Layout'

import { Home } from './routes/Home'
import { Weather } from './routes/Weather'
import { NoWeather } from './routes/NoWeather'

import { Footer } from './components/Footer'

const App = (props) => {
  return (
    <React.Fragment>
      <NavigationBar />
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:zipCode" component={Weather} />
            <Route exact path="/:zipCode/error" component={NoWeather} />
            <Redirect from="*" to="/" />
          </Switch>
        </Layout>
      <Footer />
    </React.Fragment>
  )
}

export default withRouter(App)
