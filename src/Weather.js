import React, { Component } from 'react'
import { Container, Row, Col, Table, Figure } from 'react-bootstrap'
import styled from 'styled-components';
import Day from './assets/01d.jpg'
import Night from './assets/01n.jpg'
import SunCloudD from './assets/02d.jpg'
import SunCloudN from './assets/02n.jpg'
import Cloudy from './assets/03d.jpg'
import Partly from './assets/04d.jpg'
import Rain from './assets/09d.jpg'
import RainD from './assets/10d.jpg'
import RainN from './assets/10n.jpg'
import Thunder from './assets/11d.jpg'
import Snow from './assets/13d.jpg'
import Mist from './assets/50d.jpg'

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

const WeatherIcon = {
  "01d": "Day",
  "01n": "Night",
  "02d": "SunCloudD",
  "02n": "SunCloudN",
  "03d": "Cloudy",
  "03n": "Cloudy",
  "04d": "Partly",
  "04n": "Partly",
  "09d": "Rain",
  "09n": "Rain",
  "10d": "RainD",
  "10n": "RainN",
  "11d": "Thunder",
  "11n": "Thunder",
  "13d": "Snow",
  "13n": "Snow",
  "50d": "Mist",
  "50n": "Mist"
}

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
                  src={Rain}
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
