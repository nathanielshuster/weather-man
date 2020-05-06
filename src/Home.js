import React from 'react'
import { Form, Button, InputGroup, Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components';

const Styles = styled.div`
  .container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .display-3 {
    font-family: lust,serif;
    font-weight: 400;
    font-size: 2.25em;
    font-style: normal;
    color: #659DBD;
    margin: 0px;
  }

  .slogan {
    font-family: ff-tisa-web-pro, serif;
    font-weight: 400;
    font-style: normal;
    font-size: 1.35em;
    color: #659DBD;
    margin: 0px 0px 15px;
  }

  .input-group {
    padding: 15px 0px 0px;
    font-family: ff-tisa-web-pro, serif;
    font-weight: 400;
    font-style: normal;
    width: 250px;
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

  @media only screen and (min-width: 768px) {
    .display-3 {
      font-size: 3.17em;
    }

    .slogan {
      font-size: 1.9em;
    }

    .input-group {
      width: 350px;
    }
  }
`;

export const Home = (props) => (
  <Styles>
    <Container>
      <Row>
        <Col className="text-center">
          <h1 className="display-3">Weatherman</h1>
          <h1 className="slogan">Your Weather. Right Now.</h1>

          <Form className="d-flex justify-content-center" onSubmit={props.getWeather}>
            <InputGroup>
              <Form.Control id="zipCode" min="00000" max="99999" type="number" placeholder="Zip Code" />
              <InputGroup.Append>
                <Button type="submit">Go</Button>
              </InputGroup.Append>
            </InputGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  </Styles>
)
