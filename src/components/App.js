import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { withRouter, Redirect } from "react-router"
import { Home } from './Home'
import { Weather } from './Weather'
import { Layout } from './Layout'
import { NavigationBar } from './NavigationBar'
import { Footer } from './Footer'

const App = (props) => {
  return (
    <React.Fragment>
      <NavigationBar />
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:zipCode" component={Weather} />
            <Route exact path="/:zipCode/error" component={Weather} />
            <Redirect from="*" to="/" />
          </Switch>
        </Layout>
      <Footer />
    </React.Fragment>
  )
}

export default withRouter(App)
