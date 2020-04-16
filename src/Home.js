import React from 'react'
import { Form, Button, InputGroup } from 'react-bootstrap'
import styled from 'styled-components';

const Styles = styled.div`
  .form-group {
    width: 35%;
  }

  .form-control {
    width: 100%;
  }
`;

export const Home = (props) => (
  <Styles>
    <Form onSubmit={props.getWeather}>
      <InputGroup className="mb-3">
        <Form.Control id="zipCode" min="00000" max="99999" type="number" placeholder="Zip Code" />
        <InputGroup.Append>
          <Button type="submit" variant="outline-secondary">Go</Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  </Styles>
)

export default Home
