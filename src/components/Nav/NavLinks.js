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
  font-display: auto;
  a {
    color: ${colors.blue};
    font-size: 1.2rem;
    text-decoration: none;
    margin-right: 1em;
    padding: 0.4em 0.4em;
  }
  a:hover {
    transform: ${theme.transform};
    transition: ${theme.transition};
    color: ${colors.orange};
    border-bottom: 1px solid ${colors.blue};
  }
  ${({ desktop }) =>
    desktop
      ? `
			@media (max-width: 960px) {
					display: none;
			}
			a {
					margin-right: 1rem;
					&:last-child {
							margin-right: unset;
					}
			}
		`
      : `
			padding: 3rem;
			display: flex;
			flex-direction: column;
			a {
					margin-bottom: 1rem;
					&:last-child {
							margin-bottom: unset;
					}
			}
	`}
`;

const NavLinks = ({ desktop }) => (
  <Wrapper desktop={desktop}>
    <AnchorLink href="#about">about</AnchorLink>
    <AnchorLink href="#projects">projects</AnchorLink>
    <AnchorLink href="#skills">skills</AnchorLink>
    <AnchorLink href="#contact">contact</AnchorLink>
  </Wrapper>
);

export default NavLinks;
