import React, { Component } from 'react'
import { Container, Row, Col, Table, Figure } from 'react-bootstrap'
import styled from 'styled-components';

const Styles = styled.div`
  .top {
    padding: 40px 0px 0px;
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
    padding: 20px 0px 10px;
  }
`;

class Weather extends Component {
  render () {
    return (
      <Styles>
        <Container>
          <Row>
            <Col className="justify-content-center">
              <h1 className="text-center top">Weather in {this.props.city}.</h1>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              <Figure>
                <Figure.Image
                  alt="Weather Icon"
                  src={require(`./assets/${this.props.imageCode}.jpg`)}
                />
              </Figure>
            </Col>
          </Row>
          <Row>
            <Col>
              <Table hover>
                <tbody>
                  <tr>
                    <td>Temperature:</td>
                    <td className="text-right">{this.props.temperature}&deg;F</td>
                  </tr>
                  <tr>
                    <td>Feels Like:</td>
                    <td className="text-right">{this.props.feelsLike}&deg;F</td>
                  </tr>
                  <tr>
                    <td>High:</td>
                    <td className="text-right">{this.props.high}&deg;F</td>
                  </tr>
                  <tr>
                    <td>Low:</td>
                    <td className="text-right">{this.props.low}&deg;F</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </Styles>
    )
  }
}

export default Weather
