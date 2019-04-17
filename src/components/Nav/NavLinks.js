import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled from 'styled-components';
import { theme } from '@style';

const { colors } = theme;

const Wrapper = styled.div`
  padding-right: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: ${colors.blue};
    font-family: ${theme.fontFamilyNav};
    font-weight: ${theme.navWeight};
    font-size: 1.3rem;
    text-decoration: none;
    margin-right: 1em;
    padding: 0.4em 0.4em;
  }
  a:hover {
    transform: ${theme.transform};
    transition: ${theme.transition};
    color: ${colors.orange};
  }
`;

export const NavLinks = () => (
  <Wrapper>
    <AnchorLink href="#about">about</AnchorLink>
    <AnchorLink href="#projects">projects</AnchorLink>
    <AnchorLink href="#skills">skills</AnchorLink>
    <AnchorLink href="#footer">contact</AnchorLink>
  </Wrapper>
);