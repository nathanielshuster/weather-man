import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import styled from 'styled-components';

const Styles = styled.div`

`;

export const WeatherImage = (props) => {
  return (
    <Styles>
      <Row>
        <Col className="text-center">
          <Image
            className="mb-2"
            alt="Weather Icon"
            src={require('../assets/' + props.imageCode + '.jpg')} />
        </Col>
      </Row>
    </Styles>
  )
}
