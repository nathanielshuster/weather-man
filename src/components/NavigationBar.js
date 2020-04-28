import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: white;
  }

  .navbar-brand, .navbar-nav .nav-link {
    color: #659DBD;

    &:hover {
      color: #4C768E;
    }
  }

  .nav-link {
    font-family: ff-tisa-web-pro, serif;
    font-weight: 400;
    font-style: normal;
  }

  .navbar-brand {
    font-family: lust,serif;
    font-weight: 400;
    font-style: normal;
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Weatherman</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
      </Nav>
    </Navbar>
  </Styles>
)
