import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
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
    font-style: normal;
    color: #659DBD;
    font-size: 2.25em;
    margin: 0px;
  }

  .nomatch-sub {
    font-family: ff-tisa-web-pro, serif;
    font-weight: 400;
    font-style: normal;
    color: #659DBD;
    font-size: 1.35em;
  }

  @media only screen and (min-width: 768px) {
    .display-3 {
      font-size: 3.17em;
    }

    .nomatch-sub {
      font-size: 1.9em;
    }
  }
`;

export const NoMatch = () => (
  <Styles>
    <Container>
      <Row>
        <Col className="text-center">
          <h1 className="display-3">Sorry!</h1>
          <h1 className="nomatch-sub">That page doesn't exist.</h1>
        </Col>
      </Row>
    </Container>
  </Styles>
)
