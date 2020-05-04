import React from 'react'
import { Container, Row, Col, Table, Figure } from 'react-bootstrap'
import styled from 'styled-components';

const Styles = styled.div`
  .top {
    padding: 45px 0px 0px;
    font-family: lust,serif;
    font-weight: 400;
    font-style: normal;
    color: #659DBD;
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
    padding: 10px 0px 10px;
  }

  .error-sorry {
    padding: 150px 0px 0px;
    font-family: lust,serif;
    font-weight: 400;
    font-style: normal;
    color: #659DBD;
  }

  .error-sub, .description {
    font-family: ff-tisa-web-pro, serif;
    font-weight: 400;
    font-style: normal;
    color: #659DBD;
  }

  @media (max-width: 768px) {
    .top {
      font-size: 3.5rem;
    }

    .error-sorry {
      font-size: 3.5rem;
    }

    .error-sub {
      font-size: 2rem;
    }
  }
`;

export const Weather = (props) => (
  <Styles>
    {!props.error ? (
      <Container>
        <Row>
          <Col className="justify-content-center">
            <h1 className="display-3 text-center top">{props.city}</h1>
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
          <Col className="justify-content-center">
            <h1 className="display-3 text-center error-sorry">Sorry!</h1>
            <h1 className="text-center error-sub">We can't find that zip code right now.</h1>
          </Col>
        </Row>
      </Container>
    )}
  </Styles>
)
