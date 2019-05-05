import React from 'react';
import { theme, mediaSizes } from '@style';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled from 'styled-components';
import { navigationLinks } from '@data';

const { colors } = theme;

const NavLinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  ${({ desktop }) =>
    desktop
      ? `
			@media (max-width: 960px) {
					display: none;
			}
		`
      : `
			padding: 3rem;
			display: flex;
			flex-direction: column;	
	`}
`;

const NavLinksList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  ${mediaSizes.tablet`display: block;`};
`;

const NavLinksHref = styled(AnchorLink)`
  text-decoration: none;
  color: ${colors.blue};
  font-size: 1.3rem;
  text-decoration: none;
  padding: 0.8em;
  font-family: ${theme.fontFamilyBtn};
  &:hover {
    color: ${colors.green};
  }
`;

const NavLinks = ({ desktop }) => (
  <NavLinksWrapper aria-label="navigation-links" desktop={desktop}>
    <NavLinksList>
      {navigationLinks &&
        navigationLinks.map(({ name, url }, i) => (
          <li key={i}>
            <NavLinksHref href={url}>{name}</NavLinksHref>
          </li>
        ))}
    </NavLinksList>
  </NavLinksWrapper>
);

export default NavLinks;
