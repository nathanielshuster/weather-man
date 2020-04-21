import React from 'react'
import { Form, Button, InputGroup, Carousel, Image, Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components';
import mainIcon from './assets/home-icon.png'

const Styles = styled.div`
  .top {
    padding: 30px 0px 0px;
  }

  h1 {
    font-family: lust,serif;
    font-weight: 400;
    font-style: normal;
    color: #4C768E;
  }

  .input-group {
    padding: 30px 0px 28px;
    width: 35%;

    font-family: ff-tisa-web-pro, serif;
    font-weight: 400;
    font-style: normal;
  }
`;

export const Home = (props) => (
  <Styles>
    <Container>
      <Row>
        <Col>
          <h1 className="display-2 text-center top">Your Weather.</h1>
          <h1 className="display-2 text-center">Right Now.</h1>

          <Form className="d-flex justify-content-center" onSubmit={props.getWeather}>
            <InputGroup>
              <Form.Control id="zipCode" min="00000" max="99999" type="number" placeholder="Zip Code" />
              <InputGroup.Append>
                <Button type="submit" variant="outline-secondary">Go</Button>
              </InputGroup.Append>
            </InputGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  </Styles>
)

export default Home

// <Carousel>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src={cloudyBottom}
//       alt="Cloudy Sky"
//     />
//     <Carousel.Caption>
//       <h3>First slide label</h3>
//       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src={cloudyBottom}
//       alt="Second slide"
//     />
//
//     <Carousel.Caption>
//       <h3>Second slide label</h3>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src={cloudyBottom}
//       alt="Third slide"
//     />
//
//     <Carousel.Caption>
//       <h3>Third slide label</h3>
//       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
// </Carousel>
