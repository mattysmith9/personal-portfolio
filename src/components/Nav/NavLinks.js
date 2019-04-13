import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-decoration: none;
  font-weight: 200;
  font-family: 'Lato', sans-serif;
  color: #282E56;
`;

const NavLinks = () => (
  <Wrapper>
    <Link to="/homepage">about</Link>
    <Link to="/homepage">projects</Link>
    <Link to="/homepage">skills</Link>
    <Link to="/homepage">contact</Link>
  </Wrapper>
);

export default NavLinks;
