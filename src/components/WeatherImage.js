import React from 'react'
import { Row, Col, Figure } from 'react-bootstrap'
import styled from 'styled-components';

const Styles = styled.div`

`;

export const WeatherImage = (props) => {
  return (
    <Styles>
      <Row>
        <Col className="justify-content-center">
          <Figure>
            <Figure.Image
              alt="Weather Icon"
              src={require('../assets/' + props.imageCode + '.jpg')}
            />
          </Figure>
        </Col>
      </Row>
    </Styles>
  )
}
