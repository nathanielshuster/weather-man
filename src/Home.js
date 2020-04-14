import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

class Home extends Component {
  render () {
    return (
      <div>
        <Form onSubmit={this.props.getWeather}>
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

export default Home
