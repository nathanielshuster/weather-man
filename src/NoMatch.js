import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components';

const Styles = styled.div`
  .top {
    padding: 150px 0px 0px;
    font-family: lust,serif;
    font-weight: 400;
    font-style: normal;
    color: #659DBD;
  }

  .bottom {
    font-family: ff-tisa-web-pro, serif;
    font-weight: 400;
    font-style: normal;
    color: #659DBD;
  }

  @media (max-width: 600px) {
    .top {
      font-size: 3.5rem;
    }

    .bottom {
      font-size: 2rem;
    }
  }
`;

export const NoMatch = () => (
  <Styles>
    <Container>
      <Row>
        <Col>
          <h1 className="display-3 text-center top">Sorry!</h1>
          <h1 className="text-center bottom">That page doesn't exist.</h1>
        </Col>
      </Row>
    </Container>
  </Styles>
)
