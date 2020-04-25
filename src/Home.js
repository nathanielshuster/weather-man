import React from 'react'
import { Form, Button, InputGroup, Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components';

const Styles = styled.div`
  .top {
    padding: 130px 0px 0px;
    font-family: lust,serif;
    font-weight: 400;
    font-style: normal;
    color: #659DBD;
  }

  .slogan {
    font-family: ff-tisa-web-pro, serif;
    font-weight: 400;
    font-style: normal;
    color: #659DBD;
  }

  .input-group {
    padding: 30px 0px 0px;
    width: 35%;
    font-family: ff-tisa-web-pro, serif;
    font-weight: 400;
    font-style: normal;
  }

  .form-control {
    border-color: #659DBD;
  }

  .btn {
    background-color: #659DBD;
    border-color: #659DBD;

    &:hover {
      background-color: #4C768E;
    }
  }

  @media (max-width: 600px) {
    .top {
      font-size: 3.5rem;
    }

    .slogan {
      font-size: 2rem;
    }
  }
`;

export const Home = (props) => (
  <Styles>
    <Container>
      <Row>
        <Col>
          <h1 className="display-3 text-center top">Weatherman</h1>
          <h1 className="text-center slogan">Your Weather. Right Now.</h1>

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
