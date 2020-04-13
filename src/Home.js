import React, { Component } from 'react'
import { withRouter } from "react-router"
import { Form, Button } from 'react-bootstrap'

class Home extends Component {
  componentDidUpdate() {
    this.props.history.push(`/weather/${this.props.zip}`)
  }

  render () {
    return (
      <div>
        <Form onSubmit={this.props.getZip}>
          <Form.Group controlId="zipCode">
            <Form.Control min="00000" max="99999" type="number" placeholder="Enter Zip Code" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Search
          </Button>
        </Form>
      </div>
    )
  }
}

export default withRouter(Home)
