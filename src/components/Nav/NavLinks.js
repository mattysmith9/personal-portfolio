import React from 'react';
import { theme } from '@style';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled from 'styled-components';

const { colors } = theme;

const NavLinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  a {
    color: ${colors.modal};
    font-size: 1.3rem;
    text-decoration: none;
    padding: 0.3em 0.3em;
    font-family: ${theme.fontFamilyBtn};
    font-weight: normal;
  }
  a:hover {
    color: ${colors.orange};
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
  <NavLinksWrapper aria-label="navigation-links" desktop={desktop}>
    <AnchorLink aria-label="about-me" href="#about">
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
  </NavLinksWrapper>
);

export default NavLinks;
