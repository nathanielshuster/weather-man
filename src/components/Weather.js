import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Table, Figure } from 'react-bootstrap'
import styled from 'styled-components';

const Styles = styled.div`
  .table {
    font-family: ff-tisa-web-pro, serif;
    font-weight: 400;
    font-style: normal;
    color: #659DBD;
  }

  .error-sub {
    font-family: ff-tisa-web-pro, serif;
    font-weight: 400;
    font-style: normal;
    color: #659DBD;
  }
`;

export const Weather = (props) => {
  useEffect(() => {

  }, []);

  return (
    <Styles>
      <Row>
        <Col className="d-flex justify-content-center">
          <Figure>
            <Figure.Image
              alt="Weather Icon"
              src={require(`../assets/${props.imageCode}.jpg`)}
            />
          </Figure>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table>
            <tbody>
              <tr>
                <td>Temperature:</td>
                <td className="text-right">{props.temperature}&deg;F</td>
              </tr>
              <tr>
                <td>Feels Like:</td>
                <td className="text-right">{props.feelsLike}&deg;F</td>
              </tr>
              <tr>
                <td>High:</td>
                <td className="text-right">{props.high}&deg;F</td>
              </tr>
              <tr>
                <td>Low:</td>
                <td className="text-right">{props.low}&deg;F</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Styles>
  )
}

// <Row>
//   <Col className="text-center">
//     <h1 className="display-3">Sorry!</h1>
//     <h1 className="error-sub">Couldn't locate area.</h1>
//   </Col>
// </Row>
