import React from 'react';
import { Form, Button } from 'react-bootstrap';

export const Home = (props) => (
  <div>
    <Form onSubmit={props.getZip}>
      <Form.Group controlId="zipCode">
        <Form.Control min="00000" max="99999" type="number" placeholder="Enter Zip Code" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form>
  </div>
)
