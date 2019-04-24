import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled from 'styled-components';
import { theme, mediaSizes } from '@style';
const { colors } = theme;

const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  outline: 0;
  transition: ${theme.transition};
  transform: translateX(${props => (props.menuOpen ? 0 : 100)}vw);
  visibility: ${props => (props.menuOpen ? 'visible' : 'hidden')};
  display: none;
  ${mediaSizes.tablet`display: block;`};
`;

const Sidebar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${colors.grey};
  padding: 50px;
  width: 50vw;
  height: 100%;
  position: relative;
  right: 0;
  margin-left: auto;
  box-shadow: -2px 0px 4px ${colors.blue};
  ${mediaSizes.thone`padding: 25px;`};
  ${mediaSizes.phablet`width: 75vw;`};
  ${mediaSizes.small`padding: 10px;`};
`;

const NavLinks = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-direction: column;
  text-align: center;
`;

const NavList = styled.ol`
  width: 100%;
`;

const NavListItem = styled.li`
  margin: 0 auto 20px;
  position: relative;
  counter-increment: item 1;
  ${mediaSizes.thone`
    margin: 0 auto 10px;
  `};
  ${mediaSizes.small};
  &:before {
    display: block;
    content: '0' counter(item) '.';
    color: ${colors.green};
    margin-bottom: 5px;
  }
`;

const NavLink = styled(AnchorLink)`
  display: inline-block;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  color: inherit;
  position: relative;
  transition: ${theme.transition};
  cursor: pointer;
  &:hover,
  &:active,
  &:focus {
    color: ${colors.green};
    outline: 0;
  }
  padding: 3px 20px 20px;
  width: 100%;
`;

class Menu extends Component {
  static propTypes = {
    isHome: PropTypes.bool.isRequired,
    menuOpen: PropTypes.bool.isRequired,
    navLinks: PropTypes.array.isRequired,
    handleMenuClick: PropTypes.func.isRequired,
  };
  render() {
    const { isHome, menuOpen, navLinks, handleMenuClick } = this.props;

    return (
      <MenuContainer
        menuOpen={menuOpen}
        onClick={handleMenuClick}
        aria-hidden={!menuOpen}
        tabIndex={menuOpen ? 1 : -1}
      >
        <Sidebar>
          <NavLinks>
            {isHome && (
              <NavList>
                {navLinks &&
                  navLinks.map(({ url, name }, i) => (
                    <NavListItem key={i}>
                      <NavLink href={url}>{name}</NavLink>
                    </NavListItem>
                  ))}
              </NavList>
            )}
          </NavLinks>
        </Sidebar>
      </MenuContainer>
    );
  }
}

export default Menu;
