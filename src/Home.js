import React from 'react'
import { Form, Button, InputGroup, Carousel } from 'react-bootstrap'
import styled from 'styled-components';
import cloudyBottom from './assets/clouds-bottom.jpg'

const Styles = styled.div`
  .input-group {
    padding: 28px 0px 28px;
    width: 35%;
  }
`;

export const Home = (props) => (
  <Styles>
    <Form className="d-flex justify-content-center" onSubmit={props.getWeather}>
      <InputGroup>
        <Form.Control id="zipCode" min="00000" max="99999" type="number" placeholder="Zip Code" />
        <InputGroup.Append>
          <Button type="submit" variant="outline-secondary">Go</Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>

    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cloudyBottom}
          alt="Cloudy Sky"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cloudyBottom}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cloudyBottom}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </Styles>
)

export default Home
