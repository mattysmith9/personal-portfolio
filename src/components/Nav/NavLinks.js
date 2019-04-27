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
    color: ${colors.orange};
    font-size: 1.3rem;
    text-decoration: none;
    margin-right: 1em;
    padding: 0.4em 0.4em;
    font-family: ${theme.fontFamily};
  }
  a:hover {
    transform: ${theme.transform};
    transition: ${theme.transition};
    color: ${colors.blue};
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
  <Wrapper aria-label="nav links" desktop={desktop}>
    <AnchorLink aria-label="about me" href="#about">
      about
    </AnchorLink>
    <AnchorLink aria-label="projects" href="#projects">
      projects
    </AnchorLink>
    <AnchorLink aria-label="skills" href="#skills">
      skills
    </AnchorLink>
    <AnchorLink aria-label="contact" href="#contact">
      contact
    </AnchorLink>
  </Wrapper>
);

export default NavLinks;
