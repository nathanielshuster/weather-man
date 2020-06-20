import React from 'react'
import { Row, Col, Table } from 'react-bootstrap'
import styled from 'styled-components';

const Styles = styled.div`

`;

export const WeatherTable = (props) => {
  return (
    <Styles>
      <Row>
        <Col>
          <Table>
            <tbody>
              <tr>
                <td>Temperature:</td>
                <td className="text-right">{props.temp}&deg;F</td>
              </tr>
              <tr>
                <td>Feels Like:</td>
                <td className="text-right">{props.feels}&deg;F</td>
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
