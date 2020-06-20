import React from 'react'
import { Row, Col, Figure, Table } from 'react-bootstrap'
import { PageHeader } from './PageHeader'

export const Result = (props) => {
  const images = require.context('../assets', true);
  return (
    <>
    { props.data.hasError ? <PageHeader header="Sorry!" sub="No results found."/> :
      <>
      <PageHeader header={props.data.city} />
      <Row>
        <Col>
          <Figure>
            <Figure.Image
              alt="Weather Icon"
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
                <td className="text-right">{props.data.temperature}&deg;F</td>
              </tr>
              <tr>
                <td>Feels Like:</td>
                <td className="text-right">{props.data.feelsLike}&deg;F</td>
              </tr>
              <tr>
                <td>High:</td>
                <td className="text-right">{props.data.high}&deg;F</td>
              </tr>
              <tr>
                <td>Low:</td>
                <td className="text-right">{props.data.low}&deg;F</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      </>
    }
    </>
  )
}
