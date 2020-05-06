import React from 'react'
import { Container, Row, Col, Table, Figure } from 'react-bootstrap'
import styled from 'styled-components';

const Styles = styled.div`
  .container {
    position: fixed;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  .display-3 {
    font-family: lust,serif;
    font-weight: 400;
    font-style: normal;
    color: #659DBD;
    font-size: 2.25em;
    margin: 0px;
  }

  .table {
    margin: auto;
    width: 30%;
    font-family: ff-tisa-web-pro, serif;
    font-weight: 400;
    font-style: normal;
    color: #659DBD;
  }

  .figure {
    margin: 0px;
    padding: 10px 0px;
  }

  .error-sub {
    font-family: ff-tisa-web-pro, serif;
    font-weight: 400;
    font-style: normal;
    font-size: 1.35em;
    color: #659DBD;
  }
`;

export const Weather = (props) => (
  <Styles>
    {!props.error ? (
      <Container>
        <Row>
          <Col className="text-center">
            <h1 className="display-3">{props.city}</h1>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <Figure>
              <Figure.Image
                alt="Weather Icon"
                src={require(`./assets/${props.imageCode}.jpg`)}
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
      </Container>
    ) : (
      <Container>
        <Row>
          <Col className="text-center">
            <h1 className="display-3">Sorry!</h1>
            <h1 className="error-sub">Couldn't locate area.</h1>
          </Col>
        </Row>
      </Container>
    )}
  </Styles>
)
