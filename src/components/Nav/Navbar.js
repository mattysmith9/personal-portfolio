import React from 'react';
import { Link } from 'gatsby';
import { NavLinks } from './NavLinks';
import { theme, Container } from '@style';
import styled from 'styled-components';

const { colors } = theme;

const Wrapper = styled.div`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    color: ${colors.green};
    font-size: 3.1em;
    font-weight: bold;
    font-family: ${theme.fontFamily};
    background: ${colors.body};
    padding: 0.1em 0.4em;
    border-radius: ${theme.borderRadiusBtn};
    border-bottom: 2px solid ${colors.blue};
    border-left: 2px solid ${colors.blue};
    border-top: 2px solid ${colors.blue};
    border-right: 2px solid ${colors.blue};
  }
  span:hover {
    transform: ${theme.transform};
    transition: ${theme.transition};
    color: ${colors.orange};
    box-shadow: ${theme.boxShadow};
  }
`;

const Navbar = () => (
  <Wrapper as={Container}>
    <Link to="/" aria-label="Home">
      <span>M</span>
    </Link>
    <NavLinks />
  </Wrapper>
);

export default Navbar;
