import React from 'react'
import { Row, Col, Figure } from 'react-bootstrap'
import styled from 'styled-components';

const Styles = styled.div`

`;

export const WeatherImage = (props) => {
  return (
    <Styles>
      <Row>
        <Col>
          <Figure>
            <Figure.Image
              alt="Weather Icon"
              src={props.img}
            />
          </Figure>
        </Col>
      </Row>
    </Styles>
  )
}
