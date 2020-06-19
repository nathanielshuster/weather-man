import React, { useState } from 'react'
import { Row, Col, Form, Button, InputGroup } from 'react-bootstrap'
import { PageHeader } from './PageHeader'
import styled from 'styled-components';
import history from '../history/history'

const Styles = styled.div`
  .input-group {
    font-family: ff-tisa-web-pro, serif;
    font-weight: 400;
    font-style: normal;
  }

  .form-control {
    outline: none;
    box-shadow:none;
    border-color: #659DBD;
  }

  .btn {
    background-color: #659DBD;
    border-color: #659DBD;

    &:hover {
      background-color: #4C768E;
    }
  }
`;

export const Home = (props) => {
  const [zip, setZip] = useState(null)

  const handleChange = (e) => {
    setZip(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    history.push(`/${zip}`)
  }

  return (
    <Styles>
      <PageHeader header="WeatherMan" sub="Your weather. Right now."/>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <Form.Control
                id="zipCode"
                min="00000"
                max="99999"
                type="number"
                placeholder="Enter Zip Code"
                onChange={handleChange} />
              <InputGroup.Append>
                <Button className="shadow-none" type="submit">Go</Button>
              </InputGroup.Append>
            </InputGroup>
          </Form>
        </Col>
      </Row>
    </Styles>
  )
}
