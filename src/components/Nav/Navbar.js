import React from 'react';
import { Link } from 'gatsby';
import { Container } from '../../styled/Container';
import NavLinks from './NavLinks';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #ff5e5b;
  a {
    color: #282e56;
    font-size: 1.3rem;
    padding: 0.5rem 0.7rem;
    font-weight: 200;
    font-family: 'Nunito Sans', sans-serif;
  }
  a:hover {
    transform: scale(1.125);
    transition: ease-in-out;
  }
`;

const Navbar = () => (
  <Wrapper as={Container}>
    <Link to="/">mattySmith</Link>
    <NavLinks />
  </Wrapper>
);

export default Navbar;
