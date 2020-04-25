import React from 'react';
import styled from 'styled-components';
import { Nav, Navbar } from 'react-bootstrap';

const Styles = styled.div`
  .navbar {
    background-color: white;
    padding: 8px 0px 8px
  }

  .nav-link {
    color: #659DBD;
    font-family: ff-tisa-web-pro, serif;
    font-weight: 400;
    font-style: normal;

    &:hover {
      color: #4C768E;
    }
  }
`;

export const Footer = () => (
  <Styles>
    <Navbar expand="lg" className="fixed-bottom">
      <Nav.Item className="mr-auto"><Nav.Link href="/">&copy; 2020 Weatherman</Nav.Link></Nav.Item>
      <Nav.Item className="ml-auto"><Nav.Link target="_blank" href="https://github.com/nateshuster/weather-man">GitHub</Nav.Link></Nav.Item>
    </Navbar>
  </Styles>
)
