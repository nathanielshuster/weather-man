import React from 'react'
import { Row, Col } from 'react-bootstrap'
import styled from 'styled-components';

const Styles = styled.div`
  .header {
    font-family: lust,serif;
    font-weight: 400;
    font-style: normal;
    color: #659DBD;
  }

  .sub {
    font-family: ff-tisa-web-pro, serif;
    font-weight: 400;
    font-style: normal;
    color: #659DBD;
  }
`;

export const PageHeader = (props) => {
  return (
    <Styles>
      <Row>
        <Col className="text-center">
          <h1 className="header">{props.header}</h1>
          <h5 className="sub">{props.sub}</h5>
        </Col>
      </Row>
    </Styles>
  )
}
