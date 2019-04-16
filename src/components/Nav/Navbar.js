import React from 'react';
import { Link } from 'gatsby';
import { Container } from '../../styled/Container';
import { NavLinks } from './NavLinks';
import styled from 'styled-components';
import theme from '../../styled/theme';
const { colors } = theme;

const Wrapper = styled.div`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    color: ${colors.green};
    font-size: 3.2em;
    font-weight: bold;
    font-family: ${theme.fontFamily};
    background: ${colors.blue};
    padding: 0.1em 0.4em;
    border-radius: ${theme.borderRadiusBtn};
    box-shadow: ${theme.boxShadow};
    border-bottom: 4px solid ${colors.green};
  }
  span:hover {
    transform: ${theme.transform};
    transition: ${theme.transition};
    color: ${colors.orange};
    border-bottom: 4px solid ${colors.orange};
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
